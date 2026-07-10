<script lang="ts">
	import { User } from '@lucide/svelte';
	import ArchDiagram from '../art/ArchDiagram.svelte';
	import GithubHeatmap from './GithubHeatmap.svelte';
	import GithubStats from './GithubStats.svelte';
	import Stats from './Stats.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { t } from '$lib/stores/lang';
</script>

<section id="about">
	<div class="w">
		<p class="lbl"><User /><span>{$t.about_lbl}</span></p>
		<h2 class="sh">{$t.about_sh}</h2>

		<div class="about-grid">
			<div class="about-body" use:reveal>
				<p>{@html $t.about_p1}</p>
				<p>{@html $t.about_p2}</p>
				<p>{@html $t.about_p3}</p>
			</div>

			<div class="about-right" use:reveal>
				<div class="about-arch"><ArchDiagram /></div>
				<Stats />
			</div>
		</div>

		<div class="about-github" use:reveal>
			<GithubStats />
			<GithubHeatmap />
		</div>
	</div>
</section>
