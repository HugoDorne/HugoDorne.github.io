import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

import sitemap from "@astrojs/sitemap";

/** Pages kept out of the sitemap — they also carry a `noindex` meta tag. */
const UNLISTED_PATHS = ["/cv/", "/golf/", "/fr/cv/", "/fr/golf/"];

const BLOG_DIR = fileURLToPath(new URL("./src/content/blog", import.meta.url));

/**
 * Maps a blog slug to the date of its last meaningful change, read straight
 * from the frontmatter so the sitemap can expose a real `lastmod`.
 */
function readBlogDates() {
	const dates = new Map();
	let files;
	try {
		files = readdirSync(BLOG_DIR);
	} catch {
		return dates;
	}
	for (const file of files) {
		if (!file.endsWith(".md")) continue;
		const frontmatter = readFileSync(join(BLOG_DIR, file), "utf8");
		const date = frontmatter.match(/^updatedDate:\s*(\S+)/m)?.[1] ?? frontmatter.match(/^pubDate:\s*(\S+)/m)?.[1];
		if (date) dates.set(file.replace(/\.md$/, ""), new Date(date).toISOString());
	}
	return dates;
}

const blogDates = readBlogDates();

export default defineConfig({
	site: "https://HugoDorne.github.io",

	// English keeps the bare URLs so nothing already indexed moves; French is
	// served under /fr/.
	i18n: {
		defaultLocale: "en",
		locales: ["en", "fr"],
		routing: { prefixDefaultLocale: false },
	},

	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [
		sitemap({
			// Emits hreflang alternates pairing each page with its other locale.
			i18n: { defaultLocale: "en", locales: { en: "en", fr: "fr" } },
			filter: (page) => !UNLISTED_PATHS.includes(new URL(page).pathname),
			serialize(item) {
				const slug = new URL(item.url).pathname.match(/^(?:\/fr)?\/blog\/(.+)\/$/)?.[1];
				const lastmod = slug && blogDates.get(slug);
				return lastmod ? { ...item, lastmod } : item;
			},
		}),
	],
});
