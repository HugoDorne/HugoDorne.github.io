import type { Experience, Education, Certification, Language, SkillCategory, About, Proficiency } from "./models";
import type { Lang } from "../i18n/ui";
import cvEn from "./cv.json";
import cvFr from "./cv.fr.json";

export type { Experience, Education, Certification, Language, SkillCategory, About, Proficiency };

export interface Cv {
	about: About;
	experiences: Experience[];
	education: Education[];
	certifications: Certification[];
	languages: Language[];
	skillCategories: SkillCategory[];
}

const data: Record<Lang, Cv> = {
	en: cvEn as Cv,
	fr: cvFr as Cv,
};

export function getCv(lang: Lang): Cv {
	return data[lang];
}
