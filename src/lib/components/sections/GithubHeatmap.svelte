<script lang="ts">
	import { Activity } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import Counter from '../Counter.svelte';
	import { loadContributions, type Contributions } from '$lib/stores/contributions';
	import { t } from '$lib/stores/lang';

	let data = $state<Contributions | null>(null);
	let failed = $state(false);

	const label = (count: number, date: string) =>
		`${count} contribution${count === 1 ? '' : 's'} on ${date}`;

	onMount(async () => {
		try {
			data = await loadContributions();
		} catch {
			failed = true;
		}
	});
</script>

{#if !failed}
	<div class="gh-heat" class:ready={data} aria-live="polite">
		<div class="glass-card gh-heat-card">
			<div class="gh-heat-head">
				<div class="gh-heat-title"><Activity /><span>{$t.gh_heat_title}</span></div>
				<div class="gh-heat-sum">
					<strong><Counter value={data?.total ?? null} placeholder="0" /></strong>
					<span>{$t.gh_heat_sub}</span>
				</div>
			</div>
			<div class="gh-heat-grid">
				{#each { length: data?.leading ?? 0 } as _, pad (pad)}
					<span class="gh-cell pad"></span>
				{/each}
				{#each data?.cells ?? [] as cell (cell.date)}
					<span class="gh-cell l{cell.level}" title={label(cell.count, cell.date)}></span>
				{/each}
			</div>
			<div class="gh-heat-legend">
				<span>{$t.gh_heat_less}</span>
				<span class="gh-cell"></span>
				<span class="gh-cell l1"></span>
				<span class="gh-cell l2"></span>
				<span class="gh-cell l3"></span>
				<span class="gh-cell l4"></span>
				<span>{$t.gh_heat_more}</span>
			</div>
		</div>
	</div>
{/if}
