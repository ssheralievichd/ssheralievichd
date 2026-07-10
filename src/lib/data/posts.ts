import type { TranslationKey } from '$lib/i18n';

export type Post = {
	slug: string;
	dateKey: TranslationKey;
	readKey: TranslationKey;
	titleKey: TranslationKey;
	excerptKey: TranslationKey;
	tags: string[];
};

export const posts: Post[] = [
	{
		slug: 'fastapi-async-patterns',
		dateKey: 'blog1_date',
		readKey: 'blog1_read',
		titleKey: 'blog1_title',
		excerptKey: 'blog1_excerpt',
		tags: ['Python', 'FastAPI', 'Backend']
	},
	{
		slug: 'postgresql-optimization',
		dateKey: 'blog2_date',
		readKey: 'blog2_read',
		titleKey: 'blog2_title',
		excerptKey: 'blog2_excerpt',
		tags: ['PostgreSQL', 'Performance']
	},
	{
		slug: 'feature-sliced-design',
		dateKey: 'blog3_date',
		readKey: 'blog3_read',
		titleKey: 'blog3_title',
		excerptKey: 'blog3_excerpt',
		tags: ['Vue.js', 'Nuxt.js', 'Architecture']
	}
];

export const postBySlug = (slug: string): Post | undefined => posts.find((p) => p.slug === slug);
