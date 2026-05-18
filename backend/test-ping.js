async function main() {
  console.log('Fetching /api/destinations...');
  const start = Date.now();
  try {
    const res = await fetch('http://localhost:3001/api/destinations');
    const text = await res.text();
    console.log(`Status: ${res.status}`);
    console.log(`Response snippet: ${text.substring(0, 100)}`);
    console.log(`Time: ${Date.now() - start}ms`);
  } catch (e) {
    console.error('Fetch error:', e);
  }
}
main();
