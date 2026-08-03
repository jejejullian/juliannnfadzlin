// ─── Heatmap Constants ──────────────────────────────────────────────────────────
export const WEEKS = 53;
export const DAYS  = 7;

export const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// ─── Month Position Calculator ───────────────────────────────────────────────────
/**
 * Returns an array of { label, week } for each month boundary in the heatmap.
 * Calculated dynamically from today's date so the labels always match the real data.
 *
 * @param {number} totalWeeks - Number of columns in the heatmap (default: WEEKS)
 * @returns {{ label: string, week: number }[]}
 */
export function getMonthPositions(totalWeeks = WEEKS) {
  // The heatmap window starts 1 year ago, aligned to the previous Sunday
  const startDate = new Date();
  startDate.setFullYear(startDate.getFullYear() - 1);
  startDate.setDate(startDate.getDate() - startDate.getDay()); // rewind to Sunday

  const positions = [];
  let lastMonth = -1;

  for (let w = 0; w < totalWeeks; w++) {
    const weekStart = new Date(startDate);
    weekStart.setDate(startDate.getDate() + w * 7);
    const month = weekStart.getMonth();

    if (month !== lastMonth) {
      // Skip week 0 to avoid the first label being clipped at the left edge
      if (w > 0) {
        positions.push({ label: MONTH_LABELS[month], week: w });
      }
      lastMonth = month;
    }
  }

  return positions;
}

// ─── Data Generator (fallback for local dev without token) ───────────────────────
/**
 * Build a WEEKS×DAYS grid of simulated contribution counts.
 * Weekdays are busier; occasional random bursts simulate active periods.
 */
export function buildHeatmapData() {
  const grid = [];
  for (let w = 0; w < WEEKS; w++) {
    const week = [];
    for (let d = 0; d < DAYS; d++) {
      const isWeekend = d === 0 || d === 6;
      const base      = isWeekend ? 0 : Math.random();
      const burst     = Math.random() > 0.85 ? Math.random() * 8 : 0;
      const count     = Math.floor(base * 5 + burst);
      week.push(count);
    }
    grid.push(week);
  }
  return grid;
}

// ─── Color Mapping ───────────────────────────────────────────────────────────────
/**
 * Map a contribution count to a CSS background + border colour pair.
 *
 * @param {number} count
 * @returns {{ bg: string, border: string }}
 */
export function getColor(count) {
  if (count === 0) return { bg: "var(--color-surface-dim)",  border: "transparent"             };
  if (count <= 2)  return { bg: "rgba(100,180,100,0.30)",    border: "rgba(100,180,100,0.15)"  };
  if (count <= 5)  return { bg: "rgba(72,160,72,0.55)",      border: "rgba(72,160,72,0.25)"    };
  if (count <= 8)  return { bg: "rgba(40,140,40,0.80)",      border: "rgba(40,140,40,0.35)"    };
  return               { bg: "rgba(22,110,22,1.00)",         border: "rgba(22,110,22,0.50)"    };
}
