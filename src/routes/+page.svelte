<script lang="ts">
	import About from '$lib/components/sections/About.svelte';
	import Backdrop from '$lib/components/Backdrop.svelte';
	import BlogList from '$lib/components/sections/BlogList.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Education from '$lib/components/sections/Education.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Life from '$lib/components/sections/Life.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Stack from '$lib/components/sections/Stack.svelte';
</script>

<svelte:head>
	<title>Abdurahmon Sheralievich — Full-Stack Engineer</title>
	<meta
		name="description"
		content="Backend-focused full-stack engineer shipping production fintech systems and scalable microservices. Ex-Alif Bank."
	/>
</svelte:head>

<Backdrop />
<Nav />

<Hero />
<About />
<Stack />
<Experience />
<Projects />
<Life />
<Education />
<BlogList />
<Contact />

<Footer />
