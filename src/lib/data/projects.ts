import type { TranslationKey } from '$lib/i18n';

export type Project = {
	name: string;
	href: string;
	kind: 'commercial' | 'personal';
	descKey: TranslationKey;
	tags: string[];
};

const GITHUB = 'https://github.com/ssheralievichd';

export const projects: Project[] = [
	{
		name: 'Chat Tojiktelecom',
		href: 'https://chat.tojiktelecom.tj',
		kind: 'commercial',
		descKey: 'proj1_desc',
		tags: ['Laravel 12', 'Vue 3', 'WebSockets', 'RAG AI', 'PostgreSQL']
	},
	{
		name: 'Domains Hub',
		href: GITHUB,
		kind: 'commercial',
		descKey: 'proj2_desc',
		tags: ['Laravel 12', 'Vue 3', 'Inertia', 'PostgreSQL']
	},
	{
		name: 'Velora',
		href: GITHUB,
		kind: 'personal',
		descKey: 'proj5_desc',
		tags: ['Flutter', 'FastAPI', 'PostgreSQL', 'Docker']
	},
	{
		name: 'GoClaw',
		href: GITHUB,
		kind: 'personal',
		descKey: 'proj3_desc',
		tags: ['Laravel 13', 'React 19', 'Docker', 'PostgreSQL', 'Yookassa']
	},
	{
		name: 'Lumio',
		href: GITHUB,
		kind: 'personal',
		descKey: 'proj4_desc',
		tags: ['Laravel 12', 'React 19', 'FAL.ai', 'GPT-4o', 'Horizon']
	},
	{
		name: 'WheelBase',
		href: 'https://wshop.prelive.online',
		kind: 'personal',
		descKey: 'proj6_desc',
		tags: ['Nuxt 3', 'Express TS', 'Redis', 'PostgreSQL', 'Knex']
	},
	{
		name: 'MinioTeleFuse',
		href: GITHUB,
		kind: 'personal',
		descKey: 'proj8_desc',
		tags: ['Python', 'Docker', 'FUSE', 'MinIO']
	},
	{
		name: 'Auth1',
		href: GITHUB,
		kind: 'personal',
		descKey: 'proj9_desc',
		tags: ['Python', 'FastAPI', 'OAuth2']
	},
	{
		name: 'Stars Bot',
		href: 'https://t.me/StarzaMarket_bot',
		kind: 'personal',
		descKey: 'proj7_desc',
		tags: ['Python', 'FastAPI', 'aiogram', 'PostgreSQL']
	}
];
