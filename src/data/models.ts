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

export interface Language {
	name: string;
	level: string;
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
	/** Injected into the generated PDF only — never rendered on the public page. */
	phone?: string;
}
