import { base } from '$app/paths';

export type Cell = { date: string; count: number; level: number };
export type Contributions = {
	total: number;
	activeDays: number;
	leading: number;
	cells: Cell[];
};

type Day = { date: string; count: number };
type Calendar = { total: number; days: Day[] };

const quartilesOf = (counts: number[]): number[] => {
	const active = counts.filter((count) => count > 0).sort((a, b) => a - b);
	if (!active.length) return [1, 2, 3];
	const at = (fraction: number) => active[Math.min(active.length - 1, Math.floor(active.length * fraction))];
	return [at(0.25), at(0.5), at(0.75)];
};

const levelOf = (count: number, [q1, q2, q3]: number[]): number => {
	if (count === 0) return 0;
	if (count <= q1) return 1;
	if (count <= q2) return 2;
	if (count <= q3) return 3;
	return 4;
};

export const fetchContributions = async (): Promise<Contributions> => {
	const response = await fetch(`${base}/contributions.json`);
	if (!response.ok) throw new Error(`contributions.json responded ${response.status}`);

	const calendar: Calendar = await response.json();
	if (!Array.isArray(calendar.days) || !calendar.days.length) throw new Error('empty calendar');

	const quartiles = quartilesOf(calendar.days.map((day) => day.count));
	const cells = calendar.days.map(({ date, count }) => ({
		date,
		count,
		level: levelOf(count, quartiles)
	}));

	return {
		total: calendar.total,
		activeDays: calendar.days.filter((day) => day.count > 0).length,
		leading: new Date(`${cells[0].date}T00:00:00Z`).getUTCDay(),
		cells
	};
};
