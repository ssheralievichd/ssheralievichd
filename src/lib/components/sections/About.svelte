<script lang="ts">
	import GithubActivity from './GithubActivity.svelte';
	import { t } from '$lib/stores/lang';
</script>

<section id="about" class="sec">
	<div class="wrap sec-grid">
		<div class="sec-head"><h2 class="sec-title">{$t.about_sh}</h2></div>

		<div>
			<div class="prose">
				<p class="lead">{$t.about_p1}</p>
				<p>{@html $t.about_p2}</p>
				<p>{$t.about_p3}</p>
			</div>
			<GithubActivity />
		</div>
	</div>
</section>
