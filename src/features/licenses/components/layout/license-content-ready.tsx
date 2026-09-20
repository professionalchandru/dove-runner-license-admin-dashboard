import { LicensePagination, LicenseTable, LicenseToolbar } from "../table";
import type { LicenseContentReadyProps } from "./types";

export function LicenseContentReady({
  licenses,
  filters,
  view,
}: LicenseContentReadyProps) {
  const empty =
    licenses.length === 0
      ? {
          title: "No licenses",
          description: "There are no license records to show yet.",
        }
      : view.total === 0
        ? {
            title: "No licenses match",
            description: "Try a different name, status, or plan.",
          }
        : null;

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
      {empty ? (
        <div className="px-6 py-12 text-center">
          <p className="text-sm font-medium">{empty.title}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {empty.description}
          </p>
        </div>
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
