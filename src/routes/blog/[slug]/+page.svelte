<script lang="ts">
	import { ArrowLeft } from '@lucide/svelte';
	import type { Component } from 'svelte';
	import Backdrop from '$lib/components/Backdrop.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { t } from '$lib/stores/lang';
	import '$lib/styles/post.css';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const modules = import.meta.glob<{ default: Component }>('/src/posts/*.md', { eager: true });

	const Content = $derived(modules[`/src/posts/${data.post.slug}.md`].default);
</script>

<svelte:head>
	<title>{$t[data.post.titleKey]}</title>
	<meta name="description" content={$t[data.post.excerptKey]} />
</svelte:head>

<Backdrop />
<Nav />

<main class="post-main">
	<header class="post-header">
		<div class="post-meta">
			<span>{$t[data.post.dateKey]}</span>
			<span class="post-meta-dot"></span>
			<span>{$t[data.post.readKey]}</span>
		</div>
		<h1>{$t[data.post.titleKey]}</h1>
		<div class="blog-tags">
			{#each data.post.tags as tag (tag)}
				<span class="tag">{tag}</span>
			{/each}
		</div>
	</header>

	<article class="post-body">
		<Content />
	</article>

	<a href="/#blog" class="post-back">
		<ArrowLeft size={14} />
		{$t.back_to_portfolio}
	</a>
</main>
