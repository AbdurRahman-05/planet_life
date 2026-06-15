// Root entry point for Hostinger Node.js Passenger
console.log(`[Root App] Passenger entry point initialized (PID: ${process.pid})`);
require('./backend/dist/server.js');
