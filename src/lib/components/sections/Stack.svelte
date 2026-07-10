<script lang="ts">
	import { Layers } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import { stackGroups } from '$lib/data/stack';
	import { t } from '$lib/stores/lang';
</script>

<section id="stack">
	<div class="w">
		<p class="lbl"><Layers /><span>{$t.stack_lbl}</span></p>
		<h2 class="sh">{$t.stack_sh}</h2>

		<div class="stack-grid" use:reveal>
			{#each stackGroups as group (group.titleKey)}
				<div class="card sc">
					<p class="sc-cat"><group.icon /><span>{$t[group.titleKey]}</span></p>
					<div class="tags">
						{#each group.tags as tag (tag.label)}
							<span class="tag" class:tag-muted={tag.muted}>{tag.label}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
