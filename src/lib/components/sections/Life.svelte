<script lang="ts">
	import { values } from '$lib/data/site';
	import { t } from '$lib/stores/lang';
</script>

<section id="life" class="sec">
	<div class="wrap sec-grid">
		<div class="sec-head"><h2 class="sec-title">{$t.life_sh}</h2></div>

		<div>
			<div class="prose">
				<p>{$t.life_p1}</p>
				<p>{$t.life_p2}</p>
			</div>

			<div class="block">
				<h3 class="sub-title">{$t.values_sh}</h3>
				<dl class="values">
					{#each values as value (value.titleKey)}
						<div>
							<dt><strong>{$t[value.titleKey]}</strong></dt>
							<dd>{$t[value.subKey]}</dd>
						</div>
					{/each}
				</dl>
			</div>
		</div>
	</div>
</section>
