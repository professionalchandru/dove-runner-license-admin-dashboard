"use client";

import { selectTableView, summarizeLicenses } from "../model";
import { useDebouncedValue } from "./use-debounced-value";
import { useIsClient } from "./use-is-client";
import { useLicenses, useUpdateSeats } from "./use-licenses-api";
import { useTableFilters } from "./use-table-filters";
import type { UseLicensesPageResult } from "./types";

export function useLicensesPage(fail = false): UseLicensesPageResult {
  const isClient = useIsClient();
  const licensesQuery = useLicenses(fail, isClient);
  const filters = useTableFilters();
  const updateSeats = useUpdateSeats();
  const debouncedSearch = useDebouncedValue(filters.search, 300);
  const showLoading = !isClient || licensesQuery.isPending;
  const selectedLicense =
    licensesQuery.data?.find((license) => license.id === filters.selectedId) ??
    null;

  const view = licensesQuery.data
    ? selectTableView(licensesQuery.data, {
        query: debouncedSearch,
        status: filters.status,
        plan: filters.plan,
        sortKey: filters.sortKey,
        sortDirection: filters.sortDirection,
        page: filters.page,
        pageSize: filters.pageSize,
      })
    : null;

  const stats = licensesQuery.data
    ? summarizeLicenses(licensesQuery.data)
    : null;

  function closePanel() {
    filters.setSelectedId(null);
    updateSeats.reset();
  }

  async function saveSeats(seatsAllowed: number) {
    if (!selectedLicense) {
      return;
    }
    await updateSeats.mutateAsync({
      id: selectedLicense.id,
      seatsAllowed,
    });
    closePanel();
  }

  return {
    licensesQuery,
    filters,
    updateSeats,
    showLoading,
    selectedLicense,
    view,
    stats,
    closePanel,
    saveSeats,
  };
}
