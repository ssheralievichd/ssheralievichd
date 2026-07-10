<script lang="ts">
	import { Globe, Mail, MapPin, Phone } from '@lucide/svelte';
	import GithubIcon from '../art/GithubIcon.svelte';
	import LinkedinIcon from '../art/LinkedinIcon.svelte';
	import { profile } from '$lib/data/site';
	import { t } from '$lib/stores/lang';
</script>

<div class="r-header">
	<div class="r-name">{profile.name}</div>
	<div class="r-title">{$t.r_title}</div>
	<div class="r-contact-row">
		<span class="r-ci">
			<Phone size={11} />
			<a href={profile.phoneHref}>{profile.phone}</a>
		</span>
		<span class="r-ci">
			<Mail size={11} />
			<a href="mailto:{profile.email}">{profile.email}</a>
		</span>
		<span class="r-ci">
			<LinkedinIcon size={11} />
			<a href={profile.linkedin} target="_blank" rel="noopener">
				linkedin.com/in/{profile.githubUser}
			</a>
		</span>
		<span class="r-ci">
			<GithubIcon size={11} />
			<a href={profile.github} target="_blank" rel="noopener">github.com/{profile.githubUser}</a>
		</span>
		<span class="r-ci">
			<Globe size={11} />
			<a href="https://{profile.website}" target="_blank" rel="noopener">{profile.website}</a>
		</span>
		<span class="r-ci">
			<MapPin size={11} />
			<span>{$t.r_loc}</span>
		</span>
	</div>
</div>
