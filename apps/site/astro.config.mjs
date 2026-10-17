import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://teikmin.github.io/web_dictionary',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  integrations: [tailwind()],
});
