<script lang="ts">
	import { FileText } from '@lucide/svelte';
	import LangToggle from './LangToggle.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { navLinks } from '$lib/data/site';
	import { t } from '$lib/stores/lang';

	let stuck = $state(false);
	let open = $state(false);
</script>

<svelte:window onscroll={() => (stuck = window.scrollY > 20)} />

<nav class:stuck>
	<a href="/" class="logo">AS<span>.</span></a>

	<ul class="nav-links" class:open>
		{#each navLinks as link (link.href)}
			<li>
				<a href={link.href} onclick={() => (open = false)}>
					<link.icon size={13} />
					<span>{$t[link.labelKey]}</span>
				</a>
			</li>
		{/each}
		<li>
			<a href="/resume" class="nav-cta" onclick={() => (open = false)}>
				<FileText size={13} />
				<span>{$t.nav_resume}</span>
			</a>
		</li>
	</ul>

	<div class="nav-actions">
		<LangToggle />
		<ThemeToggle />
		<button class="hbg" class:open onclick={() => (open = !open)} aria-label="Menu">
			<span class="hl"></span>
			<span class="hl"></span>
			<span class="hl"></span>
		</button>
	</div>
</nav>
