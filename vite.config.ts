import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        providerImportSource: '@mdx-js/react',
        remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, { name: 'matter' }]],
      }),
    },
    react(),
  ],
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
