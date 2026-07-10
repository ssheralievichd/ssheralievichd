<script lang="ts">
	import { Mail, Send } from '@lucide/svelte';
	import ContactNet from '../art/ContactNet.svelte';
	import GithubIcon from '../art/GithubIcon.svelte';
	import LinkedinIcon from '../art/LinkedinIcon.svelte';
	import { profile } from '$lib/data/site';
	import { t } from '$lib/stores/lang';
</script>

<section id="contact">
	<div class="w">
		<div class="highlight-card cbox">
			<ContactNet />
			<p class="lbl clbl"><Mail /><span>{$t.contact_lbl}</span></p>
			<h2 class="ch">{@html $t.contact_ch}</h2>
			<p class="cp">{$t.contact_cp}</p>

			<div class="clinks">
				<a href="mailto:{profile.email}" class="cl">
					<Mail /> {profile.email}
				</a>
				<a href={profile.linkedin} target="_blank" rel="noopener" class="cl">
					<LinkedinIcon /> linkedin.com/in/{profile.githubUser}
				</a>
				<a href={profile.github} target="_blank" rel="noopener" class="cl">
					<GithubIcon /> github.com/{profile.githubUser}
				</a>
				<a href={profile.telegram} target="_blank" rel="noopener" class="cl">
					<Send /> @{profile.githubUser}
				</a>
			</div>
		</div>
	</div>
</section>
