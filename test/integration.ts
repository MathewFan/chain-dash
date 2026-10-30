import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PrismaClient } from '@prisma/client';
import { createApp } from '../src/app.js';
import { ZERO } from '../src/domain.js';

const h = (n: number) => '0x' + n.toString(16).padStart(64, '0');
const address = '0x' + 'a'.repeat(40), recipient = '0x' + 'b'.repeat(40);
const log = (n: number) => ({txHash: h(n), logIndex: 0, contract: recipient, from: address,
  to: recipient, amount: (2n ** 256n - 1n).toString()});
const block = (number: number, hash: number, parent: number, transfers = [log(hash + 100)]) =>
  ({chain: 'ETH', number: String(number), hash: h(hash), parentHash: parent ? h(parent) : ZERO, transfers});
const key = 'integration-key-'.repeat(4);

test('PostgreSQL atomic indexing, reorg rollback and snapshot pagination', async () => {
  // Run only against a disposable database; this suite owns all ETH/OP records.
  assert.equal(process.env.ALLOW_TEST_DB_RESET, '1', 'explicit disposable database opt-in required');
  const db = new PrismaClient();
  await db.block.deleteMany(); await db.chainState.deleteMany();
  const app = await createApp(db, {ingestKey: key, cursorKey: key + 'cursor'});
  const post = (body: unknown) => app.inject({method: 'POST', url: '/ingest/blocks', payload: body,
    headers: {authorization: 'Bearer ' + key}});
  const get = (cursor?: string, chain = 'ETH', wallet = address) => app.inject({method: 'GET',
    url: `/wallet/${wallet}/activity?chain=${chain}&limit=1${cursor ? '&cursor=' + encodeURIComponent(cursor) : ''}`});
  try {
    assert.equal((await app.inject({method: 'POST', url: '/ingest/blocks', payload: block(0,1,0)})).statusCode, 401);
    assert.equal((await post({...block(0,1,0), number: 'invalid'})).statusCode, 400);
    assert.equal((await post(block(0,1,0))).json().status, 'appended');
    assert.equal((await post(block(0,1,0))).json().status, 'duplicate');
    assert.equal((await post({...block(0,1,0), transfers: []})).statusCode, 409);
    assert.equal((await post(block(2,3,2))).statusCode, 409);
    assert.equal((await post(block(1,2,99))).statusCode, 409);
    assert.equal((await post(block(1,2,1))).statusCode, 200);
    const first = (await get()).json();
    assert.equal(first.anchor, '1'); assert.ok(first.nextCursor);
    assert.equal(first.items[0].amount, (2n ** 256n - 1n).toString());
    assert.equal((await post(block(2,3,2))).statusCode, 200);
    const second = (await get(first.nextCursor)).json();
    assert.equal(second.anchor, '1'); assert.equal(second.items[0].blockNumber, '0');
    assert.equal(second.nextCursor, null);
    assert.equal((await get(first.nextCursor, 'OP')).statusCode, 400);
    assert.equal((await get(first.nextCursor, 'ETH', recipient)).statusCode, 400);
    assert.equal((await get('x' + first.nextCursor)).statusCode, 400);
    // Identical transaction/log hashes on another chain are independent.
    assert.equal((await post({...block(0,1,0), chain: 'OP'})).statusCode, 200);
    const before = (await app.inject('/networks/ETH/stats')).json();
    assert.deepEqual(before, {chain: 'ETH', head: '2', epoch: 0, blocks: 3, transfers: 3, wallets: '2'});
    // This replacement deletes descendants, then violates an existing log identity.
    // The whole transaction must roll back, including cascade deletion and epoch.
    assert.equal((await post(block(1,9,1,[log(101)]))).statusCode, 409);
    assert.deepEqual((await app.inject('/networks/ETH/stats')).json(), before);
    assert.equal((await post(block(1,9,1))).json().status, 'reorganized');
    assert.equal((await get(first.nextCursor)).statusCode, 409);
    assert.equal(await db.block.count({where: {chain: 'ETH'}}), 2);
    assert.equal(await db.transfer.count({where: {chain: 'ETH', blockNumber: 2n}}), 0);
    const concurrent = await Promise.all([post(block(2,10,9)), post(block(2,10,9))]);
    assert.deepEqual(concurrent.map(r => r.statusCode), [200, 200]);
    assert.deepEqual(new Set(concurrent.map(r => r.json().status)), new Set(['appended', 'duplicate']));
    assert.equal(await db.transfer.count({where: {chain: 'ETH'}}), 3);
    assert.equal((await app.inject('/health')).statusCode, 200);
    console.log('Verified rollback, cross-chain identity, concurrent idempotency, reorg and pagination');
  } finally {
    await app.close(); await db.$disconnect();
  }
});
