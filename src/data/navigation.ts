import type { Lang, TranslationKey } from "../i18n/ui";
import { localizePath } from "../i18n/utils";

export interface NavLink {
	key: TranslationKey;
	href: string;
}

export function getNavLinks(lang: Lang): NavLink[] {
	return [
		{ key: "nav.home", href: localizePath("/", lang) },
		{ key: "nav.projects", href: localizePath("/projects", lang) },
		{ key: "nav.blog", href: localizePath("/blog", lang) },
	];
}
