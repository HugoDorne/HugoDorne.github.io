import type { Experience, Education, Certification, Language, SkillCategory, About } from "./models";
import cvData from "./cv.json";

export type { Experience, Education, Certification, Language, SkillCategory, About };

export const about: About = cvData.about;
export const experiences: Experience[] = cvData.experiences;
export const education: Education[] = cvData.education;
export const certifications: Certification[] = cvData.certifications;
export const languages: Language[] = cvData.languages;
export const skillCategories: SkillCategory[] = cvData.skillCategories;
