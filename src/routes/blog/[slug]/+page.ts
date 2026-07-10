import { error } from '@sveltejs/kit';
import { postBySlug, posts } from '$lib/data/posts';
import type { PageLoad } from './$types';

export const entries = () => posts.map(({ slug }) => ({ slug }));

export const load: PageLoad = ({ params }) => {
	const post = postBySlug(params.slug);
	if (!post) error(404, 'Post not found');
	return { post };
};
