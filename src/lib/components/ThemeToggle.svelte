<script lang="ts">
	import { Moon, Sun } from '@lucide/svelte';
	import { theme } from '$lib/stores/theme';
</script>

<button class="theme-btn" onclick={theme.toggle} aria-label="Toggle theme">
	{#if $theme === 'dark'}
		<Moon size={15} />
	{:else}
		<Sun size={15} />
	{/if}
</button>
