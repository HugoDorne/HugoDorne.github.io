import { defaultLang, languages, ui, type Lang, type TranslationKey } from "./ui";

export { defaultLang, languages, type Lang };

/**
 * Reads the locale off the pathname. Components use this rather than a prop so
 * nothing has to be threaded down the tree.
 */
export function getLangFromUrl(url: URL): Lang {
	const [, first] = url.pathname.split("/");
	return first in languages ? (first as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
	return function t(key: TranslationKey): string {
		return ui[lang][key];
	};
}

/**
 * Prefixes a root-relative path with the locale. English keeps the bare URLs,
 * so only French gets a prefix.
 */
export function localizePath(path: string, lang: Lang): string {
	const clean = path.startsWith("/") ? path : `/${path}`;
	if (lang === defaultLang) return clean;
	return clean === "/" ? `/${lang}/` : `/${lang}${clean}`;
}

/** Same path in the other locale — what the language toggle links to. */
export function switchLocalePath(url: URL, target: Lang): string {
	const current = getLangFromUrl(url);
	let path = url.pathname;
	if (current !== defaultLang) {
		path = path.slice(`/${current}`.length) || "/";
	}
	return localizePath(path, target);
}

export function formatDate(date: Date, lang: Lang): string {
	return date.toLocaleDateString(languages[lang].dateLocale, {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}
