<script lang="ts">
	import { lang, t } from '$lib/stores/lang';
	import type { Lang } from '$lib/i18n';

	const options: Lang[] = ['en', 'ru'];
</script>

<div class="toggle" role="group" aria-label={$t.nav_lang}>
	{#each options as option (option)}
		<button aria-pressed={$lang === option} onclick={() => lang.set(option)}>
			{option.toUpperCase()}
		</button>
	{/each}
</div>
