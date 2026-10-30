import { test } from 'node:test';
import assert from 'node:assert/strict';
import type { PrismaClient } from '@prisma/client';
import { createApp } from '../src/app.js';
import { ZERO } from '../src/domain.js';

test('malformed numeric strings return 400 before database access', async () => {
  const db = new Proxy({}, {get() {throw new Error('validation reached database');}}) as PrismaClient;
  const key = 'x'.repeat(32);
  const app = await createApp(db, {ingestKey: key, cursorKey: key});
  try {
    const body = {chain: 'ETH', number: 'invalid', hash: '0x' + '1'.repeat(64), parentHash: ZERO, transfers: []};
    const response = await app.inject({method: 'POST', url: '/ingest/blocks', payload: body,
      headers: {authorization: 'Bearer ' + key}});
    assert.equal(response.statusCode, 400);
    assert.equal((await app.inject('/wallet/invalid/activity')).statusCode, 400);
    assert.equal((await app.inject('/networks/invalid/stats')).statusCode, 400);
  } finally {await app.close();}
});
