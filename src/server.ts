import { PrismaClient } from '@prisma/client';
import { createApp } from './app.js';

const db = new PrismaClient();
const app = await createApp(db, {ingestKey: process.env.INGEST_API_KEY ?? '',
  cursorKey: process.env.CURSOR_SECRET ?? '', logger: true});
for (const signal of ['SIGINT', 'SIGTERM'] as const) process.once(signal, () => {
  void app.close().then(() => db.$disconnect());
});
try {
  await app.listen({port: Number(process.env.PORT ?? 3000), host: process.env.HOST ?? '127.0.0.1'});
} catch (error) {
  app.log.error(error);
  await db.$disconnect();
  process.exitCode = 1;
}
