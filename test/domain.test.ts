import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BlockInput, digest, readCursor, signCursor, ZERO } from '../src/domain.js';
const hash = (s: string) => '0x' + s.repeat(64);
const address = '0x' + 'a'.repeat(40);
const block = {chain: 'ETH', number: '0', hash: hash('1'), parentHash: ZERO,
  transfers: [{txHash: hash('2'), logIndex: 0, contract: address, from: address, to: address, amount: (2n ** 256n - 1n).toString()}]};
test('normalizes addresses and preserves uint256 precision', () => {
  const parsed = BlockInput.parse(block);
  assert.equal(parsed.transfers[0]!.amount, (2n ** 256n - 1n).toString());
  assert.equal(BlockInput.parse({...block, transfers: [{...block.transfers[0], from: '0x' + 'A'.repeat(40)}]}).transfers[0]!.from, address);
});
test('rejects duplicate logs, unsafe amounts, malformed identities and heights', () => {
  for (const bad of [{...block, transfers: [...block.transfers, ...block.transfers]}, {...block, number: '-1'},
    {...block, number: '9223372036854775808'}, {...block, hash: '0xwrong'},
    {...block, transfers: [{...block.transfers[0], amount: (2n ** 256n).toString()}]},
    {...block, transfers: [{...block.transfers[0], amount: 1}]}]) assert.equal(BlockInput.safeParse(bad).success, false);
});
test('digest is independent of log arrival order', () => {
  const parsed = BlockInput.parse({...block, transfers: [...block.transfers, {...block.transfers[0], logIndex: 1}]});
  assert.equal(digest(parsed), digest({...parsed, transfers: [...parsed.transfers].reverse()}));
});
test('signed cursors reject tampering and wrong keys', () => {
  const cursor = {v: 1 as const, chain: 'ETH' as const, address, epoch: 0, anchor: '12', last: '999'};
  const key = 'a'.repeat(32), signed = signCursor(cursor, key);
  assert.deepEqual(readCursor(signed, key), cursor);
  assert.throws(() => readCursor(signed, 'b'.repeat(32)));
  assert.throws(() => readCursor('x' + signed, key));
  assert.throws(() => readCursor('x'.repeat(2049), key));
});
