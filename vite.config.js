import { defineConfig } from 'vite';

export default defineConfig({
  base: '/tcg-value-deck-pwa/',
  server: {
    port: 8190,
    strictPort: true,
    host: '0.0.0.0'
  },
  preview: {
    port: 8191,
    strictPort: true,
    host: '0.0.0.0'
  }
});
