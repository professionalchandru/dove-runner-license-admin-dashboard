import { LICENSE_STATUSES, PLANS, SORT_KEYS } from "./constant";

export type Plan = (typeof PLANS)[number];
export type LicenseStatus = (typeof LICENSE_STATUSES)[number];
export type SortKey = (typeof SORT_KEYS)[number];
export type SortDirection = "asc" | "desc";

export type License = {
  id: string;
  customerName: string;
  plan: Plan;
  status: LicenseStatus;
  seatsUsed: number;
  seatsAllowed: number;
  renewalDate: string;
  ownerEmail: string;
  createdAt: string;
  notes: string;
};

export type LicensesResponse = {
  licenses: License[];
};

export type ApiErrorResponse = {
  error: string;
};

export type StatusFilter = LicenseStatus | "all";
export type PlanFilter = Plan | "all";

export type TableFilters = {
  query: string;
  status: StatusFilter;
  plan: PlanFilter;
  sortKey: SortKey;
  sortDirection: SortDirection;
  page: number;
  pageSize: number;
};

export type TableView = {
  rows: License[];
  total: number;
  page: number;
  pageCount: number;
  rangeStart: number;
  rangeEnd: number;
};

export type SeatsValidationResult =
  | { ok: true; seatsAllowed: number }
  | { ok: false; message: string };

export type PaginationItem = number | "gap";

export type UpdateSeatsInput = {
  id: string;
  seatsAllowed: number;
};

export type LicenseStats = {
  total: number;
  active: number;
  expiring: number;
  suspended: number;
  expired: number;
};
