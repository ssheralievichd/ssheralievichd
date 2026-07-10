<script lang="ts">
	import ResumeBar from '$lib/components/resume/ResumeBar.svelte';
	import ResumeExperience from '$lib/components/resume/ResumeExperience.svelte';
	import ResumeHeader from '$lib/components/resume/ResumeHeader.svelte';
	import { languageSkills, skillGroups } from '$lib/data/resume';
	import { profile } from '$lib/data/site';
	import { t } from '$lib/stores/lang';
	import '$lib/styles/resume.css';
	import '$lib/styles/resume-paper.css';
	import '$lib/styles/resume-print.css';
</script>

<svelte:head>
	<title>{profile.name} — Resume</title>
</svelte:head>

<div class="resume-body">
	<ResumeBar />

	<div class="page-wrap">
		<ResumeHeader />

		<div class="r-section">
			<div class="r-sec-title">{$t.r_sec_summary}</div>
			<p class="r-summary">{$t.r_summary}</p>
		</div>

		<ResumeExperience />

		<div class="r-section">
			<div class="r-sec-title">{$t.r_sec_skills}</div>
			<div class="r-skills-grid">
				{#each skillGroups as group (group.labelKey)}
					<div class="r-skill-group">
						<div class="r-skill-label">{$t[group.labelKey]}</div>
						<div class="r-skill-val">{$t[group.valueKey]}</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="r-section">
			<div class="r-sec-title">{$t.r_edu_sec}</div>
			<div class="r-edu-head">
				<span class="r-edu-deg">{$t.r_edu_deg}</span>
				<span class="r-edu-date">2020 — 2024</span>
			</div>
			<div class="r-edu-school">{$t.r_edu_sch}</div>
		</div>

		<div class="r-section">
			<div class="r-sec-title">{$t.r_lang_sec}</div>
			<div class="r-lang-row">
				{#each languageSkills as skill (skill.nameKey)}
					<span class="r-lang-item">
						<strong>{$t[skill.nameKey]}</strong> — <span>{$t[skill.levelKey]}</span>
					</span>
				{/each}
			</div>
		</div>
	</div>
</div>
