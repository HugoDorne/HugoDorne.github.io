import { preview } from "astro";
import puppeteer from "puppeteer";
import { fileURLToPath } from "node:url";

// Regenerates the Projects card thumbnail from the live homepage, so the shot
// never drifts from the design again. Run it after a build, then rebuild:
// the file is a build input, not an output.
const PORT = 4347;
const OUTPUT = fileURLToPath(new URL("../src/assets/portfolio.webp", import.meta.url));

const VIEWPORT = 1280;
// The collapsed side-nav rail ends around x=38 at this width; start past it so
// the thumbnail is not a row of stray dots.
const LEFT_CROP = 64;
const WIDTH = VIEWPORT - LEFT_CROP;
// 2.35:1 to match the card's h-48 crop, at roughly 2x the rendered width.
const HEIGHT = Math.round(WIDTH / 2.35);

const server = await preview({ server: { port: PORT } });

try {
	const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
	try {
		const page = await browser.newPage();
		await page.setViewport({ width: VIEWPORT, height: 900, deviceScaleFactor: 1 });
		await page.goto(`http://localhost:${server.port}/`, { waitUntil: "networkidle0" });
		// Let the scroll-reveal transition settle before capturing.
		await new Promise((resolve) => setTimeout(resolve, 1200));
		await page.screenshot({
			path: OUTPUT,
			type: "webp",
			quality: 88,
			clip: { x: LEFT_CROP, y: 0, width: WIDTH, height: HEIGHT },
		});
		console.log(`Project thumbnail generated: src/assets/portfolio.webp (${WIDTH}x${HEIGHT})`);
	} finally {
		await browser.close();
	}
} finally {
	await server.stop();
}
