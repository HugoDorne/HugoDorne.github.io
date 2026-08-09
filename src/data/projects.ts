import type { ImageMetadata } from "astro";
import type { Lang } from "../i18n/ui";
import portfolioShot from "../assets/portfolio.webp";

export interface Project {
	title: string;
	description: Record<Lang, string>;
	/** Imported asset rather than a public path, so it goes through the image pipeline. */
	image?: ImageMetadata;
	repoUrl?: string;
	webUrl?: string;
	platform: "github" | "gitlab";
	tags: string[];
}

export const projects: Project[] = [
	{
		title: "Portfolio",
		description: {
			en: "My personal portfolio website built with Astro, Tailwind CSS, and deployed on GitHub Pages. Features a dark theme, CV, blog, and project showcase.",
			fr: "Mon portfolio personnel, construit avec Astro et Tailwind CSS, déployé sur GitHub Pages. Thème sombre, CV, blog et vitrine de projets.",
		},
		image: portfolioShot,
		repoUrl: "https://github.com/HugoDorne/HugoDorne.github.io",
		webUrl: "https://hugodorne.github.io",
		platform: "github",
		tags: ["Astro", "Tailwind CSS", "TypeScript"],
	},
];
