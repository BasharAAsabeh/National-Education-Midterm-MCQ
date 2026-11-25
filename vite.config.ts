import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  // The full canonical bank is embedded in the self-contained offline bundle.
  build: { chunkSizeWarningLimit: 650 },
});
