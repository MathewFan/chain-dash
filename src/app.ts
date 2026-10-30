import Fastify from 'fastify';
import rateLimit from '@fastify/rate-limit';
import { timingSafeEqual } from 'node:crypto';
import type { PrismaClient } from '@prisma/client';
import { z, ZodError } from 'zod';
import { Address, BlockInput, Chain, Conflict, readCursor, signCursor } from './domain.js';
import { activity, ingest, stats } from './store.js';

export async function createApp(db: PrismaClient, config: {ingestKey: string; cursorKey: string; logger?: boolean}) {
  if (config.ingestKey.length < 32 || config.cursorKey.length < 32) throw new Error('keys must each contain at least 32 characters');
  const app = Fastify({logger: config.logger ?? false, bodyLimit: 1024 * 1024});
  await app.register(rateLimit, {max: 120, timeWindow: '1 minute'});
  app.setErrorHandler((error, _request, reply) => {
    if (error instanceof ZodError) return reply.code(400).send({error: 'invalid input', issues: error.issues.map(i => ({path: i.path, message: i.message}))});
    if (error instanceof Conflict) return reply.code(409).send({error: error.message});
    if (error instanceof Error && 'statusCode' in error && typeof error.statusCode === 'number' && error.statusCode < 500) return reply.code(error.statusCode).send({error: error.message});
    app.log.error(error);
    return reply.code(500).send({error: 'internal error'});
  });
  app.get('/health', async (_request, reply) => {
    try { await db.$queryRaw`SELECT 1`; return {status: 'ready'}; }
    catch { return reply.code(503).send({status: 'database unavailable'}); }
  });
  app.post('/ingest/blocks', async (request, reply) => {
    const auth = request.headers.authorization ?? '';
    const expected = Buffer.from('Bearer ' + config.ingestKey), actual = Buffer.from(auth);
    if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) return reply.code(401).send({error: 'unauthorized'});
    return ingest(db, BlockInput.parse(request.body));
  });
  app.get('/wallet/:address/activity', async (request, reply) => {
    const {address} = z.object({address: Address}).parse(request.params);
    const query = z.object({chain: Chain.default('ETH'), limit: z.coerce.number().int().min(1).max(100).default(25),
      cursor: z.string().max(2048).optional()}).strict().parse(request.query);
    let cursor;
    if (query.cursor) {
      try { cursor = readCursor(query.cursor, config.cursorKey); }
      catch { return reply.code(400).send({error: 'invalid cursor'}); }
      if (cursor.chain !== query.chain || cursor.address !== address) return reply.code(400).send({error: 'cursor belongs to another query'});
    }
    const result = await activity(db, query.chain, address, query.limit, cursor);
    return {chain: query.chain, address, anchor: result.anchor, epoch: result.epoch, items: result.rows,
      nextCursor: result.last ? signCursor({v: 1, chain: query.chain, address, epoch: result.epoch, anchor: result.anchor, last: result.last}, config.cursorKey) : null};
  });
  app.get('/networks/:chain/stats', async request => {
    const {chain} = z.object({chain: Chain}).parse(request.params);
    return stats(db, chain);
  });
  return app;
}
