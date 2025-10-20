import prismaPkg from '../prisma/client/index.js';
const { PrismaClient } = prismaPkg;

const prisma = new PrismaClient();

async function main() {
  const addrA = '0x1111111111111111111111111111111111111111';
  const addrB = '0x2222222222222222222222222222222222222222';
  const token = '0x0000000000000000000000000000000000000000';

  // day as a real Date (midnight UTC) for @db.Date
  const todayStr = new Date().toISOString().slice(0, 10);
  const day = new Date(todayStr);

  await prisma.block.upsert({
    where: { id: BigInt(1) },
    update: {},
    create: {
      id: BigInt(1),
      chain: 'ETH',
      hash: '0xblock1',
      parentHash: '0xparent0',
      timestamp: new Date(),
    },
  });

  await prisma.transaction.upsert({
    where: { hash: '0xtx1' },
    update: {},
    create: {
      hash: '0xtx1',
      blockId: BigInt(1),
      chain: 'ETH',
      from: addrA,
      to: addrB,
      valueWei: '100000000000000000', // 0.1 ETH
      success: true,
      idx: 0,
      createdAt: new Date(),
    },
  });

  // token transfer unique on (txHash, logIdx) -> use upsert by a surrogate
  await prisma.tokenTransfer.upsert({
    where: { txHash_logIdx: { txHash: '0xtx1', logIdx: 0 } },
    update: {},
    create: {
      chain: 'ETH',
      blockId: BigInt(1),
      txHash: '0xtx1',
      logIdx: 0,
      token,
      from: addrA,
      to: addrB,
      amountRaw: '5000000000000000000',
      createdAt: new Date(),
    },
  });

  await prisma.walletDaily.upsert({
    where: { chain_address_day: { chain: 'ETH', address: addrA, day } },
    update: {
      txCount: { increment: 1 },
      volumeWei: { increment: '100000000000000000' },
    },
    create: {
      chain: 'ETH',
      address: addrA,
      day,
      txCount: 1,
      volumeWei: '100000000000000000',
    },
  });
}

main()
  .then(async () => {
    console.log('Seeded ✅');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
