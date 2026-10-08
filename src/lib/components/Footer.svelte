<script lang="ts">
	import { onMount } from 'svelte';
	import { profile } from '$lib/data/site';
	import { fetchVisitors } from '$lib/services/visitors';
	import { t } from '$lib/stores/lang';

	let visitors = $state<number | null>(null);

	onMount(async () => {
		visitors = await fetchVisitors(profile.counterUrl);
	});
</script>

<footer class="footer">
	<span>{$t.footer_txt}</span>
	{#if visitors !== null}
		<span>{visitors.toLocaleString()} {$t.footer_visitors}</span>
	{/if}
</footer>
