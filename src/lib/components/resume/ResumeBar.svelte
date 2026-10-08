<script lang="ts">
	import { ArrowLeft, Printer } from '@lucide/svelte';
	import LangToggle from '../LangToggle.svelte';
	import { t } from '$lib/stores/lang';
</script>

<div class="resume-bar">
	<div class="wrap resume-bar-inner">
		<a href="/" class="text-link resume-back"><ArrowLeft />{$t.back_to_portfolio}</a>
		<LangToggle />
		<button class="btn" aria-label={$t.r_print} onclick={() => window.print()}>
			<Printer /><span>{$t.r_print}</span>
		</button>
	</div>
</div>
