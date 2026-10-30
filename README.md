# ChainDash — canonical transfer index

A TypeScript/PostgreSQL indexing API that makes chain reorganizations and pagination consistency explicit. Includes its own Prisma schema and migration, authenticated ingestion, full uint256 transfer amounts, and real-database recovery tests.

## Local run

Node.js 22+ and Docker Compose v2 are required for this setup.

```sh
npm ci
docker compose up -d --wait
cp .env.example .env
# Replace both keys with independently generated secrets (at least 32 characters).
# Export .env variables in your shell, or use Node's environment file support:
export DATABASE_URL=postgresql://chaindash:local-demo-only@localhost:5432/chaindash
npm run db:deploy
npm run seed
node --env-file=.env --import tsx src/server.ts
```

The demo seed is synthetic and idempotent. The server binds to loopback by default. Deploy behind TLS with managed credentials; the included database password is local-only. An indexer that fetches real RPC blocks is deliberately outside this repository: ingestion trusts an authorized source's block data and does not verify consensus, receipts or EVM execution.

## API

| Endpoint | Behavior |
| --- | --- |
| `POST /ingest/blocks` | Bearer `INGEST_API_KEY`; atomic append, duplicate detection or reorg replacement |
| `GET /wallet/:address/activity?chain=ETH&limit=25` | Newest indexed transfers and opaque `nextCursor` |
| `GET /wallet/:address/activity?chain=ETH&cursor=...` | Continue the same anchored traversal |
| `GET /networks/:chain/stats` | Indexed blocks, transfers, distinct participating addresses, head and reorg epoch |
| `GET /health` | Database readiness |

Supported chain namespaces: ETH, OP, BSC, POLY, ARB. Read routes are public and rate-limited. The old password-free demo login has been removed. Counts describe this index, not global network activity or unique humans. Transfer amounts, block heights and transfer IDs are decimal strings; amounts remain exact through 2^256−1. Addresses/hashes require valid hexadecimal width and are normalized to lowercase. An empty index has anchor `-1` and no continuation cursor.

Example block (start with height 0 and the zero parent hash). Each block accepts up to 1000 transfer logs and the request body is capped at 1 MiB:

```json
{
  "chain": "ETH", "number": "0",
  "hash": "0x1111111111111111111111111111111111111111111111111111111111111111",
  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "transfers": []
}
```

## Consistency contract

Ingestion starts from genesis and requires contiguous parents. A per-chain row lock and serializable transaction protect concurrent writers, with bounded retries for serialization conflicts. Duplicate blocks return `duplicate`; the same hash with different logs returns 409. Log identity includes chain, transaction hash and log index. Replacing a height atomically deletes its old block and all descendants, cascades orphaned logs, inserts the replacement and increments a reorg epoch. Gaps, incorrect parents and duplicate identities fail without partially changing the index. Hashes are trusted labels; these checks do not prove a block's authenticity.

A first page anchors at the current indexed height. Subsequent keyset pages filter to that height, so new appends cannot shift or repeat earlier results. HMAC-signed cursors bind the chain, wallet, anchor, last ID and reorg epoch. A reorg invalidates previous cursors with 409, requiring a fresh traversal. Reads use one repeatable-read transaction to keep the head and rows consistent. Cursor keys must remain stable across replicas; rotating the key invalidates existing cursors. There is no Redis cache to serve stale orphaned data in this version.

## Verify

```sh
npm run build
npm test
# Only against a disposable database: integration deletes existing indexed records.
ALLOW_TEST_DB_RESET=1 npm run test:integration
```

GitHub CI provisions PostgreSQL 16, applies the checked-in migration, and exercises the API against the real database: concurrent duplicate ingestion, cross-chain identities, rollback after a failed reorg, orphan removal, precise uint256 values, stable pages during append, cursor tampering and invalidation after reorg. Domain tests cover validation and deterministic block digests. No fabricated throughput numbers are presented.

This repository previously referenced a Prisma schema outside the checkout. The new schema is self-contained; existing external databases require a planned migration rather than applying this initial migration blindly. Future extensions include RPC backfill, finalized-head policies, contract metadata and query benchmarks with representative chain data.
