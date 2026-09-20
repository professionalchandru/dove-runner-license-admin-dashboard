import {
  LicenseEmpty,
  LicenseError,
  LicenseLoading,
  LicensePagination,
  LicenseTable,
  LicenseToolbar,
} from "../table";
import type { LicenseContentReadyProps } from "./types";

export function LicenseContentReady({
  licenses,
  filters,
  view,
}: LicenseContentReadyProps) {
  return (
    <>
      <div className="border-b px-4 py-3">
        <LicenseToolbar
          search={filters.search}
          status={filters.status}
          plan={filters.plan}
          onSearchChange={filters.setSearch}
          onStatusChange={filters.setStatus}
          onPlanChange={filters.setPlan}
        />
      </div>
      {licenses.length === 0 ? (
        <LicenseEmpty kind="source" />
      ) : view.total === 0 ? (
        <LicenseEmpty kind="filters" />
      ) : (
        <LicenseTable
          rows={view.rows}
          selectedId={filters.selectedId}
          sortKey={filters.sortKey}
          sortDirection={filters.sortDirection}
          onSort={filters.toggleSort}
          onRowSelect={filters.setSelectedId}
        />
      )}
      <div className="border-t px-4 py-3">
        <LicensePagination
          page={view.page}
          pageCount={view.pageCount}
          total={view.total}
          rangeStart={view.rangeStart}
          rangeEnd={view.rangeEnd}
          onPageChange={filters.setPage}
        />
      </div>
    </>
  );
}
