<script lang="ts">
	import { resumeRoles } from '$lib/data/resume';
	import { t } from '$lib/stores/lang';
</script>

<div class="r-section">
	<div class="r-sec-title">{$t.r_sec_exp}</div>

	{#each resumeRoles as role (role.roleKey)}
		<div class="r-exp">
			<div class="r-exp-head">
				<span class="r-exp-role">{$t[role.roleKey]}</span>
				<span class="r-exp-date">{role.date}</span>
			</div>
			<div class="r-exp-org">{$t[role.orgKey]}</div>
			<ul class="r-exp-ul">
				{#each role.bulletKeys as bullet (bullet)}
					<li>{$t[bullet]}</li>
				{/each}
			</ul>

			{#if role.achievementsKey && role.achievementKeys}
				<div class="r-exp-ach">{$t[role.achievementsKey]}</div>
				<ul class="r-exp-ul">
					{#each role.achievementKeys as achievement (achievement)}
						<li>{$t[achievement]}</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/each}
</div>
