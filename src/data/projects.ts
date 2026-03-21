export interface Project {
	title: string;
	description: string;
	image?: string;
	repoUrl?: string;
	webUrl?: string;
	platform: "github" | "gitlab";
	tags: string[];
}

export const projects: Project[] = [
	{
		title: "Portfolio",
		description:
			"My personal portfolio website built with Astro, Tailwind CSS, and deployed on GitHub Pages. Features a dark theme, CV, blog, and project showcase.",
		image: "/portfolio.webp",
		repoUrl: "https://github.com/HugoDorne/HugoDorne.github.io",
		webUrl: "https://hugodorne.github.io",
		platform: "github",
		tags: ["Astro", "Tailwind CSS", "TypeScript"],
	},
];
