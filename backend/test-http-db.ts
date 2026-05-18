import { PrismaClient } from '@prisma/client';
import { neon } from '@neondatabase/serverless';
import { PrismaNeonHTTP } from '@prisma/adapter-neon';
import dotenv from 'dotenv';

dotenv.config();

const adapter = new PrismaNeonHTTP('', {});
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Testing HTTP connection...');
  try {
    const res = await prisma.destination.findMany();
    console.log('Success:', res.length);
  } catch (e: any) {
    console.error('Error:', e);
  }
}
main();
