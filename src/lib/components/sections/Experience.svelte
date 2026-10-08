<script lang="ts">
	import { roles } from '$lib/data/experience';
	import { t } from '$lib/stores/lang';
</script>

<section id="experience" class="sec">
	<div class="wrap sec-grid">
		<div class="sec-head"><h2 class="sec-title">{$t.exp_sh}</h2></div>

		<ol class="rows">
			{#each roles as role (role.roleKey)}
				<li class="row">
					<p class="row-key">{role.date}</p>
					<div>
						<h3 class="row-title">
							{$t[role.roleKey]}{#if role.active}<span class="mark">{$t.exp_current}</span>{/if}
						</h3>
						<p class="row-meta">{$t[role.orgKey]}</p>
						<ul class="row-body">
							{#each role.bulletKeys as bullet (bullet)}
								<li>{@html $t[bullet]}</li>
							{/each}
						</ul>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>
