import { useRef, useState } from "react";
import HeatmapTooltip from "./HeatmapTooltip";
import { WEEKS, MONTH_LABELS, DAY_LABELS, getColor } from "../../utils/heatmap";

/**
 * ContributionHeatmap — GitHub-style contribution calendar grid.
 *
 * @param {number[][] | null} data    - 53×7 grid of counts (null = loading)
 * @param {boolean}           loading - Shows skeleton cells while fetching
 */
export default function ContributionHeatmap({ data, loading }) {
  const [tooltip, setTooltip] = useState({ visible: false, count: 0, x: 0, y: 0 });
  const scrollRef = useRef(null);

  const monthPositions = MONTH_LABELS.map((label, i) => ({
    label,
    week: Math.round((i * WEEKS) / 12),
  }));

  // ── Skeleton while loading ──────────────────────────────────────────────────
  if (loading || !data) {
    return (
      <div className="w-full overflow-x-auto pb-2 heatmap-scroll">
        <div style={{ minWidth: 680 }}>
          <div className="flex gap-[3px] mt-6">
            {Array.from({ length: WEEKS }).map((_, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {Array.from({ length: 7 }).map((_, di) => (
                  <div
                    key={di}
                    className="rounded-[2px] animate-pulse"
                    style={{
                      width:           12,
                      height:          12,
                      backgroundColor: "var(--color-surface-hover)",
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── Real heatmap grid ───────────────────────────────────────────────────────
  return (
    <div className="w-full overflow-x-auto pb-2 heatmap-scroll" ref={scrollRef}>
      <HeatmapTooltip {...tooltip} />

      <div style={{ minWidth: 680 }}>
        {/* Month Labels */}
        <div className="flex mb-1.5" style={{ paddingLeft: 32 }}>
          {monthPositions.map(({ label, week }) => (
            <div
              key={label}
              className="text-[10px] shrink-0"
              style={{
                width:              `${(week / WEEKS) * 100}%`,
                color:              "var(--color-muted)",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {label}
            </div>
          ))}
        </div>

        <div className="flex gap-1">
          {/* Day-of-week Labels */}
          <div className="flex flex-col gap-1 mr-1 pt-0.5">
            {DAY_LABELS.map((day, i) => (
              <div
                key={day}
                className="text-[9px] leading-none flex items-center"
                style={{
                  height:     12,
                  width:      24,
                  color:      i % 2 === 0 ? "var(--color-muted)" : "transparent",
                  userSelect: "none",
                }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Cell Grid */}
          <div className="flex gap-[3px]">
            {data.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((count, di) => {
                  const { bg, border } = getColor(count);
                  return (
                    <div
                      key={di}
                      className="rounded-[2px] cursor-pointer transition-transform duration-100 hover:scale-125"
                      style={{ width: 12, height: 12, backgroundColor: bg, border: `1px solid ${border}` }}
                      onMouseEnter={(e) =>
                        setTooltip({ visible: true, count, x: e.clientX, y: e.clientY })
                      }
                      onMouseMove={(e) =>
                        setTooltip((t) => ({ ...t, x: e.clientX, y: e.clientY }))
                      }
                      onMouseLeave={() =>
                        setTooltip((t) => ({ ...t, visible: false }))
                      }
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 mt-3" style={{ paddingLeft: 32 }}>
          <span className="text-[10px]" style={{ color: "var(--color-muted)" }}>Less</span>
          {[0, 2, 4, 6, 10].map((c) => {
            const { bg } = getColor(c);
            return (
              <div key={c} className="rounded-[2px]"
                style={{ width: 12, height: 12, backgroundColor: bg }}
              />
            );
          })}
          <span className="text-[10px]" style={{ color: "var(--color-muted)" }}>More</span>
        </div>
      </div>
    </div>
  );
}
