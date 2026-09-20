import { MAX_SEATS_ALLOWED } from "../model";

export function nextWholeNumber(
  current: string,
  delta: number,
  fallback: number,
): string {
  const parsed = Number.parseInt(current, 10);
  const base = Number.isNaN(parsed) ? fallback : parsed;
  return String(Math.min(MAX_SEATS_ALLOWED, Math.max(0, base + delta)));
}

export function isBlockedSeatsKey(key: string): boolean {
  return (
    key === "e" ||
    key === "E" ||
    key === "+" ||
    key === "-" ||
    key === "."
  );
}

export function seatUsageTone(percent: number): string {
  if (percent >= 100) {
    return "bg-red-500";
  }
  if (percent >= 80) {
    return "bg-amber-500";
  }
  return "bg-emerald-600";
}
