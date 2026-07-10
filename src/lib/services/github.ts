const API = 'https://api.github.com';

export type GitHubStats = {
	repos: number;
	stars: number | null;
};

type UserResponse = { public_repos?: number };
type RepoResponse = { stargazers_count?: number };

const json = async <T>(url: string): Promise<T> => {
	const response = await fetch(url);
	if (!response.ok) throw new Error(`${url} responded ${response.status}`);
	return response.json() as Promise<T>;
};

const fetchStars = async (user: string): Promise<number> => {
	const repos = await json<RepoResponse[]>(
		`${API}/users/${user}/repos?per_page=100&type=owner&sort=updated`
	);
	if (!Array.isArray(repos)) throw new Error('unexpected repos payload');
	return repos.reduce((total, repo) => total + (repo.stargazers_count ?? 0), 0);
};

export const fetchStats = async (user: string): Promise<GitHubStats> => {
	const profile = await json<UserResponse>(`${API}/users/${user}`);
	const base: GitHubStats = { repos: profile.public_repos ?? 0, stars: null };

	try {
		return { ...base, stars: await fetchStars(user) };
	} catch {
		return base;
	}
};
