-- CreateTable
CREATE TABLE "ChainState" (
    "chain" TEXT NOT NULL,
    "headNumber" BIGINT NOT NULL DEFAULT -1,
    "headHash" TEXT NOT NULL,
    "epoch" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ChainState_pkey" PRIMARY KEY ("chain")
);

-- CreateTable
CREATE TABLE "Block" (
    "chain" TEXT NOT NULL,
    "number" BIGINT NOT NULL,
    "hash" TEXT NOT NULL,
    "parentHash" TEXT NOT NULL,
    "digest" TEXT NOT NULL,

    CONSTRAINT "Block_pkey" PRIMARY KEY ("chain","number")
);

-- CreateTable
CREATE TABLE "Transfer" (
    "id" BIGSERIAL NOT NULL,
    "chain" TEXT NOT NULL,
    "blockNumber" BIGINT NOT NULL,
    "txHash" TEXT NOT NULL,
    "logIndex" INTEGER NOT NULL,
    "contract" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "amount" TEXT NOT NULL,

    CONSTRAINT "Transfer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Block_chain_hash_key" ON "Block"("chain", "hash");

-- CreateIndex
CREATE INDEX "Transfer_chain_from_id_idx" ON "Transfer"("chain", "from", "id");

-- CreateIndex
CREATE INDEX "Transfer_chain_to_id_idx" ON "Transfer"("chain", "to", "id");

-- CreateIndex
CREATE UNIQUE INDEX "Transfer_chain_txHash_logIndex_key" ON "Transfer"("chain", "txHash", "logIndex");

-- AddForeignKey
ALTER TABLE "Transfer" ADD CONSTRAINT "Transfer_chain_blockNumber_fkey" FOREIGN KEY ("chain", "blockNumber") REFERENCES "Block"("chain", "number") ON DELETE CASCADE ON UPDATE CASCADE;

