import { preview } from "astro";
import puppeteer from "puppeteer";
import { copyFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

// Dedicated port so it never collides with a dev or preview server already open.
const PORT = 4329;
const PDF_NAME = "CV_Hugo_DORNE.pdf";
const DIST_PDF = fileURLToPath(new URL(`../dist/${PDF_NAME}`, import.meta.url));
const PUBLIC_PDF = fileURLToPath(new URL(`../public/${PDF_NAME}`, import.meta.url));
const CV_DATA = fileURLToPath(new URL("../src/data/cv.json", import.meta.url));

const { about } = JSON.parse(await readFile(CV_DATA, "utf8"));

// Astro's programmatic preview server: no child process, so no process-tree
// kill semantics to get wrong across platforms, and no readiness guessing.
const server = await preview({ server: { port: PORT } });

try {
	const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
	try {
		const page = await browser.newPage();
		await page.goto(`http://localhost:${server.port}/cv`, { waitUntil: "networkidle0" });

		// The phone number lives in cv.json and is injected here, so it reaches the
		// PDF without ever being rendered in the published HTML.
		await page.evaluate((phone) => {
			const el = document.getElementById("cv-phone");
			if (!el || !phone) return;
			const link = document.createElement("a");
			link.href = `tel:${phone.replace(/\s/g, "")}`;
			link.className = "text-gray-500 no-underline";
			link.textContent = phone;
			el.replaceChildren(link);
			el.hidden = false;
		}, about.phone);

		await page.pdf({
			path: DIST_PDF,
			format: "A4",
			printBackground: true,
			margin: { top: "0", right: "0", bottom: "0", left: "0" },
		});
		console.log(`PDF generated: dist/${PDF_NAME}`);
	} finally {
		await browser.close();
	}

	// Mirror it into public/ so `astro dev` serves the download link too.
	await copyFile(DIST_PDF, PUBLIC_PDF);
	console.log(`PDF copied to public/${PDF_NAME}`);
} finally {
	await server.stop();
}
