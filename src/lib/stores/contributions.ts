import { fetchContributions, type Contributions } from '$lib/services/contributions';

export type { Contributions };

let pending: Promise<Contributions> | null = null;

export const loadContributions = (): Promise<Contributions> => {
	pending ??= fetchContributions();
	return pending;
};
