import { PrismaClient } from '@prisma/client';
import { BlockInput, ZERO } from '../src/domain.js';
import { ingest } from '../src/store.js';

const db = new PrismaClient();
const address = '0x' + 'a'.repeat(40);
try {
  // Synthetic deterministic genesis. Rerunning is a no-op, never an increment.
  console.log(await ingest(db, BlockInput.parse({chain: 'ETH', number: '0',
    hash: '0x' + '1'.repeat(64), parentHash: ZERO,
    transfers: [{txHash: '0x' + '2'.repeat(64), logIndex: 0, contract: '0x' + 'c'.repeat(40),
      from: address, to: '0x' + 'b'.repeat(40), amount: '123456789012345678901234567890'}]})));
} finally { await db.$disconnect(); }
