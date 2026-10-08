<script lang="ts">
	import { posts } from '$lib/data/posts';
	import { t } from '$lib/stores/lang';
</script>

<section id="blog" class="sec">
	<div class="wrap sec-grid">
		<div class="sec-head"><h2 class="sec-title">{$t.blog_sh}</h2></div>

		<div class="rows">
			{#each posts as post (post.slug)}
				<a href="/blog/{post.slug}" class="row post-row">
					<p class="row-key">{$t[post.dateKey]}<br />{$t[post.readKey]}</p>
					<div>
						<h3 class="row-title">{$t[post.titleKey]}</h3>
						<p class="row-meta">{$t[post.excerptKey]}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
