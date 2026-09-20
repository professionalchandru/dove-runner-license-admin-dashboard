import type { LicenseStatCard } from "./types";

export const DEFAULT_TITLE = "License Usage";

export const DEFAULT_DESCRIPTION =
  "Internal admin for customer license records. Open a row to review the account and update seats allowed.";

export const LICENSE_STAT_CARDS: readonly LicenseStatCard[] = [
  { key: "total", label: "Licenses", detail: "Customer records" },
  { key: "active", label: "Active", detail: "Currently in use" },
  { key: "expiring", label: "Expiring soon", detail: "Renewals to watch" },
  { key: "suspended", label: "Suspended", detail: "Accounts on hold" },
  { key: "expired", label: "Expired", detail: "Past renewal" },
];
