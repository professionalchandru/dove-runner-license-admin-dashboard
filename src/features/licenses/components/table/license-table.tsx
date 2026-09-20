import { Table, TableBody } from "@/components/ui";
import { PAGE_SIZE } from "../../model";
import { LicenseTableHeader } from "./license-table-header";
import { LicenseTablePadRows } from "./license-table-pad-rows";
import { LicenseTableRow } from "./license-table-row";
import type { LicenseTableProps } from "./types";

export function LicenseTable({
  rows,
  selectedId,
  sortKey,
  sortDirection,
  onSort,
  onRowSelect,
}: LicenseTableProps) {
  return (
    <Table className="table-fixed">
      <colgroup>
        <col className="w-[30%]" />
        <col className="w-[14%]" />
        <col className="w-[18%]" />
        <col className="w-[22%]" />
        <col className="w-[16%]" />
      </colgroup>
      <LicenseTableHeader
        sortKey={sortKey}
        sortDirection={sortDirection}
        onSort={onSort}
      />
      <TableBody>
        {rows.map((license) => (
          <LicenseTableRow
            key={license.id}
            license={license}
            selected={selectedId === license.id}
            onSelect={onRowSelect}
          />
        ))}
        <LicenseTablePadRows count={Math.max(0, PAGE_SIZE - rows.length)} />
      </TableBody>
    </Table>
  );
}
