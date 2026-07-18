/** Light → dark/saturated red. count 0 returns null (caller uses white). */
export function heatFill(count: number, maxCount: number): string | null {
  if (count <= 0 || maxCount <= 0) return null;
  const t = Math.min(1, Math.max(0, count / maxCount));
  // soft rose #fecaca → deep red #991b1b
  const r = Math.round(254 + (153 - 254) * t);
  const g = Math.round(202 + (27 - 202) * t);
  const b = Math.round(202 + (27 - 202) * t);
  return `rgb(${r},${g},${b})`;
}

export const FLAT_FILL = "#ffffff";
export const SELECTED_FILL = "#0f172a";
