<script lang="ts">
	import { ArrowLeft } from '@lucide/svelte';
	import type { Component } from 'svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { t } from '$lib/stores/lang';
	import '$lib/styles/post.css';
	import '$lib/styles/post-code.css';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const modules = import.meta.glob<{ default: Component }>('/src/posts/*.md', { eager: true });

	const Content = $derived(modules[`/src/posts/${data.post.slug}.md`].default);
</script>

<svelte:head>
	<title>{$t[data.post.titleKey]}</title>
	<meta name="description" content={$t[data.post.excerptKey]} />
</svelte:head>

<Nav solid />

<main class="post wrap">
	<header class="post-head">
		<h1 class="post-title">{$t[data.post.titleKey]}</h1>
		<p class="post-meta">
			{$t[data.post.dateKey]} · {$t[data.post.readKey]} · {data.post.tags.join(', ')}
		</p>
	</header>

	<article class="post-body">
		<Content />
	</article>

	<a href="/#blog" class="text-link post-back"><ArrowLeft />{$t.back_to_portfolio}</a>
</main>

<div class="field">
	<div class="wrap"><Footer /></div>
</div>
