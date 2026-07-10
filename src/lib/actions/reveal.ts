import type { Action } from 'svelte/action';

export const reveal: Action = (node) => {
	node.classList.add('fade-up');

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add('in');
				observer.unobserve(entry.target);
			}
		},
		{ rootMargin: '0px 0px -40px 0px' }
	);

	observer.observe(node);

	return { destroy: () => observer.disconnect() };
};
