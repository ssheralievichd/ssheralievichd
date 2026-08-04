import { Box, Code2, Database, GitBranch, Layout, Server } from '@lucide/svelte';
import type { Component } from 'svelte';
import type { TranslationKey } from '$lib/i18n';

export type StackTag = { label: string; muted?: boolean };
export type StackGroup = { titleKey: TranslationKey; icon: Component; tags: StackTag[] };

const plain = (...labels: string[]): StackTag[] => labels.map((label) => ({ label }));

export const stackGroups: StackGroup[] = [
	{
		titleKey: 'sc_backend',
		icon: Server,
		tags: plain('Python', 'FastAPI', 'Django', 'Flask', 'Celery')
	},
	{
		titleKey: 'sc_backend2',
		icon: Code2,
		tags: plain('PHP', 'Laravel')
	},
	{
		titleKey: 'sc_frontend',
		icon: Layout,
		tags: plain('TypeScript', 'Vue.js', 'Nuxt.js', 'React', 'Next.js')
	},
	{
		titleKey: 'sc_databases',
		icon: Database,
		tags: plain('PostgreSQL', 'Redis', 'MongoDB')
	},
	{
		titleKey: 'sc_devops',
		icon: Box,
		tags: plain('Docker', 'Kubernetes', 'GitHub Actions', 'Linux')
	},
	{
		titleKey: 'sc_practices',
		icon: GitBranch,
		tags: plain('Microservices', 'CI/CD', 'REST APIs', 'Async')
	}
];
