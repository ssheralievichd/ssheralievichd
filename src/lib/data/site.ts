import { Briefcase, FolderOpen, Heart, Layers, PenLine, User } from '@lucide/svelte';
import type { Component } from 'svelte';
import type { TranslationKey } from '$lib/i18n';

export type NavLink = { href: string; labelKey: TranslationKey; icon: Component };

export const profile = {
	name: 'Abdurahmon Sheralievich',
	githubUser: 'ssheralievichd',
	github: 'https://github.com/ssheralievichd',
	linkedin: 'https://www.linkedin.com/in/ssheralievichd/',
	telegram: 'https://t.me/ssheralievichd',
	email: 'ssheralievichd@gmail.com',
	phone: '+992 71 422 6006',
	phoneHref: 'tel:+992714226006',
	website: 'ssheralievichd.baselinux.net',
	counterUrl: 'https://api.counterapi.dev/v1/ssheralievichd-portfolio/visits/up'
};

export const navLinks: NavLink[] = [
	{ href: '/#about', labelKey: 'nav_about', icon: User },
	{ href: '/#stack', labelKey: 'nav_stack', icon: Layers },
	{ href: '/#experience', labelKey: 'nav_exp', icon: Briefcase },
	{ href: '/#projects', labelKey: 'nav_projects', icon: FolderOpen },
	{ href: '/#life', labelKey: 'nav_life', icon: Heart },
	{ href: '/#blog', labelKey: 'nav_blog', icon: PenLine }
];

export const cycleWords = [
	'Python',
	'FastAPI',
	'Django',
	'PostgreSQL',
	'Vue.js',
	'Docker',
	'DevOps',
	'Go'
];
