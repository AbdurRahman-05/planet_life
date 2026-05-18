import { PrismaClient } from '@prisma/client';
import { neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;
const adapter = new PrismaNeon({ connectionString: '' });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Testing empty connection string...');
  try {
    const res = await prisma.destination.findMany();
    console.log('Success:', res.length);
  } catch (e: any) {
    console.error('Error:', e.message);
  }
}
main();
