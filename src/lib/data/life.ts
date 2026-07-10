import {
	BookOpen,
	Cpu,
	Globe2,
	Layers,
	Mountain,
	Music,
	ShieldCheck,
	Terminal,
	TrendingUp,
	Users
} from '@lucide/svelte';
import type { Component } from 'svelte';
import type { TranslationKey } from '$lib/i18n';

export type Value = { icon: Component; titleKey: TranslationKey; subKey: TranslationKey };
export type Hobby = { icon: Component; titleKey: TranslationKey; descKey: TranslationKey };

export const values: Value[] = [
	{ icon: ShieldCheck, titleKey: 'val1_title', subKey: 'val1_sub' },
	{ icon: Layers, titleKey: 'val2_title', subKey: 'val2_sub' },
	{ icon: TrendingUp, titleKey: 'val3_title', subKey: 'val3_sub' },
	{ icon: Users, titleKey: 'val4_title', subKey: 'val4_sub' }
];

export const hobbies: Hobby[] = [
	{ icon: Terminal, titleKey: 'hobby1_title', descKey: 'hobby1_desc' },
	{ icon: BookOpen, titleKey: 'hobby2_title', descKey: 'hobby2_desc' },
	{ icon: Mountain, titleKey: 'hobby3_title', descKey: 'hobby3_desc' },
	{ icon: Cpu, titleKey: 'hobby4_title', descKey: 'hobby4_desc' },
	{ icon: Globe2, titleKey: 'hobby5_title', descKey: 'hobby5_desc' },
	{ icon: Music, titleKey: 'hobby6_title', descKey: 'hobby6_desc' }
];
