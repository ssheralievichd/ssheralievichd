type CounterResponse = { count?: number };

export const fetchVisitors = async (url: string): Promise<number | null> => {
	try {
		const response = await fetch(url);
		if (!response.ok) return null;
		const payload: CounterResponse = await response.json();
		return typeof payload.count === 'number' ? payload.count : null;
	} catch {
		return null;
	}
};
