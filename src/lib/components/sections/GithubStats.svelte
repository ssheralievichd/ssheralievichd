<script lang="ts">
	import { CalendarCheck, FolderGit2, Star, Zap } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import Counter from '../Counter.svelte';
	import { profile } from '$lib/data/site';
	import { fetchStats, type GitHubStats } from '$lib/services/github';
	import { loadContributions, type Contributions } from '$lib/stores/contributions';
	import { t } from '$lib/stores/lang';

	let stats = $state<GitHubStats | null>(null);
	let contributions = $state<Contributions | null>(null);
	let failed = $state(false);

	onMount(async () => {
		const [statsResult, contributionsResult] = await Promise.allSettled([
			fetchStats(profile.githubUser),
			loadContributions()
		]);

		if (statsResult.status === 'fulfilled') stats = statsResult.value;
		if (contributionsResult.status === 'fulfilled') contributions = contributionsResult.value;
		failed = !stats && !contributions;
	});
</script>

{#if !failed}
	<div class="gh-strip" class:ready={stats || contributions} aria-live="polite">
		<div class="gh-grid">
			<div class="glass-card gh-stat">
				<div class="gh-stat-top"><Zap /><span>{$t.gh_contribs}</span></div>
				<div class="gh-stat-n"><Counter value={contributions?.total ?? null} /></div>
			</div>
			<div class="glass-card gh-stat">
				<div class="gh-stat-top"><CalendarCheck /><span>{$t.gh_active}</span></div>
				<div class="gh-stat-n"><Counter value={contributions?.activeDays ?? null} /></div>
			</div>
			<div class="glass-card gh-stat">
				<div class="gh-stat-top"><Star /><span>{$t.gh_stars}</span></div>
				<div class="gh-stat-n"><Counter value={stats?.stars ?? null} /></div>
			</div>
			<div class="glass-card gh-stat">
				<div class="gh-stat-top"><FolderGit2 /><span>{$t.gh_repos}</span></div>
				<div class="gh-stat-n"><Counter value={stats?.repos ?? null} /></div>
			</div>
		</div>
		<div class="gh-foot">
			<span class="gh-live-dot"></span>
			<span>{$t.gh_live}</span>
			<span>·</span>
			<a href={profile.github} target="_blank" rel="noopener">@{profile.githubUser}</a>
		</div>
	</div>
{/if}
