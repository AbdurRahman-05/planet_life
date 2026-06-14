import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: 'public', // Explicitly copies files from public/ folder (e.g. favicon.ico) to dist/ on build
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
});
