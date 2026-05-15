import ScrollReveal from "./ScrollReveal";

/**
 * StatCard — Displays a single GitHub metric (repos, commits, etc.)
 * with a dark card style consistent with the site theme.
 *
 * @param {React.ElementType} icon  - React icon component
 * @param {string}            label - Metric label (e.g. "Repositories")
 * @param {string}            value - Display value (e.g. "20+")
 * @param {number}            delay - ScrollReveal animation delay in ms
 */
export default function StatCard({ icon: Icon, label, value, delay }) {
  return (
    <ScrollReveal delay={delay} direction="up">
      <div
        className="flex flex-col items-start gap-3 p-5 md:p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        style={{
          backgroundColor: "var(--color-dark)",
          borderColor:     "var(--color-border-dark)",
          boxShadow:       "0 4px 24px -6px rgba(0,0,0,0.4)",
        }}
      >
        {/* Icon badge */}
        <div
          className="p-2.5 rounded-xl"
          style={{ backgroundColor: "var(--color-surface-dim)" }}
        >
          <Icon
            className="w-5 h-5 transition-colors duration-300"
            style={{ color: "var(--color-muted-light)" }}
          />
        </div>

        {/* Metric */}
        <div>
          <p
            className="text-2xl md:text-3xl font-bold leading-none mb-1"
            style={{ color: "var(--color-light)" }}
          >
            {value}
          </p>
          <p className="text-xs md:text-sm" style={{ color: "var(--color-muted)" }}>
            {label}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
