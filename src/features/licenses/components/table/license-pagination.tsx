import { formatPaginationSummary } from "../../utils";
import { LicensePaginationNav } from "./license-pagination-nav";
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
      <p className="text-sm text-muted-foreground">
        {formatPaginationSummary(total, rangeStart, rangeEnd)}
      </p>
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
