import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	// GitHub Pages
	site: "https://HugoDorne.github.io",
	base: "/portfolio",
});
