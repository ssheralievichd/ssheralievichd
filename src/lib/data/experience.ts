import { Building2, Landmark, Laptop } from '@lucide/svelte';
import type { Component } from 'svelte';
import type { TranslationKey } from '$lib/i18n';

export type Role = {
	roleKey: TranslationKey;
	orgKey: TranslationKey;
	date: string;
	icon: Component;
	variant: 'highlight-card' | 'glass-card' | 'card';
	active: boolean;
	bulletKeys: TranslationKey[];
};

export const roles: Role[] = [
	{
		roleKey: 'role_fullstack',
		orgKey: 'org_current',
		date: 'Oct 2025 — Present',
		icon: Building2,
		variant: 'highlight-card',
		active: true,
		bulletKeys: ['exp1_b1', 'exp1_b2', 'exp1_b3', 'exp1_b4']
	},
	{
		roleKey: 'role_alif',
		orgKey: 'org_alif',
		date: 'Aug 2022 — Oct 2024',
		icon: Landmark,
		variant: 'glass-card',
		active: false,
		bulletKeys: ['exp3_b1', 'exp3_b2', 'exp3_b3', 'exp3_b4']
	},
	{
		roleKey: 'role_formika',
		orgKey: 'org_formika',
		date: 'Oct 2024 — Jan 2025',
		icon: Building2,
		variant: 'card',
		active: false,
		bulletKeys: ['exp2_b1', 'exp2_b2', 'exp2_b3']
	},
	{
		roleKey: 'role_freelance',
		orgKey: 'org_freelance',
		date: '2021 — 2022',
		icon: Laptop,
		variant: 'card',
		active: false,
		bulletKeys: ['exp4_b1', 'exp4_b2', 'exp4_b3']
	}
];
