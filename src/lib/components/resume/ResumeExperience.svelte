<script lang="ts">
	import { resumeRoles } from '$lib/data/resume';
	import { t } from '$lib/stores/lang';
</script>

<section class="r-sec">
	<h2 class="r-sec-title">{$t.r_sec_exp}</h2>

	{#each resumeRoles as role (role.roleKey)}
		<article class="r-item">
			<div class="r-item-head">
				<h3 class="r-item-title">{$t[role.roleKey]}</h3>
				<span class="r-item-date">{$t[role.dateKey]}</span>
			</div>
			<p class="r-item-org">{$t[role.orgKey]}</p>
			<ul class="r-list">
				{#each role.bulletKeys as bullet (bullet)}
					<li>{$t[bullet]}</li>
				{/each}
			</ul>

			{#if role.achievementsKey && role.achievementKeys}
				<p class="r-item-sub">{$t[role.achievementsKey]}</p>
				<ul class="r-list">
					{#each role.achievementKeys as achievement (achievement)}
						<li>{$t[achievement]}</li>
					{/each}
				</ul>
			{/if}
		</article>
	{/each}
</section>
