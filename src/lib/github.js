import { GITHUB_STATS_FALLBACK } from "@/data/githubConfig";

const GITHUB_USERNAME = "jejejullian";

const GRAPHQL_QUERY = `
  query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      followers      { totalCount }
      repositories(first: 100, ownerAffiliations: OWNER, privacy: PUBLIC) {
        totalCount
        nodes { stargazerCount }
      }
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

export async function getGithubData() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.warn("[getGithubData] GITHUB_TOKEN not set, using fallback data.");
    return {
      heatmap: [],
      totalContributions: null,
      repos: GITHUB_STATS_FALLBACK.repos,
      stars: GITHUB_STATS_FALLBACK.stars,
      followers: GITHUB_STATS_FALLBACK.followers,
    };
  }

  const to = new Date();
  const from = new Date();
  from.setFullYear(from.getFullYear() - 1);

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "juliannn-portfolio",
      },
      body: JSON.stringify({
        query: GRAPHQL_QUERY,
        variables: {
          username: GITHUB_USERNAME,
          from: from.toISOString(),
          to: to.toISOString(),
        },
      }),
      next: { revalidate: 3600 },
    });

    const json = await response.json();

    if (json.errors) {
      throw new Error(json.errors[0].message);
    }

    const { user } = json.data;
    const calendar = user.contributionsCollection.contributionCalendar;
    const repos = user.repositories;
    const followers = user.followers;

    const totalStars = repos.nodes.reduce((sum, r) => sum + r.stargazerCount, 0);

    const heatmap = calendar.weeks.map((week) => {
      const counts = week.contributionDays.map((d) => d.contributionCount);
      while (counts.length < 7) counts.push(0);
      return counts;
    });

    return {
      heatmap,
      totalContributions: calendar.totalContributions,
      repos: repos.totalCount,
      stars: totalStars,
      followers: followers.totalCount,
    };
  } catch (err) {
    console.warn("[getGithubData] Fetch failed, using fallback:", err.message);
    return {
      heatmap: [],
      totalContributions: null,
      repos: GITHUB_STATS_FALLBACK.repos,
      stars: GITHUB_STATS_FALLBACK.stars,
      followers: GITHUB_STATS_FALLBACK.followers,
    };
  }
}