import { formatPaginationSummary } from "../../utils";
import type { LicensePaginationSummaryProps } from "./types";

export function LicensePaginationSummary({
  total,
  rangeStart,
  rangeEnd,
}: LicensePaginationSummaryProps) {
  return (
    <p className="text-sm text-muted-foreground">
      {formatPaginationSummary(total, rangeStart, rangeEnd)}
    </p>
  );
}
