<script lang="ts">
	import About from '$lib/components/sections/About.svelte';
	import BlogList from '$lib/components/sections/BlogList.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Education from '$lib/components/sections/Education.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Life from '$lib/components/sections/Life.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Stack from '$lib/components/sections/Stack.svelte';
</script>

<svelte:head>
	<title>Abdurahmon Sheralievich — Senior Full-Stack Software Engineer</title>
	<meta
		name="description"
		content="Backend-focused full-stack engineer building production fintech systems and microservices in Python. Team Lead at TojikTelecom."
	/>
</svelte:head>

<Nav />

<main>
	<Hero />
	<About />
	<Stack />
	<Experience />
	<Projects />
	<Life />
	<Education />
	<BlogList />
</main>

<Contact />
