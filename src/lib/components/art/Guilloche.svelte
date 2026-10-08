<script lang="ts">
	import { heroBands, rings } from '$lib/art/guilloche';

	const engraving = rings(heroBands);
</script>

<svg class="guilloche" viewBox="-540 -540 1080 1080" aria-hidden="true">
	<defs>
		{#each engraving as ring, index (ring.radius)}
			<path id="guilloche-{index}" d={ring.path} />
		{/each}
	</defs>
	{#each engraving as ring, index (ring.radius)}
		<g class="guilloche-ring" style:--seconds="{Math.abs(ring.seconds)}s" class:back={ring.seconds < 0}>
			{#each ring.turns as turn (turn)}
				<use href="#guilloche-{index}" transform="rotate({turn.toFixed(3)})" />
			{/each}
		</g>
	{/each}
</svg>
