import type { Action } from 'svelte/action';

export type CountUpOptions = { target: number; suffix?: string; duration?: number };

const run = (node: HTMLElement, { target, suffix = '', duration = 900 }: CountUpOptions) => {
	const start = performance.now();
	const tick = (now: number) => {
		const progress = Math.min((now - start) / duration, 1);
		const eased = 1 - Math.pow(1 - progress, 3);
		node.textContent = Math.round(eased * target).toLocaleString() + suffix;
		if (progress < 1) requestAnimationFrame(tick);
	};
	requestAnimationFrame(tick);
};

export const countUp: Action<HTMLElement, CountUpOptions> = (node, options) => {
	let current = options;

	const observer = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			if (!entry.isIntersecting) continue;
			observer.unobserve(entry.target);
			run(node, current);
		}
	});

	observer.observe(node);

	return {
		update: (next: CountUpOptions) => {
			current = next;
		},
		destroy: () => observer.disconnect()
	};
};
