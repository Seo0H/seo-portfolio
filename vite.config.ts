import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [{ enforce: 'pre', ...mdx({ providerImportSource: '@mdx-js/react' }) }, react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: 'contents', replacement: '/src/contents' },
    ],
  },
  server: {
    port: 3000,
  },
});
