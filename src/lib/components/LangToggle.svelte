<script lang="ts">
	import { lang } from '$lib/stores/lang';
	import type { Lang } from '$lib/i18n';

	const options: Lang[] = ['en', 'ru'];
</script>

<div class="lang-toggle">
	{#each options as option (option)}
		<button
			class="lang-toggle-opt"
			class:active={$lang === option}
			onclick={() => lang.set(option)}
		>
			{option.toUpperCase()}
		</button>
	{/each}
</div>
