export const languages = {
	en: {
		label: "English",
		short: "EN",
		htmlLang: "en",
		ogLocale: "en_US",
		dateLocale: "en-US",
		// Mirrored in scripts/generate-pdf.mjs, which cannot import this module.
		cvFile: "/CV_Hugo_DORNE.pdf",
	},
	fr: {
		label: "Français",
		short: "FR",
		htmlLang: "fr",
		ogLocale: "fr_FR",
		dateLocale: "fr-FR",
		cvFile: "/CV_Hugo_DORNE_FR.pdf",
	},
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

/**
 * Every string the interface renders. Keys are grouped by where they appear;
 * both locales must define the same set, which `Translations` enforces.
 */
const en = {
	"nav.home": "Home",
	"nav.projects": "Projects",
	"nav.blog": "Blog",
	"nav.language": "Language",
	"nav.switchTo": "Passer en français",
	"nav.menu.toggle": "Toggle menu",
	"nav.menu.main": "Main navigation",
	"nav.menu.mobile": "Mobile navigation",
	"nav.menu.footer": "Footer navigation",

	"section.about": "About",
	"section.experience": "Experience",
	"section.education": "Education",
	"section.skills": "Skills",
	"section.certifications": "Certifications",
	"section.languages": "Languages",
	"section.nav": "Section navigation",
	"section.navigateTo": "Navigate to",

	"home.title": "Hugo Dorne — Senior Software Engineer & Scrum Master",
	"home.description":
		"Hugo Dorne, Senior Software Engineer near Sophia Antipolis. Full stack and AI with Java, Spring Boot, Angular, Spring AI and LangChain4J.",
	"hero.viewMap": "on Google Maps",
	"hero.cv": "CV",
	"hero.cvLabel": "View CV (opens in new tab)",
	"hero.github": "GitHub",
	"hero.linkedin": "LinkedIn",
	"hero.email": "Email",

	"education.visit": "Visit",
	"education.website": "website",
	"cert.view": "View",
	"cert.certificationFrom": "certification from",

	"projects.title": "Projects",
	"projects.pageTitle": "Projects — Hugo Dorne",
	"projects.intro": "A selection of things I've built in my free time.",
	"projects.description":
		"Side projects by Hugo Dorne, built with Astro, Tailwind CSS and TypeScript. Source code and a live demo for each one.",
	"projects.more": "And more to come...",
	"projects.live": "Live",
	"projects.viewSource": "View source of",
	"projects.visitLive": "Visit the live site of",

	"blog.title": "Blog",
	"blog.pageTitle": "Blog — Hugo Dorne",
	"blog.intro": "Thoughts on software engineering, AI, tech and life.",
	"blog.description":
		"Notes by Hugo Dorne on software engineering and AI — Java, Spring Boot, Angular, and building agents with LangChain4J and Spring AI.",
	"blog.empty": "Nothing to see here, for now...",
	"blog.emptyHint": "I'm working on my first posts. Stay tuned!",
	"blog.back": "Back to blog",
	"blog.updated": "Updated",
	"blog.read": "Read blog post:",

	"404.pageTitle": "404 — Page Not Found",
	"404.lead": "You've wandered into the void.",
	"404.hint": "There's nothing here... yet.",
	"404.home": "Take me home",

	"golf.pageTitle": "Secret Hole",
	"golf.heading": "Hole in One!",
	"golf.lead": "You found the secret page. Nice swing.",
	"golf.hint": "Now let's play a round...",
	"golf.stroke": "Stroke:",
	"golf.par": "Par:",
	"golf.instructions": "Click and drag from the ball to shoot. Get it in the hole!",
	"golf.back": "Back to reality",
	"golf.holeInOne": "Hole in One! 🏆 Legendary!",
	"golf.eagle": "Eagle! 🦅 Incredible!",
	"golf.birdie": "Birdie! 🐦 Nice shot!",
	"golf.parMsg": "Par! ⛳ Well played!",
	"golf.bogey": "Bogey! Not bad.",
	"golf.over": "Keep practicing! 😅",

	"cv.pageTitle": "CV — Hugo Dorne",
	"cv.profile": "Profile",
	"cv.experience": "Experience",
	"cv.education": "Education",
	"cv.skills": "Skills",
	"cv.certifications": "Certifications",
	"cv.languages": "Languages",

	"footer.madeWith": "Made with",
	"footer.with": "with",
	"footer.and": "and",
	"footer.claudeTip": "Opus 4.7, Opus 4.8 and now Opus 5",
	"footer.astroTip": "pretty fast site uh ?",
	"footer.newTab": "(opens in new tab)",
	"footer.backToTop": "Back to top",
} as const;

export type TranslationKey = keyof typeof en;
type Translations = Record<TranslationKey, string>;

const fr: Translations = {
	"nav.home": "Accueil",
	"nav.projects": "Projets",
	"nav.blog": "Blog",
	"nav.language": "Langue",
	"nav.switchTo": "Switch to English",
	"nav.menu.toggle": "Ouvrir le menu",
	"nav.menu.main": "Navigation principale",
	"nav.menu.mobile": "Navigation mobile",
	"nav.menu.footer": "Navigation du pied de page",

	"section.about": "Profil",
	"section.experience": "Expérience",
	"section.education": "Formation",
	"section.skills": "Compétences",
	"section.certifications": "Certifications",
	"section.languages": "Langues",
	"section.nav": "Navigation par section",
	"section.navigateTo": "Aller à",

	"home.title": "Hugo Dorne — Ingénieur logiciel senior & Scrum Master",
	"home.description":
		"Hugo Dorne, ingénieur logiciel senior à Sophia Antipolis. Full stack et IA avec Java, Spring Boot, Angular, Spring AI et LangChain4J.",
	"hero.viewMap": "sur Google Maps",
	"hero.cv": "CV",
	"hero.cvLabel": "Consulter le CV (nouvel onglet)",
	"hero.github": "GitHub",
	"hero.linkedin": "LinkedIn",
	"hero.email": "E-mail",

	"education.visit": "Consulter le site de",
	"education.website": "",
	"cert.view": "Consulter la certification",
	"cert.certificationFrom": "délivrée par",

	"projects.title": "Projets",
	"projects.pageTitle": "Projets — Hugo Dorne",
	"projects.intro": "Une sélection de ce que je construis sur mon temps libre.",
	"projects.description":
		"Les projets personnels d'Hugo Dorne, construits avec Astro, Tailwind CSS et TypeScript. Code source et démo en ligne pour chacun.",
	"projects.more": "Et d'autres à venir...",
	"projects.live": "En ligne",
	"projects.viewSource": "Voir le code source de",
	"projects.visitLive": "Voir le site en ligne de",

	"blog.title": "Blog",
	"blog.pageTitle": "Blog — Hugo Dorne",
	"blog.intro": "Réflexions sur le développement, l'IA, la tech et le reste.",
	"blog.description":
		"Les notes d'Hugo Dorne sur le développement et l'IA — Java, Spring Boot, Angular, et la création d'agents avec LangChain4J et Spring AI.",
	"blog.empty": "Rien à voir ici, pour l'instant...",
	"blog.emptyHint": "Mes premiers articles sont en préparation. À bientôt !",
	"blog.back": "Retour au blog",
	"blog.updated": "Mis à jour le",
	"blog.read": "Lire l'article :",

	"404.pageTitle": "404 — Page introuvable",
	"404.lead": "Vous vous êtes égaré dans le vide.",
	"404.hint": "Il n'y a rien par ici... pour le moment.",
	"404.home": "Retour à l'accueil",

	"golf.pageTitle": "Trou secret",
	"golf.heading": "Trou en un !",
	"golf.lead": "Vous avez trouvé la page secrète. Joli swing.",
	"golf.hint": "Et si on jouait un parcours ?",
	"golf.stroke": "Coups :",
	"golf.par": "Par :",
	"golf.instructions": "Cliquez et tirez depuis la balle pour frapper. À vous de la mettre au trou !",
	"golf.back": "Retour à la réalité",
	"golf.holeInOne": "Trou en un ! 🏆 Légendaire !",
	"golf.eagle": "Eagle ! 🦅 Incroyable !",
	"golf.birdie": "Birdie ! 🐦 Joli coup !",
	"golf.parMsg": "Par ! ⛳ Bien joué !",
	"golf.bogey": "Bogey ! Pas mal.",
	"golf.over": "Continuez à vous entraîner ! 😅",

	"cv.pageTitle": "CV — Hugo Dorne",
	"cv.profile": "Profil",
	"cv.experience": "Expérience",
	"cv.education": "Formation",
	"cv.skills": "Compétences",
	"cv.certifications": "Certifications",
	"cv.languages": "Langues",

	"footer.madeWith": "Fait avec",
	"footer.with": "avec",
	"footer.and": "et",
	"footer.claudeTip": "Opus 4.7, Opus 4.8 et maintenant Opus 5",
	"footer.astroTip": "plutôt rapide ce site, non ?",
	"footer.newTab": "(nouvel onglet)",
	"footer.backToTop": "Retour en haut",
};

export const ui = { en, fr } satisfies Record<Lang, Translations>;

/** The hero's rotating job titles — the golf ones open the easter egg. */
export const funTitles: Record<Lang, string[]> = {
	en: [
		"Coffee Enthusiast ☕",
		"Bug Whisperer 🐛",
		"Stack Overflow Survivor 🏆",
		"Senior Googler 🔍",
		"Git Blame Detective 🕵️",
		"404 Explorer 🧭",
		"Ctrl+Z Enjoyer ⌨️",
		"YAML Indentation Victim 😤",
		"Claude's Favorite Human 🤖",
		"Prompt Engineer in Disguise 🎭",
		"Weekend Golfer ⛳",
		"Bogey Specialist 🏌️",
		"Vinyl Collector 🎵",
		"Spotify Queue Tyrant 🎧",
		"Popcorn Connoisseur 🍿",
		"Post-Credits Scene Waiter 🦸",
	],
	fr: [
		"Amateur de café ☕",
		"Chuchoteur de bugs 🐛",
		"Rescapé de Stack Overflow 🏆",
		"Googleur senior 🔍",
		"Détective du git blame 🕵️",
		"Explorateur de 404 🧭",
		"Adepte du Ctrl+Z ⌨️",
		"Victime de l'indentation YAML 😤",
		"Humain préféré de Claude 🤖",
		"Prompt engineer déguisé 🎭",
		"Golfeur du dimanche ⛳",
		"Spécialiste du bogey 🏌️",
		"Collectionneur de vinyles 🎵",
		"DJ autoproclamé 🎧",
		"Sommelier de popcorn 🍿",
		"Spectateur des scènes post-générique 🦸",
	],
};

/** Indices into funTitles that link through to the golf page, shared by both locales. */
export const golfTitleIndices = [10, 11];
