export const PLANS = ["Trial", "Standard", "Enterprise"] as const;

export const LICENSE_STATUSES = [
  "Active",
  "Expiring Soon",
  "Expired",
  "Suspended",
] as const;

export const SORT_KEYS = [
  "customerName",
  "plan",
  "status",
  "seats",
  "renewalDate",
] as const;

export const PAGE_SIZE = 10;

export const MAX_SEATS_ALLOWED = 9999;
