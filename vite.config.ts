import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import rehypePrettyCode, { type Options } from 'rehype-pretty-code';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkUnwrapImages from 'remark-unwrap-images';
import { defineConfig } from 'vite';

import rehypeWrapSibling from './libs/rehype-wrap-sibling';

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
        remarkPlugins: [
          remarkFrontmatter,
          [remarkMdxFrontmatter, { name: 'matter' }],
          remarkGfm,
          remarkUnwrapImages,
        ],
        rehypePlugins: [
          [rehypePrettyCode, prettyCodeOptions],
          [rehypeWrapSibling, { selector: 'h4 + *', wrapper: 'div.print-breakpoint' }],
        ],
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
  preview: {
    port: 3000,
  },
});
