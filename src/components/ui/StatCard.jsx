import ScrollReveal from "./ScrollReveal";

/**
 * StatCard — Displays a single GitHub metric (repos, commits, etc.)
 *
 * @param {React.ElementType} icon    - React icon component
 * @param {string}            label   - Metric label
 * @param {number|string}     value   - Live value from API (or fallback)
 * @param {boolean}           loading - Whether data is still being fetched
 * @param {number}            delay   - ScrollReveal delay in ms
 */
export default function StatCard({ icon: Icon, label, value, loading, delay }) {
  return (
    <ScrollReveal delay={delay} direction="up">
      <div
        className="flex flex-row items-center gap-4 p-5 md:p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        style={{
          backgroundColor: "var(--color-dark)",
          borderColor:     "var(--color-border-dark)",
          boxShadow:       "0 4px 24px -6px rgba(0,0,0,0.4)",
        }}
      >
        {/* Icon badge */}
        <div
          className="shrink-0 p-2.5 rounded-xl"
          style={{ backgroundColor: "var(--color-surface-dim)" }}
        >
          <Icon
            className="w-5 h-5 transition-colors duration-300"
            style={{ color: "var(--color-muted-light)" }}
          />
        </div>

        {/* Metric */}
        <div className="min-w-0">
          {loading ? (
            /* Skeleton shimmer while loading */
            <div
              className="h-7 w-14 rounded-md mb-1 animate-pulse"
              style={{ backgroundColor: "var(--color-surface-hover)" }}
            />
          ) : (
            <p
              className="text-xl md:text-2xl font-bold leading-none mb-1 truncate"
              style={{ color: "var(--color-light)" }}
            >
              {value ?? "—"}
            </p>
          )}
          <p className="text-xs md:text-sm truncate" style={{ color: "var(--color-muted)" }}>
            {label}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
