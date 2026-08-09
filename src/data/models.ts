export interface Experience {
	company: string;
	companyUrl?: string;
	role: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	client?: string;
	clientUrl?: string;
	clientSuffix?: string;
}

export interface Education {
	institution: string;
	degree: string;
	startYear: number;
	endYear: number;
	details?: string;
	detailsUrl?: string;
	url?: string;
}

export interface Certification {
	name: string;
	issuer: string;
	year: number;
	url?: string;
}

export type Proficiency = "native" | "fluent" | "intermediate" | "beginner" | "notions";

export interface Language {
	name: string;
	/** Display label — translated, so never key anything off it. */
	level: string;
	proficiency: Proficiency;
	details?: string;
	hello: string;
}

export interface SkillCategory {
	name: string;
	skills: string[];
}

export interface About {
	name: string;
	title: string;
	location: string;
	summary: string;
	email: string;
	github: string;
	linkedin: string;
}
