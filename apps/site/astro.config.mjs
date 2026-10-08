import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://registry.example.com',
  output: 'static',
  integrations: [tailwind()],
});
