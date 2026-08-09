'use client'

import { useRef, useState } from "react";
import HeatmapTooltip from "@/components/ui/HeatmapTooltip";
import { WEEKS, DAY_LABELS, getColor, getMonthPositions } from "@/utils/heatmap";

export default function ContributionHeatmap({ data, loading }) {
  const [tooltip, setTooltip] = useState({ visible: false, count: 0, x: 0, y: 0 });
  const scrollRef = useRef(null);

  // Actual number of weeks in the dataset (may differ slightly from constant)
  const weekCount = data ? data.length : WEEKS;

  // Dynamic month labels — always match the real date window
  const monthPositions = getMonthPositions(weekCount);

  // Cell size: smaller on mobile to reduce horizontal overflow
  const CELL = 11;
  const GAP = 3;

  //  Skeleton while loading
  if (loading || !data) {
    return (
      <div className="w-full overflow-x-auto pb-2 heatmap-scroll">
        <div style={{ minWidth: 580 }}>
          <div className="flex gap-1 mt-6 pl-8">
            {Array.from({ length: WEEKS }).map((_, wi) => (
              <div key={wi} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, di) => (
                  <div
                    key={di}
                    className="rounded-xs animate-pulse"
                    style={{
                      width: CELL,
                      height: CELL,
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

  // Total grid width (used for month label offset calculation)
  const gridWidth = weekCount * (CELL + GAP);

  //  Real heatmap grid ─
  return (
    <div className="w-full overflow-x-auto pb-2 heatmap-scroll" ref={scrollRef}>
      <HeatmapTooltip {...tooltip} />

      <div style={{ minWidth: 580 }}>
        {/*  Month Labels  */}
        <div className="relative mb-1.5" style={{ marginLeft: 28, height: 16 }}>
          {monthPositions.map(({ label, week }) => (
            <span
              key={label}
              className="absolute text-[10px]"
              style={{
                left: (week / weekCount) * gridWidth,
                color: "var(--color-muted)",
                fontVariantNumeric: "tabular-nums",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="flex gap-1">
          {/*  Day-of-week Labels  */}
          <div className="flex flex-col mr-1 pt-0.5" style={{ gap: GAP }}>
            {DAY_LABELS.map((day, i) => (
              <div
                key={day}
                className="text-[9px] leading-none flex items-center"
                style={{
                  height: CELL,
                  width: 22,
                  color: i % 2 === 0 ? "var(--color-muted)" : "transparent",
                  userSelect: "none",
                }}
              >
                {day}
              </div>
            ))}
          </div>

          {/*  Cell Grid  */}
          <div className="flex" style={{ gap: GAP }}>
            {data.map((week, wi) => (
              <div key={wi} className="flex flex-col" style={{ gap: GAP }}>
                {week.map((count, di) => {
                  const { bg, border } = getColor(count);
                  return (
                    <div
                      key={di}
                      className="rounded-xs cursor-pointer transition-transform duration-100 hover:scale-125"
                      style={{
                        width: CELL,
                        height: CELL,
                        backgroundColor: bg,
                        border: `1px solid ${border}`,
                      }}
                      onMouseEnter={(e) => setTooltip({ visible: true, count, x: e.clientX, y: e.clientY })}
                      onMouseMove={(e) => setTooltip((t) => ({ ...t, x: e.clientX, y: e.clientY }))}
                      onMouseLeave={() => setTooltip((t) => ({ ...t, visible: false }))}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/*  Legend  */}
        <div className="flex items-center gap-2 mt-3" style={{ marginLeft: 28 }}>
          <span className="text-[10px]" style={{ color: "var(--color-muted)" }}>
            Less
          </span>
          {[0, 2, 4, 6, 10].map((c) => {
            const { bg } = getColor(c);
            return <div key={c} className="rounded-xs" style={{ width: CELL, height: CELL, backgroundColor: bg }} />;
          })}
          <span className="text-[10px]" style={{ color: "var(--color-muted)" }}>
            More
          </span>
        </div>
      </div>
    </div>
  );
}
