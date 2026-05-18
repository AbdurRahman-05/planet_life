const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Testing connection to DB...');
  try {
    const start = Date.now();
    const destinations = await prisma.destination.findMany();
    console.log(`Connected! Found ${destinations.length} destinations in ${Date.now() - start}ms.`);
  } catch (e) {
    console.error('Error connecting to DB:', e);
  } finally {
    await prisma.$disconnect();
  }
}
main();
