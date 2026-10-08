<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import { profile } from '$lib/data/site';
	import { projects, type Project } from '$lib/data/projects';
	import { t } from '$lib/stores/lang';

	const badgeKey = (kind: Project['kind']) =>
		kind === 'commercial' ? 'proj_badge_commercial' : 'proj_badge_personal';
</script>

<section id="projects" class="sec">
	<div class="wrap sec-grid wide">
		<div class="sec-head">
			<h2 class="sec-title">{$t.proj_sh}</h2>
			<p class="sec-note">{$t.proj_note}</p>
		</div>

		<div>
			<div class="rows">
				{#each projects as project (project.name)}
					<a href={project.href} target="_blank" rel="noopener" class="project">
						<div>
							<h3 class="project-name">{project.name}<ArrowUpRight /></h3>
							<p class="project-kind">{$t[badgeKey(project.kind)]}</p>
						</div>
						<p class="project-desc">{$t[project.descKey]}</p>
						<p class="project-stack">{project.tags.join(', ')}</p>
					</a>
				{/each}
			</div>

			<p class="projects-more">
				<a
					href="{profile.github}?tab=repositories"
					target="_blank"
					rel="noopener"
					class="text-link"
				>
					{$t.proj_more}<ArrowUpRight />
				</a>
			</p>
		</div>
	</div>
</section>
