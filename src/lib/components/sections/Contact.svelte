<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import Footer from '../Footer.svelte';
	import Guilloche from '../art/Guilloche.svelte';
	import { contactBands } from '$lib/art/guilloche';
	import { profile } from '$lib/data/site';
	import type { TranslationKey } from '$lib/i18n';
	import { t } from '$lib/stores/lang';

	type Channel = { labelKey: TranslationKey; value: string; href: string; external: boolean };

	const channels: Channel[] = [
		{ labelKey: 'c_email', value: profile.email, href: `mailto:${profile.email}`, external: false },
		{
			labelKey: 'c_telegram',
			value: `@${profile.githubUser}`,
			href: profile.telegram,
			external: true
		},
		{
			labelKey: 'c_linkedin',
			value: `linkedin.com/in/${profile.githubUser}`,
			href: profile.linkedin,
			external: true
		},
		{
			labelKey: 'c_github',
			value: `github.com/${profile.githubUser}`,
			href: profile.github,
			external: true
		}
	];
</script>

<section id="contact" class="contact field">
	<Guilloche bands={contactBands} name="contact" />
	<div class="wrap">
		<div class="contact-grid">
			<div>
				<h2 class="contact-title">{$t.contact_sh}</h2>
				<p class="contact-lead">{$t.contact_cp}</p>
			</div>

			<dl class="contact-list">
				{#each channels as channel (channel.labelKey)}
					<a
						href={channel.href}
						class="contact-item"
						target={channel.external ? '_blank' : undefined}
						rel={channel.external ? 'noopener' : undefined}
					>
						<dt>{$t[channel.labelKey]}</dt>
						<dd>{channel.value}</dd>
						<ArrowUpRight />
					</a>
				{/each}
				<a href="/resume" class="contact-item">
					<dt>{$t.c_resume}</dt>
					<dd>{$t.c_resume_v}</dd>
					<ArrowUpRight />
				</a>
			</dl>
		</div>

		<Footer />
	</div>
</section>
