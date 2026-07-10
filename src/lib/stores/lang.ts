import { browser } from '$app/environment';
import { derived, writable } from 'svelte/store';
import { dictionaries, type Dictionary, type Lang } from '$lib/i18n';

const STORAGE_KEY = 'lang';

const isLang = (value: string | null): value is Lang => value === 'en' || value === 'ru';

const store = writable<Lang>('en');

store.subscribe((value) => {
	if (browser) document.documentElement.lang = value;
});

export const lang = {
	subscribe: store.subscribe,
	set: (value: Lang) => {
		store.set(value);
		if (browser) localStorage.setItem(STORAGE_KEY, value);
	},
	hydrate: () => {
		if (!browser) return;
		const saved = localStorage.getItem(STORAGE_KEY);
		if (isLang(saved)) store.set(saved);
	}
};

export const t = derived<typeof store, Dictionary>(store, ($lang) => dictionaries[$lang]);
