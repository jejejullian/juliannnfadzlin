import { SiGithub } from "react-icons/si";
import { FiBook, FiGitCommit, FiStar, FiUsers } from "react-icons/fi";

import ScrollReveal from "../ui/ScrollReveal";
import StatCard from "../ui/StatCard";
import ContributionHeatmap from "../ui/ContributionHeatmap";

import { GITHUB_USERNAME, STAT_CARD_DEFINITIONS } from "../../data/githubConfig";
import { useGithubData } from "../../hooks/useGithubData";

// Icon map — keeps config file free of React imports
const ICON_MAP = {
  repos:              FiBook,
  totalContributions: FiGitCommit,
  stars:              FiStar,
  followers:          FiUsers,
};

/**
 * GithubActivity — Displays real GitHub stats + contribution heatmap.
 * Data is fetched from /api/github (Vercel serverless proxy) on mount.
 * Falls back to simulated data when the API is unavailable (local dev).
 *
 * To update username or stat labels → src/data/githubConfig.js
 */
export default function GithubActivity() {
  const { data, loading } = useGithubData();

  return (
    <section
      id="github"
      className="mt-16 md:mt-20 lg:mt-24 scroll-mt-24 px-5 md:px-page"
    >
      <div className="max-w-[1440px] mx-auto">

        {/* ── Section Heading ── */}
        <div className="mb-10 md:mb-16">
          <ScrollReveal>
            <p className="text-sm md:text-base text-neutral-500 uppercase tracking-widest mb-2 md:mb-3">
              Open Source
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="text-3xl md:text-5xl lg:text-[72px] font-bold uppercase leading-none">
              GitHub Activity
            </h2>
          </ScrollReveal>
        </div>

        {/* ── Stat Cards ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12">
          {STAT_CARD_DEFINITIONS.map((def, i) => (
            <StatCard
              key={def.id}
              icon={ICON_MAP[def.key]}
              label={def.label}
              value={data ? data[def.key] : null}
              loading={loading}
              delay={i * 80}
            />
          ))}
        </div>

        {/* ── Heatmap Card ── */}
        <ScrollReveal delay={200} direction="up">
          <div
            className="rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10"
            style={{
              backgroundColor: "var(--color-dark)",
              border:          "1px solid var(--color-border-faint)",
              boxShadow:       "0 25px 60px -15px rgba(0,0,0,0.5)",
            }}
          >
            {/* Card Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <SiGithub className="w-6 h-6" style={{ color: "var(--color-light)" }} />
                <div>
                  <p className="font-semibold text-sm md:text-base" style={{ color: "var(--color-light)" }}>
                    @{GITHUB_USERNAME}
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                    Contribution activity · Last 12 months
                    {!loading && data?.totalContributions != null && (
                      <span className="ml-2 font-medium" style={{ color: "var(--color-muted-light)" }}>
                        ({data.totalContributions.toLocaleString()} total)
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 hover:gap-3"
                style={{
                  border:          "1px solid var(--color-border-dark)",
                  color:           "var(--color-muted-light)",
                  backgroundColor: "var(--color-surface-dim)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-surface-hover)";
                  e.currentTarget.style.borderColor     = "rgba(237,237,237,0.30)";
                  e.currentTarget.style.color           = "var(--color-light)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-surface-dim)";
                  e.currentTarget.style.borderColor     = "var(--color-border-dark)";
                  e.currentTarget.style.color           = "var(--color-muted-light)";
                }}
              >
                <SiGithub className="w-3.5 h-3.5" />
                View Profile
              </a>
            </div>

            {/* Heatmap Grid */}
            <ContributionHeatmap
              data={data?.heatmap ?? null}
              loading={loading}
            />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
