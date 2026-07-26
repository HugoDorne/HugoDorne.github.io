import puppeteer from "puppeteer";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const OUTPUT = fileURLToPath(new URL("../public/og.png", import.meta.url));
const PHOTO = fileURLToPath(new URL("../src/assets/me.webp", import.meta.url));
const CV_DATA = fileURLToPath(new URL("../src/data/cv.json", import.meta.url));

const { about } = JSON.parse(await readFile(CV_DATA, "utf8"));
const photo = `data:image/webp;base64,${(await readFile(PHOTO)).toString("base64")}`;

// Mirrors the site's palette from src/styles/global.css.
const html = `<!doctype html>
<html>
	<head>
		<meta charset="utf-8" />
		<style>
			* { margin: 0; padding: 0; box-sizing: border-box; }
			body {
				width: 1200px;
				height: 630px;
				display: flex;
				align-items: center;
				gap: 72px;
				padding: 0 90px;
				background: #09090b;
				font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
				overflow: hidden;
				position: relative;
			}
			.glow {
				position: absolute;
				top: -180px;
				left: -120px;
				width: 700px;
				height: 700px;
				border-radius: 50%;
				background: radial-gradient(circle, rgba(251, 146, 60, 0.22) 0%, rgba(251, 146, 60, 0) 70%);
			}
			.photo-wrap { position: relative; flex-shrink: 0; }
			.halo {
				position: absolute;
				inset: -14px;
				border-radius: 50%;
				background: linear-gradient(to bottom right, rgba(251, 146, 60, 0.5), rgba(234, 88, 12, 0.2));
				filter: blur(14px);
			}
			img {
				position: relative;
				width: 300px;
				height: 300px;
				border-radius: 50%;
				object-fit: cover;
				border: 3px solid #27272a;
			}
			.name { font-size: 74px; font-weight: 700; color: #fafafa; letter-spacing: -0.02em; line-height: 1.05; }
			.title { margin-top: 16px; font-size: 38px; font-weight: 500; color: #fb923c; }
			.meta { margin-top: 22px; font-size: 26px; color: #71717a; display: flex; align-items: center; gap: 14px; }
			.dot { width: 6px; height: 6px; border-radius: 50%; background: #3f3f46; }
			.bar { position: absolute; bottom: 0; left: 0; right: 0; height: 10px; background: linear-gradient(to right, #fb923c, #ea580c 55%, #09090b); }
		</style>
	</head>
	<body>
		<div class="glow"></div>
		<div class="photo-wrap">
			<div class="halo"></div>
			<img src="${photo}" alt="" />
		</div>
		<div>
			<div class="name">${about.name}</div>
			<div class="title">${about.title}</div>
			<div class="meta">
				<span>${about.location}</span>
				<span class="dot"></span>
				<span>hugodorne.github.io</span>
			</div>
		</div>
		<div class="bar"></div>
	</body>
</html>`;

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
try {
	const page = await browser.newPage();
	await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
	await page.setContent(html, { waitUntil: "load" });
	await page.screenshot({ path: OUTPUT, type: "png" });
	console.log("OG card generated: public/og.png");
} finally {
	await browser.close();
}
