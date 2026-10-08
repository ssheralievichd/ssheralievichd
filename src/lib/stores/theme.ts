import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

const initial = (): Theme => {
	if (!browser) return 'light';
	return (document.documentElement.dataset.theme as Theme) || 'light';
};

const store = writable<Theme>(initial());

store.subscribe((value) => {
	if (!browser) return;
	document.documentElement.dataset.theme = value;
	localStorage.setItem(STORAGE_KEY, value);
});

export const theme = {
	subscribe: store.subscribe,
	toggle: () => store.update((current) => (current === 'dark' ? 'light' : 'dark'))
};
