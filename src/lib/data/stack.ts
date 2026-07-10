import { Box, Code2, Database, GitBranch, Layout, Server } from '@lucide/svelte';
import type { Component } from 'svelte';
import type { TranslationKey } from '$lib/i18n';

export type StackTag = { label: string; muted?: boolean };
export type StackGroup = { titleKey: TranslationKey; icon: Component; tags: StackTag[] };

const plain = (...labels: string[]): StackTag[] => labels.map((label) => ({ label }));

export const stackGroups: StackGroup[] = [
	{
		titleKey: 'sc_languages',
		icon: Code2,
		tags: [
			...plain('Python', 'TypeScript', 'JavaScript', 'PHP'),
			{ label: 'Dart', muted: true },
			{ label: 'Go', muted: true }
		]
	},
	{
		titleKey: 'sc_backend',
		icon: Server,
		tags: plain('FastAPI', 'Django', 'Flask', 'Laravel', 'Celery')
	},
	{
		titleKey: 'sc_frontend',
		icon: Layout,
		tags: plain('Vue.js', 'Nuxt.js', 'React', 'Next.js', 'Flutter')
	},
	{
		titleKey: 'sc_databases',
		icon: Database,
		tags: plain('PostgreSQL', 'MySQL', 'Redis', 'MongoDB')
	},
	{
		titleKey: 'sc_devops',
		icon: Box,
		tags: plain('Docker', 'Kubernetes', 'NGINX', 'GitHub Actions', 'Linux')
	},
	{
		titleKey: 'sc_practices',
		icon: GitBranch,
		tags: plain('Microservices', 'CI/CD', 'REST APIs', 'WebSockets', 'Async')
	}
];
