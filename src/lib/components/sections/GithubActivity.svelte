<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import GithubHeatmap from './GithubHeatmap.svelte';
	import { profile } from '$lib/data/site';
	import type { TranslationKey } from '$lib/i18n';
	import { fetchStats, type GitHubStats } from '$lib/services/github';
	import { loadContributions, type Contributions } from '$lib/stores/contributions';
	import { t } from '$lib/stores/lang';

	type Stat = { labelKey: TranslationKey; value: number | null | undefined };

	let stats = $state<GitHubStats | null>(null);
	let contributions = $state<Contributions | null>(null);

	const shown = $derived(
		(
			[
				{ labelKey: 'gh_contribs', value: contributions?.total },
				{ labelKey: 'gh_active', value: contributions?.activeDays },
				{ labelKey: 'gh_stars', value: stats?.stars },
				{ labelKey: 'gh_repos', value: stats?.repos }
			] satisfies Stat[]
		).filter((stat) => typeof stat.value === 'number')
	);

	onMount(async () => {
		const [statsResult, contributionsResult] = await Promise.allSettled([
			fetchStats(profile.githubUser),
			loadContributions()
		]);
		if (statsResult.status === 'fulfilled') stats = statsResult.value;
		if (contributionsResult.status === 'fulfilled') contributions = contributionsResult.value;
	});
</script>

{#if shown.length}
	<div class="gh block" aria-live="polite">
		<div class="gh-head">
			<h3 class="sub-title">{$t.gh_title}</h3>
			<a href={profile.github} target="_blank" rel="noopener" class="text-link">
				@{profile.githubUser}<ArrowUpRight />
			</a>
		</div>

		<dl class="gh-stats">
			{#each shown as stat (stat.labelKey)}
				<div class="gh-stat">
					<dd>{stat.value?.toLocaleString()}</dd>
					<dt>{$t[stat.labelKey]}</dt>
				</div>
			{/each}
		</dl>

		{#if contributions}<GithubHeatmap data={contributions} />{/if}
	</div>
{/if}
