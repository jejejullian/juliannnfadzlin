// GitHub Profile Config ───────────────────────────────────────────────────────
export const GITHUB_USERNAME = "jejejullian";

// Stat Card Definitions ───────────────────────────────────────────────────────
export const STAT_CARD_DEFINITIONS = [
  { id: "repos", key: "repos", label: "Repositories" },
  { id: "commits", key: "totalContributions", label: "Contributions (yr)" },
  { id: "stars", key: "stars", label: "Stars Earned" },
  { id: "followers", key: "followers", label: "Followers" },
];

// Fallback values (shown when /api/github is unreachable)
export const GITHUB_STATS_FALLBACK = {
  repos: 20,
  totalContributions: 500,
  stars: 10,
  followers: 15,
};
