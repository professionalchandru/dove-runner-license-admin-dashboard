import { TableCell, TableRow } from "@/components/ui";
import { formatIsoDate } from "../../utils";
import { LicenseStatusBadge, SeatUsage } from "../shared";
import type { LicenseTableRowProps } from "./types";

export function LicenseTableRow({
  license,
  selected,
  onSelect,
}: LicenseTableRowProps) {
  return (
    <TableRow
      tabIndex={0}
      aria-label={`Open ${license.customerName} details`}
      data-state={selected ? "selected" : undefined}
      className="h-9 cursor-pointer"
      onClick={() => {
        onSelect(license.id);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(license.id);
        }
      }}
    >
      <TableCell className="overflow-hidden px-4 py-1.5 font-medium">
        <span className="block truncate">{license.customerName}</span>
      </TableCell>
      <TableCell className="px-4 py-1.5">{license.plan}</TableCell>
      <TableCell className="px-4 py-1.5">
        <LicenseStatusBadge status={license.status} />
      </TableCell>
      <TableCell className="px-4 py-1.5">
        <SeatUsage used={license.seatsUsed} allowed={license.seatsAllowed} />
      </TableCell>
      <TableCell className="px-4 py-1.5 tabular-nums">
        {formatIsoDate(license.renewalDate)}
      </TableCell>
    </TableRow>
  );
}
