<script lang="ts">
	import { Briefcase, Code2, Download, FolderGit2, FolderOpen, Landmark, Send } from '@lucide/svelte';
	import CodeWindow from '../art/CodeWindow.svelte';
	import GithubIcon from '../art/GithubIcon.svelte';
	import HeroBadges from '../art/HeroBadges.svelte';
	import LinkedinIcon from '../art/LinkedinIcon.svelte';
	import { cycleWords, profile } from '$lib/data/site';
	import { t } from '$lib/stores/lang';
	import { onMount } from 'svelte';

	let index = $state(0);
	let fading = $state(false);

	onMount(() => {
		const timer = setInterval(() => {
			fading = true;
			setTimeout(() => {
				index = (index + 1) % cycleWords.length;
				fading = false;
			}, 210);
		}, 2600);
		return () => clearInterval(timer);
	});
</script>

<section id="hero">
	<div class="w hero-inner">
		<div class="hero-content">
			<p class="hero-tag"><Code2 size={11} /><span>{$t.hero_tag}</span></p>
			<h1 class="hero-h1 shimmer">Abdurahmon<br />Sheralievich</h1>
			<p class="hero-sub">{@html $t.hero_sub}</p>

			<div class="hero-proof">
				<span class="hero-chip"><Briefcase /><strong>4+</strong> <span>{$t.chip_years}</span></span>
				<span class="hero-chip"><FolderGit2 /><span>{$t.chip_projects}</span></span>
				<span class="hero-chip"><Landmark /><span>{$t.chip_fintech}</span></span>
			</div>

			<p class="hero-cycle">
				<span>{$t.hero_cycle}</span>
				<span class="cword" class:out={fading}>{cycleWords[index]}</span>
				<span class="cursor"></span>
			</p>

			<div class="hero-btns">
				<a href="#projects" class="btn btn-primary">
					<FolderOpen size={14} /><span>{$t.hero_btn_proj}</span>
				</a>
				<a href="/resume" class="btn btn-secondary">
					<Download size={14} /><span>{$t.hero_btn_cv}</span>
				</a>
				<a href="#contact" class="btn btn-secondary">
					<Send size={14} /><span>{$t.hero_btn_contact}</span>
				</a>
				<div class="hero-btns-row">
					<a href={profile.github} target="_blank" rel="noopener" class="btn btn-secondary">
						<GithubIcon /> GitHub
					</a>
					<a href={profile.linkedin} target="_blank" rel="noopener" class="btn btn-secondary">
						<LinkedinIcon /> LinkedIn
					</a>
				</div>
			</div>
		</div>

		<div class="hero-illustration" aria-hidden="true">
			<CodeWindow />
			<HeroBadges />
		</div>
	</div>

	<div class="scroll-hint">
		<div class="scroll-bar"></div>
		<span class="scroll-txt">{$t.scroll_txt}</span>
	</div>
</section>
