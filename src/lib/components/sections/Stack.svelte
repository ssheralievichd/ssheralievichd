<script lang="ts">
	import { stackGroups } from '$lib/data/stack';
	import { t } from '$lib/stores/lang';
</script>

<section id="stack" class="sec">
	<div class="wrap sec-grid">
		<div class="sec-head">
			<h2 class="sec-title">{$t.stack_sh}</h2>
			<p class="sec-note">{$t.stack_note}</p>
		</div>

		<dl class="rows">
			{#each stackGroups as group (group.titleKey)}
				<div class="row">
					<dt class="row-key">{$t[group.titleKey]}</dt>
					<dd class="list-inline">{group.items.join(', ')}</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>
