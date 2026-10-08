import type { TranslationKey } from '$lib/i18n';

export type NavLink = { href: string; labelKey: TranslationKey };
export type Figure = { value: string; labelKey: TranslationKey };
export type Value = { titleKey: TranslationKey; subKey: TranslationKey };

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
	{ href: '/#about', labelKey: 'nav_about' },
	{ href: '/#stack', labelKey: 'nav_stack' },
	{ href: '/#experience', labelKey: 'nav_exp' },
	{ href: '/#projects', labelKey: 'nav_projects' },
	{ href: '/#blog', labelKey: 'nav_blog' },
	{ href: '/#contact', labelKey: 'nav_contact' }
];

export const figures: Figure[] = [
	{ value: '4+', labelKey: 'fig_years' },
	{ value: '2', labelKey: 'fig_fintech' },
	{ value: '50%+', labelKey: 'fig_latency' },
	{ value: '~60%', labelKey: 'fig_deploy' }
];

export const values: Value[] = [
	{ titleKey: 'val1_title', subKey: 'val1_sub' },
	{ titleKey: 'val2_title', subKey: 'val2_sub' },
	{ titleKey: 'val3_title', subKey: 'val3_sub' },
	{ titleKey: 'val4_title', subKey: 'val4_sub' }
];
