<script lang="ts">
	import { Eye } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { profile } from '$lib/data/site';
	import { fetchVisitors } from '$lib/services/visitors';
	import { t } from '$lib/stores/lang';

	let visitors = $state<number | null>(null);

	onMount(async () => {
		visitors = await fetchVisitors(profile.counterUrl);
	});
</script>

<footer>
	<div class="w footer-inner">
		<span>{$t.footer_txt}</span>
		<span class="visitor-counter">
			<Eye size={12} />
			<span class="visitor-count">{visitors?.toLocaleString() ?? '—'}</span>
			<span>{$t.footer_visitors}</span>
		</span>
	</div>
</footer>
