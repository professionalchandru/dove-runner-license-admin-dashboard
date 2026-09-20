import { useState } from "react";
import { PAGE_SIZE } from "../model";
import type {
  PlanFilter,
  SortDirection,
  SortKey,
  StatusFilter,
} from "../model";
import type { UseTableFiltersResult } from "./types";

export function useTableFilters(): UseTableFiltersResult {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [plan, setPlan] = useState<PlanFilter>("all");
  const [sortKey, setSortKey] = useState<SortKey>("customerName");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [page, setPage] = useState(1);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function updateSearch(next: string) {
    setSearch(next);
    setPage(1);
  }

  function updateStatus(next: StatusFilter) {
    setStatus(next);
    setPage(1);
  }

  function updatePlan(next: PlanFilter) {
    setPlan(next);
    setPage(1);
  }

  function toggleSort(nextKey: SortKey) {
    if (nextKey === sortKey) {
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(nextKey);
      setSortDirection("asc");
    }
    setPage(1);
  }

  return {
    search,
    status,
    plan,
    sortKey,
    sortDirection,
    page,
    pageSize: PAGE_SIZE,
    selectedId,
    setSearch: updateSearch,
    setStatus: updateStatus,
    setPlan: updatePlan,
    toggleSort,
    setPage,
    setSelectedId,
  };
}
