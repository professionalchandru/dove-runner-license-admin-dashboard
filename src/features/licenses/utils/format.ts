import type { LicenseStats } from "../model";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

export function formatIsoDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  if (!year || !month || !day) {
    return isoDate;
  }
  const monthIndex = Number(month) - 1;
  const monthLabel = MONTHS[monthIndex];
  if (!monthLabel) {
    return isoDate;
  }
  return `${monthLabel} ${Number(day)}, ${year}`;
}

export function formatStatValue(
  stats: LicenseStats | null,
  key: keyof LicenseStats,
): string {
  if (!stats) {
    return "—";
  }
  return String(stats[key]);
}

export function formatPaginationSummary(
  total: number,
  rangeStart: number,
  rangeEnd: number,
): string {
  if (total === 0) {
    return "Showing 0 licenses";
  }
  return `Showing ${rangeStart}–${rangeEnd} of ${total} licenses`;
}
