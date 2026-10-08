<script lang="ts">
	import { heroBands, rings, type Band } from '$lib/art/guilloche';

	let { bands = heroBands, name = 'hero' }: { bands?: Band[]; name?: string } = $props();

	const engraving = $derived(rings(bands));
</script>

<svg class="guilloche guilloche-{name}" viewBox="-540 -540 1080 1080" aria-hidden="true">
	<defs>
		{#each engraving as ring, index (ring.radius)}
			<path id="guilloche-{name}-{index}" d={ring.path} />
		{/each}
	</defs>
	{#each engraving as ring, index (ring.radius)}
		<g class="guilloche-ring" style:--seconds="{Math.abs(ring.seconds)}s" class:back={ring.seconds < 0}>
			{#each ring.turns as turn (turn)}
				<use href="#guilloche-{name}-{index}" transform="rotate({turn.toFixed(3)})" />
			{/each}
		</g>
	{/each}
</svg>
