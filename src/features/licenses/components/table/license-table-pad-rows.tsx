import { TableCell, TableRow } from "@/components/ui";
import type { LicenseTablePadRowsProps } from "./types";

export function LicenseTablePadRows({ count }: LicenseTablePadRowsProps) {
  return Array.from({ length: count }, (_, index) => (
    <TableRow
      key={`pad-${index}`}
      aria-hidden="true"
      className="pointer-events-none h-9 hover:bg-transparent"
    >
      <TableCell className="px-4 py-1.5" />
      <TableCell className="px-4 py-1.5" />
      <TableCell className="px-4 py-1.5" />
      <TableCell className="px-4 py-1.5" />
      <TableCell className="px-4 py-1.5" />
    </TableRow>
  ));
}
