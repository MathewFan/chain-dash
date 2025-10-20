import Fastify from 'fastify';
import jwt from '@fastify/jwt';
import rate from '@fastify/rate-limit';
import Redis from 'ioredis';
import { z } from 'zod';

// IMPORTANT: default import, then destructure PrismaClient
// replace any previous '@prisma/client' import with these two lines:
import prismaPkg from '../prisma/client/index.js';
const { PrismaClient } = prismaPkg;

const app = Fastify({ logger: true });

// Convert BigInt & Prisma Decimal -> string for all responses
app.addHook('preSerialization', (_req, _reply, payload, done) => {
  const replacer = (_k: string, v: any) => {
    if (typeof v === 'bigint') return v.toString();
    // Prisma Decimal in v6 shows up as an object with toString returning the decimal
    if (v && typeof v === 'object' && typeof v.toString === 'function') {
      // Decimal.toString() yields numeric string; plain objects keep default
      const name = v.constructor?.name;
      if (name === 'Decimal') return v.toString();
    }
    return v;
  };

  try {
    if (payload && typeof payload === 'object') {
      const out = JSON.parse(JSON.stringify(payload, replacer));
      return done(null, out);
    }
    return done(null, payload as any);
  } catch (err) {
    return done(err as Error);
  }
});


// plugins
app.register(jwt, { secret: process.env.JWT_SECRET ?? 'devsecret' });
app.register(rate, { max: 1000, timeWindow: '1 minute' });

const prisma = new PrismaClient();
const redis = new Redis(process.env.REDIS_URL ?? 'redis://localhost:6379');

// public login (demo)
app.post('/auth/login', async () => {
  const token = app.jwt.sign({ sub: 'demo-user' }, { expiresIn: '1d' });
  return { token };
});

// protect the rest
app.addHook('onRequest', async (req, reply) => {
  if (req.url.startsWith('/auth')) return;
  try {
    await req.jwtVerify();
  } catch {
    return reply.code(401).send({ error: 'unauthorized' });
  }
});

app.get('/wallet/:address/activity', async (req, reply) => {
  const { address } = z.object({ address: z.string().length(42) }).parse(req.params);
  const key = `wallet:activity:${address}`;

  // try cache first
  const cached = await redis.get(key);
  if (cached) return reply.header('x-cache', 'HIT').send(JSON.parse(cached));

  // fetch from DB
  const transfers = await prisma.tokenTransfer.findMany({
    where: { OR: [{ from: address }, { to: address }] },
    orderBy: { id: 'desc' },
    take: 100,
  });

  // convert BigInt & Decimal to strings
  const safe = transfers.map(t => ({
    ...t,
    id: t.id.toString(),
    blockId: t.blockId.toString(),
    amountRaw: t.amountRaw.toString(), // Prisma Decimal -> string
  }));

  await redis.set(key, JSON.stringify(safe), 'EX', 30);
  return reply.header('x-cache', 'MISS').send(safe);
});


// basic network counts
app.get('/networks/:chain/stats', async (req) => {
  const { chain } = z.object({ chain: z.enum(['ETH','OP','BSC','POLY','ARB']) }).parse(req.params);
  const [txCount, walletRows] = await Promise.all([
    prisma.transaction.count({ where: { chain } }),
    prisma.walletDaily.count({ where: { chain } }),
  ]);
  return { chain, txCount, addrCount: walletRows };
});

app.listen({ port: 3000, host: '0.0.0.0' });
