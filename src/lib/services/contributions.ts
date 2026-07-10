const API = 'https://api.github.com';
const WINDOW_DAYS = 91;
const PAGES = [1, 2, 3];

export type Cell = { date: string; count: number; level: number };
export type Contributions = { total: number; leading: number; cells: Cell[] };

type Event = { created_at?: string; type?: string; payload?: { commits?: unknown[] } };

const dayKey = (date: Date): string => date.toISOString().slice(0, 10);

const levelOf = (count: number): number => {
	if (count === 0) return 0;
	if (count <= 1) return 1;
	if (count <= 3) return 2;
	if (count <= 6) return 3;
	return 4;
};

const weightOf = (event: Event): number =>
	event.type === 'PushEvent' && Array.isArray(event.payload?.commits)
		? Math.max(1, event.payload.commits.length)
		: 1;

const fetchPage = async (user: string, page: number): Promise<Event[]> => {
	try {
		const response = await fetch(`${API}/users/${user}/events/public?per_page=100&page=${page}`);
		if (!response.ok) return [];
		const payload = await response.json();
		return Array.isArray(payload) ? payload : [];
	} catch {
		return [];
	}
};

export const fetchContributions = async (user: string): Promise<Contributions> => {
	const pages = await Promise.all(PAGES.map((page) => fetchPage(user, page)));
	const events = pages.flat();
	if (!events.length) throw new Error('no public events');

	const today = new Date();
	today.setHours(0, 0, 0, 0);
	const start = new Date(today);
	start.setDate(today.getDate() - (WINDOW_DAYS - 1));

	const counts = new Map<string, number>();
	for (let offset = 0; offset < WINDOW_DAYS; offset++) {
		const day = new Date(start);
		day.setDate(start.getDate() + offset);
		counts.set(dayKey(day), 0);
	}

	for (const event of events) {
		if (!event?.created_at) continue;
		const key = event.created_at.slice(0, 10);
		if (counts.has(key)) counts.set(key, (counts.get(key) ?? 0) + weightOf(event));
	}

	const cells = [...counts].map(([date, count]) => ({ date, count, level: levelOf(count) }));
	const total = cells.reduce((sum, cell) => sum + cell.count, 0);

	return { total, leading: start.getDay(), cells };
};
