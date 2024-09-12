import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/utils/remark-reading-time.ts';
import tailwind from "@astrojs/tailwind";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: 'https://geauxweisbeck4.dev',
  integrations: [mdx(), sitemap(), tailwind(), db()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    syntaxHighlight: 'shiki',
    shikiConfig: {
      // // Choose from Shiki's built-in themes (or add your own)
      // // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'rose-pine-moon'
    }
  }
});