<script lang="ts">
	import { PenLine } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import { posts } from '$lib/data/posts';
	import { t } from '$lib/stores/lang';
</script>

<section id="blog">
	<div class="w">
		<p class="lbl"><PenLine /><span>{$t.blog_lbl}</span></p>
		<h2 class="sh">{$t.blog_sh}</h2>

		<div class="blog-grid">
			{#each posts as post (post.slug)}
				<a href="/blog/{post.slug}" class="card blog-card" use:reveal>
					<div class="blog-meta">
						<span>{$t[post.dateKey]}</span>
						<span class="blog-meta-dot"></span>
						<span>{$t[post.readKey]}</span>
					</div>
					<h3 class="blog-title">{$t[post.titleKey]}</h3>
					<p class="blog-excerpt">{$t[post.excerptKey]}</p>
					<div class="blog-footer">
						<div class="blog-tags">
							{#each post.tags as tag (tag)}
								<span class="tag">{tag}</span>
							{/each}
						</div>
						<span class="blog-read">{$t.blog_readmore}</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
