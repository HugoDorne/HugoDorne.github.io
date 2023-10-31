import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],

  // GitHub Pages
  site: 'https://HugoDorne.github.io',
  base: '/portfolio',
});