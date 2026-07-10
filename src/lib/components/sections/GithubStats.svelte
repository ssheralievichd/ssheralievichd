<script lang="ts">
	import { FolderGit2, GitFork, Star, Users } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import Counter from '../Counter.svelte';
	import { profile } from '$lib/data/site';
	import { fetchStats, type GitHubStats } from '$lib/services/github';
	import { t } from '$lib/stores/lang';

	let stats = $state<GitHubStats | null>(null);
	let failed = $state(false);

	onMount(async () => {
		try {
			stats = await fetchStats(profile.githubUser);
		} catch {
			failed = true;
		}
	});
</script>

{#if !failed}
	<div class="gh-strip" class:ready={stats} aria-live="polite">
		<div class="gh-grid">
			<div class="glass-card gh-stat">
				<div class="gh-stat-top"><Star /><span>{$t.gh_stars}</span></div>
				<div class="gh-stat-n"><Counter value={stats?.stars ?? null} /></div>
			</div>
			<div class="glass-card gh-stat">
				<div class="gh-stat-top"><FolderGit2 /><span>{$t.gh_repos}</span></div>
				<div class="gh-stat-n"><Counter value={stats?.repos ?? null} /></div>
			</div>
			<div class="glass-card gh-stat">
				<div class="gh-stat-top"><Users /><span>{$t.gh_followers}</span></div>
				<div class="gh-stat-n"><Counter value={stats?.followers ?? null} /></div>
			</div>
			<div class="glass-card gh-stat">
				<div class="gh-stat-top"><GitFork /><span>{$t.gh_forks}</span></div>
				<div class="gh-stat-n"><Counter value={stats?.forks ?? null} /></div>
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
