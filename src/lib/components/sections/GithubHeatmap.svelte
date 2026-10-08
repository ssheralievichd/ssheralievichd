<script lang="ts">
	import type { Contributions } from '$lib/stores/contributions';
	import { t } from '$lib/stores/lang';

	let { data }: { data: Contributions } = $props();

	const label = (count: number, date: string) =>
		`${count} contribution${count === 1 ? '' : 's'} on ${date}`;
</script>

<div class="gh-heat-grid">
	{#each { length: data.leading } as _, pad (pad)}
		<span class="gh-cell pad"></span>
	{/each}
	{#each data.cells as cell (cell.date)}
		<span class="gh-cell l{cell.level}" title={label(cell.count, cell.date)}></span>
	{/each}
</div>
<div class="gh-legend">
	<span>{$t.gh_heat_less}</span>
	<span class="gh-cell"></span>
	<span class="gh-cell l1"></span>
	<span class="gh-cell l2"></span>
	<span class="gh-cell l3"></span>
	<span class="gh-cell l4"></span>
	<span>{$t.gh_heat_more}</span>
</div>
