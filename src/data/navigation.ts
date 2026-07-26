export interface NavLink {
	label: string;
	href: string;
}

export const navLinks: NavLink[] = [
	{ label: "Home", href: "/" },
	{ label: "Projects", href: "/projects" },
	{ label: "Blog", href: "/blog" },
];
