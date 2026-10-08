<script lang="ts">
	import { Moon, Sun } from '@lucide/svelte';
	import { t } from '$lib/stores/lang';
	import { theme } from '$lib/stores/theme';
</script>

<button class="icon-btn" onclick={theme.toggle} aria-label={$t.nav_theme}>
	{#if $theme === 'dark'}<Sun />{:else}<Moon />{/if}
</button>
