<script lang="ts">
	import { Briefcase } from '@lucide/svelte';
	import Pipeline from '../art/Pipeline.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { roles } from '$lib/data/experience';
	import { t } from '$lib/stores/lang';
</script>

<section id="experience">
	<div class="w">
		<p class="lbl"><Briefcase /><span>{$t.exp_lbl}</span></p>
		<h2 class="sh">{$t.exp_sh}</h2>

		<div class="exp-pipeline" use:reveal><Pipeline /></div>

		<div class="tl">
			{#each roles as role (role.roleKey)}
				<div class="tli" use:reveal>
					<div class="tldot" class:active={role.active}></div>
					<div class="{role.variant} tlc">
						<div class="tl-top">
							<span class="tl-role">{$t[role.roleKey]}</span>
							<span class="tl-date">{role.date}</span>
						</div>
						<p class="tl-org"><role.icon /><span>{$t[role.orgKey]}</span></p>
						{#if role.active}
							<span class="tl-now"><span class="tl-dot2"></span> Active</span>
						{/if}
						<ul class="tl-ul">
							{#each role.bulletKeys as bullet (bullet)}
								<li>{@html $t[bullet]}</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
