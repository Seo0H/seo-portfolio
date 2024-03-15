import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode, { type Options } from 'rehype-pretty-code';

const prettyCodeOptions: Options = {
  theme: 'nord',
  defaultLang: {
    block: 'plaintext',
  },
  keepBackground: false,
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        providerImportSource: '@mdx-js/react',
        remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, { name: 'matter' }], remarkGfm],
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
      }),
    },
    react(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@contents', replacement: '/contents' },
    ],
  },
  server: {
    port: 3000,
  },
});
