<script lang="ts">
	import { Calendar, GitBranch, Landmark, Zap } from '@lucide/svelte';
	import type { Component } from 'svelte';
	import { countUp } from '$lib/actions/countUp';
	import { t } from '$lib/stores/lang';
	import type { TranslationKey } from '$lib/i18n';

	type Stat = { icon: Component; target: number; suffix: string; labelKey: TranslationKey };

	const stats: Stat[] = [
		{ icon: Calendar, target: 4, suffix: '+', labelKey: 'stat_years' },
		{ icon: Landmark, target: 2, suffix: ' yrs', labelKey: 'stat_fintech' },
		{ icon: Zap, target: 60, suffix: '%', labelKey: 'stat_deploy' },
		{ icon: GitBranch, target: 3, suffix: '', labelKey: 'stat_langs' }
	];
</script>

<div class="stats">
	{#each stats as stat (stat.labelKey)}
		<div class="glass-card stat">
			<stat.icon class="stat-icon" />
			<div class="stat-n" use:countUp={{ target: stat.target, suffix: stat.suffix }}>0</div>
			<div class="stat-l">{$t[stat.labelKey]}</div>
		</div>
	{/each}
</div>
