import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://HugoDorne.github.io",

  vite: {
      plugins: [tailwindcss()],
      build: {
        minify: "esbuild",
      },
	},

  integrations: [sitemap()],
});