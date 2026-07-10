<script lang="ts">
	import { ArrowLeft, Printer } from '@lucide/svelte';
	import { lang, t } from '$lib/stores/lang';
	import { profile } from '$lib/data/site';
	import type { Lang } from '$lib/i18n';

	const options: Lang[] = ['en', 'ru'];
</script>

<div class="print-bar">
	<div class="print-bar-left">
		<a href="/">
			<ArrowLeft size={14} />
			{$t.back_to_portfolio}
		</a>
		<div class="lang-toggle-r">
			{#each options as option (option)}
				<button
					class="lang-toggle-r-opt"
					class:active={$lang === option}
					onclick={() => lang.set(option)}
				>
					{option.toUpperCase()}
				</button>
			{/each}
		</div>
		<span class="print-bar-title">{profile.name} — {$t.nav_resume}</span>
	</div>
	<button class="btn-print" onclick={() => window.print()}>
		<Printer size={13} />
		{$t.r_print}
	</button>
</div>
