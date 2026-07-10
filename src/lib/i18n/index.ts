import { en } from './en';
import { ru } from './ru';

export type Lang = 'en' | 'ru';
export type Dictionary = typeof en;
export type TranslationKey = keyof Dictionary;

export const dictionaries: Record<Lang, Dictionary> = {
	en,
	ru: ru satisfies Dictionary
};
