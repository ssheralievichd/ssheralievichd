const API = 'https://api.github.com';

export type GitHubStats = {
	repos: number;
	followers: number;
	stars: number | null;
	forks: number | null;
};

type UserResponse = { public_repos?: number; followers?: number };
type RepoResponse = { stargazers_count?: number; forks_count?: number };

const json = async <T>(url: string): Promise<T> => {
	const response = await fetch(url);
	if (!response.ok) throw new Error(`${url} responded ${response.status}`);
	return response.json() as Promise<T>;
};

const fetchTotals = async (user: string) => {
	const repos = await json<RepoResponse[]>(
		`${API}/users/${user}/repos?per_page=100&type=owner&sort=updated`
	);
	if (!Array.isArray(repos)) throw new Error('unexpected repos payload');
	return repos.reduce(
		(totals, repo) => ({
			stars: totals.stars + (repo.stargazers_count ?? 0),
			forks: totals.forks + (repo.forks_count ?? 0)
		}),
		{ stars: 0, forks: 0 }
	);
};

export const fetchStats = async (user: string): Promise<GitHubStats> => {
	const profile = await json<UserResponse>(`${API}/users/${user}`);
	const base: GitHubStats = {
		repos: profile.public_repos ?? 0,
		followers: profile.followers ?? 0,
		stars: null,
		forks: null
	};

	try {
		return { ...base, ...(await fetchTotals(user)) };
	} catch {
		return base;
	}
};
