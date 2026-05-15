/**
 * HeatmapTooltip — Fixed-position tooltip that follows the cursor
 * when hovering over a heatmap cell.
 *
 * @param {number}  count   - Contribution count for the hovered cell
 * @param {boolean} visible - Whether the tooltip is shown
 * @param {number}  x       - Cursor clientX position
 * @param {number}  y       - Cursor clientY position
 */
export default function HeatmapTooltip({ count, visible, x, y }) {
  if (!visible) return null;

  const label =
    count === 0
      ? "No contributions"
      : `${count} contribution${count > 1 ? "s" : ""}`;

  return (
    <div
      className="fixed z-50 px-3 py-1.5 rounded-lg text-xs font-medium pointer-events-none"
      style={{
        left:            x + 12,
        top:             y - 36,
        backgroundColor: "var(--color-dark)",
        color:           "var(--color-light)",
        border:          "1px solid rgba(237,237,237,0.12)",
        boxShadow:       "0 4px 16px rgba(0,0,0,0.4)",
      }}
    >
      {label}
    </div>
  );
}
