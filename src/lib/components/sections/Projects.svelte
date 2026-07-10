<script lang="ts">
	import { ArrowUpRight, FolderOpen } from '@lucide/svelte';
	import GithubIcon from '../art/GithubIcon.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { profile } from '$lib/data/site';
	import { projects } from '$lib/data/projects';
	import { t } from '$lib/stores/lang';

	const badgeKey = (kind: 'commercial' | 'personal') =>
		kind === 'commercial' ? 'proj_badge_commercial' : 'proj_badge_personal';
</script>

<section id="projects">
	<div class="w">
		<p class="lbl"><FolderOpen /><span>{$t.proj_lbl}</span></p>
		<h2 class="sh">{$t.proj_sh}</h2>

		<div class="proj-grid">
			{#each projects as project (project.name)}
				<a
					href={project.href}
					target="_blank"
					rel="noopener"
					class="card proj-card"
					use:reveal
				>
					<div class="proj-head">
						<span class="proj-name">{project.name}<ArrowUpRight /></span>
						<span class="proj-badge {project.kind}">{$t[badgeKey(project.kind)]}</span>
					</div>
					<p class="proj-desc">{$t[project.descKey]}</p>
					<div class="proj-tags">
						{#each project.tags as tag (tag)}
							<span class="tag">{tag}</span>
						{/each}
					</div>
				</a>
			{/each}
		</div>

		<div class="proj-more">
			<a
				href="{profile.github}?tab=repositories"
				target="_blank"
				rel="noopener"
				class="btn btn-secondary"
			>
				<GithubIcon /><span>{$t.proj_more}</span>
			</a>
		</div>
	</div>
</section>
