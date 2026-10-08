<script lang="ts">
	import ResumeBar from '$lib/components/resume/ResumeBar.svelte';
	import ResumeExperience from '$lib/components/resume/ResumeExperience.svelte';
	import ResumeHeader from '$lib/components/resume/ResumeHeader.svelte';
	import { languageSkills, skillGroups } from '$lib/data/resume';
	import { profile } from '$lib/data/site';
	import { t } from '$lib/stores/lang';
	import '$lib/styles/resume.css';
	import '$lib/styles/resume-sheet.css';
	import '$lib/styles/resume-items.css';
</script>

<svelte:head>
	<title>{profile.name} — {$t.nav_resume}</title>
</svelte:head>

<ResumeBar />

<main class="resume">
	<div class="sheet">
		<ResumeHeader />

		<section class="r-sec">
			<h2 class="r-sec-title">{$t.r_sec_summary}</h2>
			<p>{$t.r_summary}</p>
		</section>

		<ResumeExperience />

		<section class="r-sec">
			<h2 class="r-sec-title">{$t.r_sec_skills}</h2>
			<dl class="r-skills">
				{#each skillGroups as group (group.labelKey)}
					<dt>{$t[group.labelKey]}</dt>
					<dd>{$t[group.valueKey]}</dd>
				{/each}
			</dl>
		</section>

		<section class="r-sec">
			<h2 class="r-sec-title">{$t.r_edu_sec}</h2>
			<article class="r-item">
				<div class="r-item-head">
					<h3 class="r-item-title">{$t.r_edu_deg}</h3>
					<span class="r-item-date">2020 — 2024</span>
				</div>
				<p class="r-item-org">{$t.r_edu_sch}</p>
			</article>
		</section>

		<section class="r-sec">
			<h2 class="r-sec-title">{$t.r_lang_sec}</h2>
			<p>
				{#each languageSkills as skill, index (skill.nameKey)}
					{index ? ' · ' : ''}<strong>{$t[skill.nameKey]}</strong>
					{$t[skill.levelKey].toLowerCase()}
				{/each}
			</p>
		</section>
	</div>
</main>
