<script lang="ts">
	import { ArrowDownRight, FileText } from '@lucide/svelte';
	import GithubIcon from '../art/GithubIcon.svelte';
	import LinkedinIcon from '../art/LinkedinIcon.svelte';
	import { figures, profile } from '$lib/data/site';
	import { t } from '$lib/stores/lang';
</script>

<section id="hero" class="hero field">
	<div class="wrap hero-inner">
		<h1 class="hero-name">Abdurahmon<br />Sheralievich</h1>
		<p class="hero-lead">{@html $t.hero_lead}</p>

		<div class="hero-actions">
			<a href="#contact" class="btn"><ArrowDownRight /><span>{$t.hero_btn_contact}</span></a>
			<a href="/resume" class="btn btn-line"><FileText /><span>{$t.hero_btn_cv}</span></a>
			<div class="hero-links">
				<a href={profile.github} target="_blank" rel="noopener"><GithubIcon /> GitHub</a>
				<a href={profile.linkedin} target="_blank" rel="noopener"><LinkedinIcon /> LinkedIn</a>
			</div>
		</div>

		<dl class="figures">
			{#each figures as figure, index (figure.labelKey)}
				<div class="figure" style:--i={index}>
					<dd class="figure-n">{figure.value}</dd>
					<dt class="figure-l">{$t[figure.labelKey]}</dt>
				</div>
			{/each}
		</dl>
	</div>
</section>
