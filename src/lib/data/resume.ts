import type { TranslationKey } from '$lib/i18n';

export type ResumeRole = {
	roleKey: TranslationKey;
	orgKey: TranslationKey;
	date: string;
	bulletKeys: TranslationKey[];
	achievementsKey?: TranslationKey;
	achievementKeys?: TranslationKey[];
};

export type SkillGroup = { labelKey: TranslationKey; valueKey: TranslationKey };
export type LanguageSkill = { nameKey: TranslationKey; levelKey: TranslationKey };

export const resumeRoles: ResumeRole[] = [
	{
		roleKey: 'r_role1',
		orgKey: 'r_org1',
		date: 'Oct 2025 — Present',
		bulletKeys: ['r_b1_1', 'r_b1_2', 'r_b1_3', 'r_b1_4'],
		achievementsKey: 'r_a1',
		achievementKeys: ['r_a1_1', 'r_a1_2']
	},
	{
		roleKey: 'r_role3',
		orgKey: 'r_org3',
		date: 'Aug 2022 — Oct 2024',
		bulletKeys: ['r_b3_1', 'r_b3_2', 'r_b3_3', 'r_b3_4'],
		achievementsKey: 'r_a3',
		achievementKeys: ['r_a3_1', 'r_a3_2']
	},
	{
		roleKey: 'r_role2',
		orgKey: 'r_org2',
		date: 'Oct 2024 — Jan 2025',
		bulletKeys: ['r_b2_1', 'r_b2_2', 'r_b2_3']
	},
	{
		roleKey: 'r_role4',
		orgKey: 'r_org4',
		date: '2021 — 2022',
		bulletKeys: ['r_b4_1', 'r_b4_2', 'r_b4_3']
	}
];

export const skillGroups: SkillGroup[] = [
	{ labelKey: 'r_sk_be', valueKey: 'r_sk_be_v' },
	{ labelKey: 'r_sk_be2', valueKey: 'r_sk_be2_v' },
	{ labelKey: 'r_sk_fe', valueKey: 'r_sk_fe_v' },
	{ labelKey: 'r_sk_infra', valueKey: 'r_sk_infra_v' }
];

export const languageSkills: LanguageSkill[] = [
	{ nameKey: 'r_lang1', levelKey: 'r_lang1_lv' },
	{ nameKey: 'r_lang2', levelKey: 'r_lang2_lv' },
	{ nameKey: 'r_lang3', levelKey: 'r_lang3_lv' }
];
