<script lang="ts">
	let {
		value,
		duration = 1000,
		placeholder = '—'
	}: { value: number | null; duration?: number; placeholder?: string } = $props();

	let shown = $state<number | null>(null);

	$effect(() => {
		const target = value;
		if (target === null) return;

		const start = performance.now();
		let frame = 0;

		const tick = (now: number) => {
			const progress = Math.min(Math.max((now - start) / duration, 0), 1);
			shown = Math.round((1 - Math.pow(1 - progress, 3)) * target) + 0;
			if (progress < 1) frame = requestAnimationFrame(tick);
		};

		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	});
</script>

<span>{shown === null ? placeholder : shown.toLocaleString()}</span>
