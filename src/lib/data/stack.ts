import type { TranslationKey } from '$lib/i18n';

export type StackGroup = { titleKey: TranslationKey; items: string[] };

export const stackGroups: StackGroup[] = [
	{ titleKey: 'sc_backend', items: ['Python', 'FastAPI', 'Django', 'Flask', 'Celery'] },
	{ titleKey: 'sc_backend2', items: ['PHP', 'Laravel'] },
	{ titleKey: 'sc_frontend', items: ['TypeScript', 'Vue.js', 'Nuxt.js', 'React', 'Next.js'] },
	{ titleKey: 'sc_databases', items: ['PostgreSQL', 'Redis', 'MongoDB'] },
	{ titleKey: 'sc_devops', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Linux'] },
	{ titleKey: 'sc_practices', items: ['Microservices', 'CI/CD', 'REST APIs', 'Async', 'TDD'] },
	{
		titleKey: 'sc_ai',
		items: [
			'LLM integration (RAG, AI assistants)',
			'Prompt engineering',
			'AI-assisted development',
			'Spec-driven development'
		]
	}
];
