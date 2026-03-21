export interface Experience {
	company: string;
	role: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	client?: string;
}

export interface Education {
	institution: string;
	degree: string;
	startYear: number;
	endYear: number;
	details?: string;
	url?: string;
}

export interface Certification {
	name: string;
	issuer: string;
	year: number;
	url?: string;
}

export interface Language {
	name: string;
	level: string;
	details?: string;
}

export interface SkillCategory {
	name: string;
	skills: string[];
}

export const experiences: Experience[] = [
	{
		company: "Constencia",
		role: "Senior Software Engineer",
		location: "Sophia Antipolis",
		startDate: "Feb 2026",
		endDate: "Present",
		client: "Instant System",
		description: [
			"Working as a Senior Software Engineer for Instant System, a leading provider of multimodal mobility solutions",
		],
	},
	{
		company: "Sopra Steria",
		role: "Senior Software Engineer",
		location: "Sophia Antipolis",
		startDate: "Sept 2023",
		endDate: "Feb 2026",
		client: "MANE, Insurance providers",
		description: [
			"Working on AI tools for different insurance providers using LangChain4J and Spring AI to create agents, tools and expose them using MCP",
			"Gherkin / Cucumber test cases generation based on user stories",
			"Supervised a team of 6 Software Engineers for MANE (major french producer of flavors & fragrances), part of which are based in India",
			"Positioned as Backend Tech Lead on an application redesign with a Java 21, Spring Boot 3, Nx & Angular 18 stack",
			"Collaborated with the client to design the new application's requirements, architecture & processes",
		],
	},
	{
		company: "Sopra Steria",
		role: "Software Engineer",
		location: "Nantes",
		startDate: "Sept 2022",
		endDate: "Sept 2023",
		client: "Ministry of Justice",
		description: [
			"Conceived & implemented high quality, reliable & scalable solutions with the Spring Boot / Angular ecosystem",
			"Actively participated and organized Agile Ceremonies",
			"Supervised Software Engineering interns & apprentices",
		],
	},
	{
		company: "Sopra Steria",
		role: "Apprentice Software Engineer",
		location: "Nantes",
		startDate: "Dec 2019",
		endDate: "Sept 2022",
		client: "Ministries of Interior & Justice",
		description: [
			"Developed, tested, debugged and maintained web applications developed in Java, Angular & React",
			"Automated non-regression & unit tests",
		],
	},
];

export const education: Education[] = [
	{
		institution: "École Centrale de Nantes",
		degree: "General Engineering Degree",
		startYear: 2019,
		endYear: 2022,
		details: "Specialized in Computer Science",
		url: "https://www.ec-nantes.fr",
	},
	{
		institution: "Disrupt' Campus Nantes",
		degree: "Inter-University Degree — Innovation & Digital Transformation",
		startYear: 2021,
		endYear: 2022,
		details: "Startup Weekend Nantes 2021 winner with the project Q'lture",
		url: "https://www.disruptcampusnantes.com/",
	},
];

export const certifications: Certification[] = [
	{
		name: "Angular Certified Developer",
		issuer: "Angular Training",
		year: 2025,
		url: "https://www.angulartraining.com",
	},
	{
		name: "Certified SAFe 5 Agilist",
		issuer: "Leading SAFe",
		year: 2023,
		url: "https://scaledagile.com/training/leading-safe/",
	},
];

export const languages: Language[] = [
	{ name: "French", level: "Native" },
	{ name: "English", level: "Fluent", details: "TOEIC 990/990" },
	{ name: "Italian", level: "Beginner" },
	{ name: "Japanese", level: "Notions" },
];

export const skillCategories: SkillCategory[] = [
	{
		name: "Backend",
		skills: ["Java 21", "Spring Framework", "Hibernate", "JPA", "Maven", "Python"],
	},
	{
		name: "Frontend",
		skills: ["TypeScript", "Angular", "Nx", "Bootstrap", "PrimeFaces", "SCSS"],
	},
	{
		name: "AI",
		skills: ["Spring AI", "LangChain4J", "Azure AI", "Copilot", "Mistral AI"],
	},
	{
		name: "Data",
		skills: ["PostgreSQL", "pgVector", "MySQL", "SQL Server", "Oracle", "ELK Stack"],
	},
	{
		name: "DevOps",
		skills: ["GitLab CI/CD", "Docker", "Ansible", "Jenkins", "SonarQube"],
	},
	{
		name: "Testing",
		skills: ["JUnit 5", "Mockito", "Jest", "Cypress"],
	},
];

export const about = {
	name: "Hugo Dorne",
	title: "Senior Software Engineer",
	location: "Sophia Antipolis, France",
	summary: "Full Stack and AI developments.\nMain stack: Java, Spring Boot, Angular, Spring AI, LangChain.",
	email: "hugo.dorne@gmail.com",
	github: "https://github.com/HugoDorne",
	linkedin: "https://www.linkedin.com/in/hugodorne/",
};
