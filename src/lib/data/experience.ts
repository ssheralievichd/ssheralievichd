import type { TranslationKey } from '$lib/i18n';

export type Role = {
	roleKey: TranslationKey;
	orgKey: TranslationKey;
	dateKey: TranslationKey;
	active: boolean;
	bulletKeys: TranslationKey[];
};

export const roles: Role[] = [
	{
		roleKey: 'role_fullstack',
		orgKey: 'org_current',
		dateKey: 'period_current',
		active: true,
		bulletKeys: ['exp1_b1', 'exp1_b2', 'exp1_b3', 'exp1_b4']
	},
	{
		roleKey: 'role_alif',
		orgKey: 'org_alif',
		dateKey: 'period_alif',
		active: false,
		bulletKeys: ['exp3_b1', 'exp3_b2', 'exp3_b3', 'exp3_b4']
	},
	{
		roleKey: 'role_formika',
		orgKey: 'org_formika',
		dateKey: 'period_formika',
		active: false,
		bulletKeys: ['exp2_b1', 'exp2_b2', 'exp2_b3']
	},
	{
		roleKey: 'role_freelance',
		orgKey: 'org_freelance',
		dateKey: 'period_freelance',
		active: false,
		bulletKeys: ['exp4_b1', 'exp4_b2', 'exp4_b3']
	}
];
