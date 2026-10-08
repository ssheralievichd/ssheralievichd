import type { TranslationKey } from '$lib/i18n';

export type ResumeRole = {
	roleKey: TranslationKey;
	orgKey: TranslationKey;
	dateKey: TranslationKey;
	bulletKeys: TranslationKey[];
};

export type SkillGroup = { labelKey: TranslationKey; valueKey: TranslationKey };
export type LanguageSkill = { nameKey: TranslationKey; levelKey: TranslationKey };

export const resumeRoles: ResumeRole[] = [
	{
		roleKey: 'role_teamlead',
		orgKey: 'r_org1',
		dateKey: 'period_teamlead',
		bulletKeys: ['exp0_b1', 'exp0_b2', 'exp0_b3', 'exp0_b4']
	},
	{
		roleKey: 'r_role1',
		orgKey: 'r_org1',
		dateKey: 'period_current',
		bulletKeys: ['exp1_b1', 'exp1_b2', 'exp1_b3', 'exp1_b4', 'exp1_b5', 'r_b1_3']
	},
	{
		roleKey: 'r_role2',
		orgKey: 'r_org2',
		dateKey: 'period_formika',
		bulletKeys: ['r_b2_1']
	},
	{
		roleKey: 'r_role3',
		orgKey: 'r_org3',
		dateKey: 'period_alif',
		bulletKeys: ['r_b3_1', 'r_b3_2', 'r_b3_3', 'r_b3_4']
	},
	{
		roleKey: 'r_role4',
		orgKey: 'r_org4',
		dateKey: 'period_freelance',
		bulletKeys: ['r_b4_1']
	}
];

export const skillGroups: SkillGroup[] = [
	{ labelKey: 'r_sk_be', valueKey: 'r_sk_be_v' },
	{ labelKey: 'r_sk_be2', valueKey: 'r_sk_be2_v' },
	{ labelKey: 'r_sk_fe', valueKey: 'r_sk_fe_v' },
	{ labelKey: 'r_sk_infra', valueKey: 'r_sk_infra_v' },
	{ labelKey: 'r_sk_ai', valueKey: 'r_sk_ai_v' }
];

export const languageSkills: LanguageSkill[] = [
	{ nameKey: 'r_lang1', levelKey: 'r_lang1_lv' },
	{ nameKey: 'r_lang2', levelKey: 'r_lang2_lv' },
	{ nameKey: 'r_lang3', levelKey: 'r_lang3_lv' }
];
