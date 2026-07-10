<script lang="ts">
	import { BookOpen, Globe } from '@lucide/svelte';
	import { t } from '$lib/stores/lang';
</script>

<section id="education" style="padding-top:0">
	<div class="w">
		<p class="lbl"><BookOpen /><span>{$t.edu_lbl}</span></p>
		<h2 class="sh" style="margin-bottom:28px">{$t.edu_sh}</h2>

		<div class="edu-grid">
			<div class="glass-card ec">
				<p class="ec-deg">{$t.edu_deg}</p>
				<p class="ec-sch">{$t.edu_sch}</p>
				<p class="ec-yr">{$t.edu_yr}</p>
			</div>
			<div class="card ec ec-remote">
				<Globe size={22} />
				<span>{$t.edu_remote}</span>
			</div>
		</div>
	</div>
</section>
