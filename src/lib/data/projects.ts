import type { TranslationKey } from '$lib/i18n';

export type Project = {
	name: string;
	href?: string;
	kind: 'commercial' | 'personal';
	descKey: TranslationKey;
	tags: string[];
};

export const projects: Project[] = [
	{
		name: 'Telephony Billing',
		kind: 'commercial',
		descKey: 'proj11_desc',
		tags: ['Laravel 12', 'PostgreSQL', 'Horizon', 'OAuth2', 'Vue 3']
	},
	{
		name: 'Chat Tojiktelecom',
		href: 'https://chat.tojiktelecom.tj',
		kind: 'commercial',
		descKey: 'proj1_desc',
		tags: ['Laravel 12', 'Vue 3', 'WebSockets', 'RAG AI', 'PostgreSQL']
	},
	{
		name: 'Domains Hub',
		href: 'http://www.nic.tj/',
		kind: 'commercial',
		descKey: 'proj2_desc',
		tags: ['Laravel 12', 'Vue 3', 'Inertia', 'PostgreSQL']
	},
	{
		name: 'Network Monitoring',
		kind: 'commercial',
		descKey: 'proj14_desc',
		tags: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Docker']
	},
	{
		name: 'Zehn Vision',
		kind: 'commercial',
		descKey: 'proj13_desc',
		tags: ['Python', 'FastAPI', 'Redis Streams', 'Vue 3', 'LLM']
	},
	{
		name: 'Operations Dashboard',
		kind: 'commercial',
		descKey: 'proj12_desc',
		tags: ['Vue 3', 'Chart.js', 'Laravel 11', 'JWT', 'MS SQL']
	},
	{
		name: 'Zehn Cloud',
		href: 'https://cloud.telecom-zehn.tj/',
		kind: 'commercial',
		descKey: 'proj10_desc',
		tags: ['PHP 8', 'MariaDB', 'PowerDNS', 'Docker']
	},
	{
		name: 'Auth1',
		kind: 'commercial',
		descKey: 'proj9_desc',
		tags: ['Python', 'FastAPI', 'OAuth2']
	},
	{
		name: 'Discovery Trio',
		href: 'https://play.google.com/store/apps/details?id=com.velocehub&hl=en',
		kind: 'personal',
		descKey: 'proj5_desc',
		tags: ['Flutter', 'FastAPI', 'PostgreSQL', 'Docker']
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
		kind: 'personal',
		descKey: 'proj8_desc',
		tags: ['Python', 'Docker', 'FUSE', 'MinIO']
	}
];
