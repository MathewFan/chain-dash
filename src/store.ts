import { Prisma, PrismaClient } from '@prisma/client';
import { Conflict, digest, ZERO, type Input, type Position } from './domain.js';

export async function ingest(db: PrismaClient, block: Input) {
  const number = BigInt(block.number), checksum = digest(block);
  for (let attempt = 0; ; attempt++) {
    try {
      return await db.$transaction(async tx => {
        await tx.$executeRaw`INSERT INTO "ChainState" (chain, "headHash")
          VALUES (${block.chain}, ${ZERO}) ON CONFLICT (chain) DO NOTHING`;
        // One writer per chain. Serializable isolation also detects stale snapshots.
        await tx.$queryRaw`SELECT chain FROM "ChainState" WHERE chain = ${block.chain} FOR UPDATE`;
        const state = await tx.chainState.findUniqueOrThrow({where: {chain: block.chain}});
        const existing = await tx.block.findUnique({where: {chain_number: {chain: block.chain, number}}});
        if (existing?.hash === block.hash) {
          if (existing.digest !== checksum) throw new Conflict('same block hash has different contents');
          return {status: 'duplicate', head: state.headNumber.toString(), epoch: state.epoch};
        }
        if (number > state.headNumber + 1n) throw new Conflict('block gap: ingest parents first');
        const parent = number === 0n ? ZERO : (await tx.block.findUnique({where: {
          chain_number: {chain: block.chain, number: number - 1n}}}))?.hash;
        if (block.parentHash !== parent) throw new Conflict('parent does not match canonical chain');
        const reorg = number <= state.headNumber;
        if (reorg) await tx.block.deleteMany({where: {chain: block.chain, number: {gte: number}}});
        await tx.block.create({data: {chain: block.chain, number, hash: block.hash, parentHash: block.parentHash, digest: checksum}});
        if (block.transfers.length) await tx.transfer.createMany({data: block.transfers.map(t => ({...t, chain: block.chain, blockNumber: number}))});
        const next = await tx.chainState.update({where: {chain: block.chain}, data: {
          headNumber: number, headHash: block.hash, ...(reorg ? {epoch: {increment: 1}} : {})}});
        return {status: reorg ? 'reorganized' : 'appended', head: number.toString(), epoch: next.epoch};
      }, {isolationLevel: Prisma.TransactionIsolationLevel.Serializable, timeout: 10000});
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Raw row-lock/insert statements surface PostgreSQL serialization failures
        // as P2010, while ORM statements use P2034. Retry only these SQL states.
        const rawConflict = error.code === 'P2010' && ['40001', '40P01'].includes(String(error.meta?.code));
        if ((error.code === 'P2034' || rawConflict) && attempt < 3) {
          await new Promise(resolve => setTimeout(resolve, 10 * 2 ** attempt));
          continue;
        }
        if (error.code === 'P2002') throw new Conflict('block or log identity already exists');
      }
      throw error;
    }
  }
}

export async function activity(db: PrismaClient, chain: string, address: string, limit: number, cursor?: Position) {
  return db.$transaction(async tx => {
    const state = await tx.chainState.findUnique({where: {chain}});
    const epoch = state?.epoch ?? 0;
    if (cursor && cursor.epoch !== epoch) throw new Conflict('chain reorganized; restart pagination');
    const anchor = cursor ? BigInt(cursor.anchor) : (state?.headNumber ?? -1n);
    const rows = await tx.transfer.findMany({where: {chain, blockNumber: {lte: anchor},
      OR: [{from: address}, {to: address}], ...(cursor ? {id: {lt: BigInt(cursor.last)}} : {})},
      orderBy: {id: 'desc'}, take: limit + 1});
    const more = rows.length > limit;
    const page = rows.slice(0, limit);
    return {epoch, anchor: anchor.toString(), rows: page.map(row => ({...row, id: row.id.toString(), blockNumber: row.blockNumber.toString()})),
      last: more ? page.at(-1)!.id.toString() : undefined};
  }, {isolationLevel: Prisma.TransactionIsolationLevel.RepeatableRead});
}

export async function stats(db: PrismaClient, chain: string) {
  return db.$transaction(async tx => {
    const [row] = await tx.$queryRaw<{wallets: bigint}[]>`SELECT COUNT(*) AS wallets FROM (
      SELECT "from" AS address FROM "Transfer" WHERE chain = ${chain}
      UNION SELECT "to" AS address FROM "Transfer" WHERE chain = ${chain}) addresses`;
    const state = await tx.chainState.findUnique({where: {chain}});
    return {chain, head: state?.headNumber.toString() ?? null, epoch: state?.epoch ?? 0,
      blocks: await tx.block.count({where: {chain}}), transfers: await tx.transfer.count({where: {chain}}),
      wallets: row!.wallets.toString()};
  }, {isolationLevel: Prisma.TransactionIsolationLevel.RepeatableRead});
}
