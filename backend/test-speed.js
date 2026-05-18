async function main() {
  const endpoints = [
    '/api/destinations',
    '/api/content/home',
    '/api/content/about',
    '/api/content/contact',
    '/api/content/packages'
  ];

  for (const endpoint of endpoints) {
    const start = Date.now();
    try {
      const res = await fetch(`http://localhost:3001${endpoint}`);
      await res.text();
      console.log(`${endpoint} loaded in ${Date.now() - start}ms (status: ${res.status})`);
    } catch (e) {
      console.error(`${endpoint} failed:`, e);
    }
  }
}
main();
