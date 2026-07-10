<script lang="ts">
	import { Download, Heart } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import { hobbies, values } from '$lib/data/life';
	import { t } from '$lib/stores/lang';
</script>

<section id="life">
	<div class="w">
		<p class="lbl"><Heart /><span>{$t.life_lbl}</span></p>
		<h2 class="sh">{$t.life_sh}</h2>

		<div class="life-grid" use:reveal>
			<div class="life-body">
				<p>{@html $t.life_p1}</p>
				<p>{@html $t.life_p2}</p>
				<p>{@html $t.life_p3}</p>
			</div>
			<div class="life-values">
				{#each values as value (value.titleKey)}
					<div class="value-item">
						<div class="value-icon"><value.icon /></div>
						<div class="value-text">
							<strong>{$t[value.titleKey]}</strong><span>{$t[value.subKey]}</span>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="hobbies-grid" use:reveal>
			{#each hobbies as hobby (hobby.titleKey)}
				<div class="glass-card hobby-card">
					<div class="hobby-icon"><hobby.icon /></div>
					<div class="hobby-title">{$t[hobby.titleKey]}</div>
					<div class="hobby-desc">{$t[hobby.descKey]}</div>
				</div>
			{/each}
		</div>

		<div class="highlight-card resume-bar" use:reveal>
			<div class="resume-bar-text">
				<strong>{$t.rbar_title}</strong>
				<span>{$t.rbar_sub}</span>
			</div>
			<a href="/resume" class="btn btn-primary">
				<Download size={14} /><span>{$t.rbar_btn}</span>
			</a>
		</div>
	</div>
</section>
