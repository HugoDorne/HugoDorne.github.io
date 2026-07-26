# hugodorne.github.io

Personal portfolio website for Hugo Dorne — Senior Software Engineer.

## About

This is my personal portfolio, CV, blog, and project showcase. It features a dark theme with an orange accent palette, a lateral navigation for quick section jumping, and responsive design.

## Tech Stack

- **[Astro](https://astro.build/)** — Static site generator
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first CSS
- **[TypeScript](https://www.typescriptlang.org/)** — Type safety
- **GitHub Pages** — Hosting & deployment via GitHub Actions

## Development

```bash
npm install
npm run dev
```

Use `npm start` instead to type-check, build, regenerate the CV PDF and then serve —
the PDF is generated at build time, so the download link is only live locally after that.

## Build & Preview

```bash
npm run build
npm run preview
```

## Other scripts

| Script | What it does |
| --- | --- |
| `npm run generate-pdf` | Renders `/cv` to `dist/CV_Hugo_DORNE.pdf` (also copied to `public/`). Needs a build first. |
| `npm run generate-og` | Regenerates the `public/og.png` social card. |
| `npm run format` | Formats everything with Prettier. |
| `npm run format:check` | Checks formatting without writing. |

## License

All rights reserved.
