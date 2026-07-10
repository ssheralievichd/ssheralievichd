<script lang="ts">
	import { onMount } from 'svelte';
	import { lang } from '$lib/stores/lang';
	import '$lib/styles/app.css';


	let { children } = $props();

	onMount(lang.hydrate);
</script>

{@render children()}
