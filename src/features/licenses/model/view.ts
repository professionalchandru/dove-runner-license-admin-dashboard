import type {
  License,
  LicenseStats,
  PaginationItem,
  TableFilters,
  TableView,
} from "./types";
import { compareLicenseRows } from "../utils/compare";

export const PAGE_SIZE = 10;

export function summarizeLicenses(licenses: License[]): LicenseStats {
  return {
    total: licenses.length,
    active: licenses.filter((license) => license.status === "Active").length,
    expiring: licenses.filter((license) => license.status === "Expiring Soon")
      .length,
    suspended: licenses.filter((license) => license.status === "Suspended")
      .length,
    expired: licenses.filter((license) => license.status === "Expired").length,
  };
}

export function selectTableView(
  licenses: License[],
  filters: TableFilters,
): TableView {
  const query = filters.query.trim().toLowerCase();

  const filtered = licenses.filter((license) => {
    const matchesQuery =
      query.length === 0 ||
      license.customerName.toLowerCase().includes(query);
    const matchesStatus =
      filters.status === "all" || license.status === filters.status;
    const matchesPlan = filters.plan === "all" || license.plan === filters.plan;
    return matchesQuery && matchesStatus && matchesPlan;
  });

  const sorted = [...filtered].sort((left, right) => {
    const result = compareLicenseRows(left, right, filters.sortKey);
    return filters.sortDirection === "asc" ? result : -result;
  });

  const pageCount = Math.max(1, Math.ceil(sorted.length / filters.pageSize));
  const page = Math.min(Math.max(filters.page, 1), pageCount);
  const start = (page - 1) * filters.pageSize;
  const rows = sorted.slice(start, start + filters.pageSize);

  return {
    rows,
    total: sorted.length,
    page,
    pageCount,
    rangeStart: sorted.length === 0 ? 0 : start + 1,
    rangeEnd: start + rows.length,
  };
}

export function paginationItems(
  page: number,
  pageCount: number,
): PaginationItem[] {
  if (pageCount <= 0) {
    return [];
  }
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  const start = Math.max(2, page - 1);
  const end = Math.min(pageCount - 1, page + 1);
  const items: PaginationItem[] = [1];

  if (start > 2) {
    items.push("gap");
  }

  for (let value = start; value <= end; value += 1) {
    items.push(value);
  }

  if (end < pageCount - 1) {
    items.push("gap");
  }

  items.push(pageCount);
  return items;
}
