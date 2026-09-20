import type { LicenseStatus } from "../model";
import type { MockDateParts } from "./types";

/** Fixed "today" so status and renewalDate stay consistent in mock data. */
export const MOCK_TODAY: MockDateParts = { year: 2026, month: 9, day: 20 };

export function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

export function emailFor(name: string, index: number): string {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ".")
    .replace(/^\.+|\.+$/g, "");
  return `owner.${pad(index + 1)}@${slug}.example`;
}

export function formatDate(year: number, month: number, day: number): string {
  return `${year}-${pad(month)}-${pad(day)}`;
}

export function addDays(base: MockDateParts, delta: number): string {
  const date = new Date(Date.UTC(base.year, base.month - 1, base.day + delta));
  return formatDate(
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate(),
  );
}

/**
 * Renewal dates are derived from status relative to MOCK_TODAY:
 * - Expired: 30–180 days in the past
 * - Expiring Soon: 1–30 days ahead
 * - Active: 60–365 days ahead
 * - Suspended: 45–200 days ahead (on hold, not past renewal)
 */
export function renewalDateFor(status: LicenseStatus, index: number): string {
  switch (status) {
    case "Expired":
      return addDays(MOCK_TODAY, -(30 + (index % 151)));
    case "Expiring Soon":
      return addDays(MOCK_TODAY, 1 + (index % 30));
    case "Active":
      return addDays(MOCK_TODAY, 60 + (index % 306));
    case "Suspended":
      return addDays(MOCK_TODAY, 45 + (index % 156));
  }
}
