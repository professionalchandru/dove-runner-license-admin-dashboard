import { LicensePaginationNav } from "./license-pagination-nav";
import { LicensePaginationSummary } from "./license-pagination-summary";
import type { LicensePaginationProps } from "./types";

export function LicensePagination({
  page,
  pageCount,
  total,
  rangeStart,
  rangeEnd,
  onPageChange,
}: LicensePaginationProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <LicensePaginationSummary
        total={total}
        rangeStart={rangeStart}
        rangeEnd={rangeEnd}
      />
      {pageCount > 1 ? (
        <LicensePaginationNav
          page={page}
          pageCount={pageCount}
          onPageChange={onPageChange}
        />
      ) : null}
    </div>
  );
}
