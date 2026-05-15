/**
 * Vercel Serverless Function — GitHub GraphQL Proxy
 * -------------------------------------------------
 * Keeps the GITHUB_TOKEN server-side (never exposed to the browser).
 * Frontend calls: GET /api/github
 *
 * Required env var (set in Vercel Dashboard → Settings → Environment Variables):
 *   GITHUB_TOKEN=ghp_xxxxxxxxxxxx
 *   (Scopes needed: read:user, repo → public_repo)
 */

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

export default async function handler(req, res) {
  // CORS — allow the portfolio origin in production
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate"); // cache 1h

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return res.status(500).json({ error: "GITHUB_TOKEN environment variable is not set." });
  }

  // Build a 1-year window
  const to   = new Date();
  const from = new Date();
  from.setFullYear(from.getFullYear() - 1);

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method:  "POST",
      headers: {
        Authorization:  `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent":   "juliannn-portfolio",
      },
      body: JSON.stringify({
        query:     GRAPHQL_QUERY,
        variables: {
          username: GITHUB_USERNAME,
          from:     from.toISOString(),
          to:       to.toISOString(),
        },
      }),
    });

    const json = await response.json();

    if (json.errors) {
      console.error("GitHub GraphQL errors:", json.errors);
      return res.status(400).json({ error: json.errors[0].message });
    }

    const { user } = json.data;
    const calendar  = user.contributionsCollection.contributionCalendar;
    const repos     = user.repositories;
    const followers = user.followers;

    // Sum stars across all public repos
    const totalStars = repos.nodes.reduce((sum, r) => sum + r.stargazerCount, 0);

    // Normalise weeks to a number[][] — pad incomplete first/last week to 7 days
    const heatmap = calendar.weeks.map((week) => {
      const counts = week.contributionDays.map((d) => d.contributionCount);
      // Pad to 7 slots with 0 if the week is partial
      while (counts.length < 7) counts.push(0);
      return counts;
    });

    return res.status(200).json({
      heatmap,
      totalContributions: calendar.totalContributions,
      repos:     repos.totalCount,
      stars:     totalStars,
      followers: followers.totalCount,
    });
  } catch (err) {
    console.error("GitHub proxy error:", err);
    return res.status(500).json({ error: "Failed to fetch GitHub data." });
  }
}
