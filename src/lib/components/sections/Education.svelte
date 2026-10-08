<script lang="ts">
	import { languageSkills } from '$lib/data/resume';
	import { t } from '$lib/stores/lang';
</script>

<section id="education" class="sec">
	<div class="wrap sec-grid">
		<div class="sec-head"><h2 class="sec-title">{$t.edu_sh}</h2></div>

		<div class="rows">
			<div class="row">
				<p class="row-key">{$t.edu_yr}</p>
				<div>
					<h3 class="row-title">{$t.edu_deg}</h3>
					<p class="row-meta">{$t.edu_sch}</p>
				</div>
			</div>
			<div class="row">
				<p class="row-key">{$t.langs_sh}</p>
				<p class="list-inline">
					{#each languageSkills as skill, index (skill.nameKey)}
						{index ? ', ' : ''}<strong>{$t[skill.nameKey]}</strong>
						<span class="row-meta">{$t[skill.levelKey].toLowerCase()}</span>
					{/each}
				</p>
			</div>
		</div>
	</div>
</section>
