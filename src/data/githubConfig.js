import { FiBook, FiGitCommit, FiStar, FiUsers } from "react-icons/fi";

// ─── GitHub Profile Config ───────────────────────────────────────────────────────
// Update this to change the GitHub username used throughout the section.
export const GITHUB_USERNAME = "jejejullian";

// ─── Stat Cards Data ─────────────────────────────────────────────────────────────
// Edit values here whenever your stats change — no need to touch components.
export const GITHUB_STATS = [
  { id: "repos",     icon: FiBook,      label: "Repositories", value: "20+"  },
  { id: "commits",   icon: FiGitCommit, label: "Total Commits", value: "500+" },
  { id: "stars",     icon: FiStar,      label: "Stars Earned",  value: "10+"  },
  { id: "followers", icon: FiUsers,     label: "Followers",     value: "15+"  },
];
