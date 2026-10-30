import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import { z } from 'zod';

export const ZERO = '0x' + '0'.repeat(64);
export const Chain = z.enum(['ETH', 'OP', 'BSC', 'POLY', 'ARB']);
export const Address = z.string().regex(/^0x[0-9a-fA-F]{40}$/).transform(s => s.toLowerCase());
export const Hash = z.string().regex(/^0x[0-9a-fA-F]{64}$/).transform(s => s.toLowerCase());
const Height = z.string().regex(/^(0|[1-9][0-9]{0,18})$/).pipe(z.string().refine(s => BigInt(s) <= 9223372036854775807n));
const Amount = z.string().regex(/^(0|[1-9][0-9]{0,77})$/).pipe(z.string().refine(s => BigInt(s) < 2n ** 256n));
export const BlockInput = z.object({
  chain: Chain, number: Height, hash: Hash, parentHash: Hash,
  transfers: z.array(z.object({
    txHash: Hash, logIndex: z.number().int().min(0).max(2147483647), contract: Address,
    from: Address, to: Address, amount: Amount,
  }).strict()).max(1000),
}).strict().superRefine((block, context) => {
  const keys = block.transfers.map(t => `${t.txHash}:${t.logIndex}`);
  if (new Set(keys).size !== keys.length) context.addIssue({code: 'custom', message: 'duplicate log identity'});
});
export type Input = z.infer<typeof BlockInput>;
export class Conflict extends Error {}
export function digest(block: Input): string {
  return createHash('sha256').update(JSON.stringify({...block, transfers: [...block.transfers]
    .sort((a,b) => a.txHash.localeCompare(b.txHash) || a.logIndex - b.logIndex)})).digest('hex');
}
const Cursor = z.object({v: z.literal(1), chain: Chain, address: Address,
  epoch: z.number().int().nonnegative(), anchor: Height, last: z.string().regex(/^[1-9][0-9]{0,19}$/),
}).strict();
export type Position = z.infer<typeof Cursor>;
export function signCursor(position: Position, key: string): string {
  const body = Buffer.from(JSON.stringify(Cursor.parse(position))).toString('base64url');
  return body + '.' + createHmac('sha256', key).update(body).digest('base64url');
}
export function readCursor(value: string, key: string): Position {
  if (value.length > 2048) throw new Error('invalid cursor');
  const parts = value.split('.');
  if (parts.length !== 2) throw new Error('invalid cursor');
  const [body, signature] = parts as [string, string];
  const expected = createHmac('sha256', key).update(body).digest();
  const received = Buffer.from(signature, 'base64url');
  if (expected.length !== received.length || !timingSafeEqual(expected, received)) throw new Error('invalid cursor');
  return Cursor.parse(JSON.parse(Buffer.from(body, 'base64url').toString()));
}
