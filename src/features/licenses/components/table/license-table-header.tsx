import { TableHead, TableHeader, TableRow } from "@/components/ui";
import { LICENSE_TABLE_COLUMNS } from "./columns";
import { LicenseSortIcon } from "./license-sort-icon";
import type { LicenseTableHeaderProps } from "./types";

export function LicenseTableHeader({
  sortKey,
  sortDirection,
  onSort,
}: LicenseTableHeaderProps) {
  return (
    <TableHeader className="bg-muted/50">
      <TableRow className="hover:bg-transparent">
        {LICENSE_TABLE_COLUMNS.map((column) => {
          const isActive = sortKey === column.key;
          return (
            <TableHead
              key={column.key}
              aria-sort={
                isActive
                  ? sortDirection === "asc"
                    ? "ascending"
                    : "descending"
                  : "none"
              }
            >
              <button
                type="button"
                className="inline-flex cursor-pointer items-center gap-1 rounded-md px-1 py-1 font-medium text-muted-foreground hover:bg-background hover:text-foreground"
                onClick={() => {
                  onSort(column.key);
                }}
              >
                {column.label}
                <LicenseSortIcon active={isActive} direction={sortDirection} />
              </button>
            </TableHead>
          );
        })}
      </TableRow>
    </TableHeader>
  );
}
