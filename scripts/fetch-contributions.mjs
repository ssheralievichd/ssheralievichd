import { writeFile } from 'node:fs/promises';

const USER = 'ssheralievichd';
const OUT = 'static/contributions.json';
const TOKEN = process.env.GH_CONTRIBUTIONS_TOKEN;

const QUERY = `
  query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks { contributionDays { date contributionCount } }
        }
      }
    }
  }
`;

const skip = (reason) => {
	console.warn(`[contributions] skipped: ${reason}`);
	process.exit(0);
};

if (!TOKEN) skip('GH_CONTRIBUTIONS_TOKEN not set');

const response = await fetch('https://api.github.com/graphql', {
	method: 'POST',
	headers: { Authorization: `bearer ${TOKEN}`, 'Content-Type': 'application/json' },
	body: JSON.stringify({ query: QUERY, variables: { login: USER } })
});

if (!response.ok) skip(`GraphQL responded ${response.status}`);

const payload = await response.json();
if (payload.errors) skip(payload.errors.map((e) => e.message).join('; '));

const calendar = payload.data?.user?.contributionsCollection?.contributionCalendar;
if (!calendar) skip('no contribution calendar in response');

const days = calendar.weeks
	.flatMap((week) => week.contributionDays)
	.map(({ date, contributionCount }) => ({ date, count: contributionCount }));

await writeFile(OUT, JSON.stringify({ total: calendar.totalContributions, days }));
console.log(`[contributions] wrote ${days.length} days, ${calendar.totalContributions} total`);
