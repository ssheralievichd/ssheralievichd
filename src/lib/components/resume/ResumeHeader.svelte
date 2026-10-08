<script lang="ts">
	import { profile } from '$lib/data/site';
	import { t } from '$lib/stores/lang';
</script>

<header class="r-head">
	<h1 class="r-name">{profile.name}</h1>
	<p class="r-role">{$t.r_title}</p>
	<p class="r-contact">
		<a href={profile.phoneHref}>{profile.phone}</a>
		<a href="mailto:{profile.email}">{profile.email}</a>
		<a href={profile.telegram}>t.me/{profile.githubUser}</a>
		<a href={profile.linkedin}>linkedin.com/in/{profile.githubUser}</a>
		<a href={profile.github}>github.com/{profile.githubUser}</a>
		<a href="https://{profile.website}">{profile.website}</a>
		<span>{$t.r_loc}</span>
	</p>
</header>
