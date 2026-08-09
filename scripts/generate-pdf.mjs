import { preview } from "astro";
import puppeteer from "puppeteer";
import { copyFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

// Dedicated port so it never collides with a dev or preview server already open.
const PORT = 4329;

// Mirrors `languages[*].cvFile` in src/i18n/ui.ts, which this script cannot import.
const LOCALES = [
	{ lang: "en", route: "/cv", file: "CV_Hugo_DORNE.pdf" },
	{ lang: "fr", route: "/fr/cv", file: "CV_Hugo_DORNE_FR.pdf" },
];

const resolve = (relative) => fileURLToPath(new URL(relative, import.meta.url));

// Astro's programmatic preview server: no child process, so no process-tree
// kill semantics to get wrong across platforms, and no readiness guessing.
const server = await preview({ server: { port: PORT } });

try {
	const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
	try {
		for (const locale of LOCALES) {
			const distPdf = resolve(`../dist/${locale.file}`);
			const publicPdf = resolve(`../public/${locale.file}`);

			const page = await browser.newPage();
			await page.goto(`http://localhost:${server.port}${locale.route}`, { waitUntil: "networkidle0" });
			await page.pdf({
				path: distPdf,
				format: "A4",
				printBackground: true,
				margin: { top: "0", right: "0", bottom: "0", left: "0" },
			});
			await page.close();

			// Mirror it into public/ so `astro dev` serves the download link too.
			await copyFile(distPdf, publicPdf);
			console.log(`PDF generated (${locale.lang}): dist/${locale.file} → public/${locale.file}`);
		}
	} finally {
		await browser.close();
	}
} finally {
	await server.stop();
}
