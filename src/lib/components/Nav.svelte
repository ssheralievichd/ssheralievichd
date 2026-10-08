<script lang="ts">
	import { Menu, X } from '@lucide/svelte';
	import LangToggle from './LangToggle.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { navLinks, profile } from '$lib/data/site';
	import { t } from '$lib/stores/lang';

	let { solid = false }: { solid?: boolean } = $props();

	let stuck = $state(false);
	let open = $state(false);
</script>

<svelte:window
	onscroll={() => (stuck = window.scrollY > 24)}
	onkeydown={(event) => event.key === 'Escape' && (open = false)}
/>

<header class="nav" class:solid={solid || stuck || open}>
	<nav class="wrap nav-inner">
		<a href="/" class="nav-name">{profile.name}</a>

		<ul id="nav-links" class="nav-links" class:open>
			{#each navLinks as link (link.href)}
				<li><a href={link.href} onclick={() => (open = false)}>{$t[link.labelKey]}</a></li>
			{/each}
			<li><a href="/resume" onclick={() => (open = false)}>{$t.nav_resume}</a></li>
		</ul>

		<div class="nav-tools">
			<LangToggle />
			<ThemeToggle />
			<button
				class="icon-btn nav-menu"
				aria-label={$t.nav_menu}
				aria-expanded={open}
				aria-controls="nav-links"
				onclick={() => (open = !open)}
			>
				{#if open}<X />{:else}<Menu />{/if}
			</button>
		</div>
	</nav>
</header>
