import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { LICENSE_TABLE_COLUMNS } from "./constant";

export function LicenseLoading() {
  return (
    <div role="status" aria-live="polite" aria-label="Loading licenses">
      <Table>
        <TableHeader>
          <TableRow>
            {LICENSE_TABLE_COLUMNS.map((column) => (
              <TableHead key={column.key}>{column.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 10 }, (_, row) => (
            <TableRow key={row}>
              {LICENSE_TABLE_COLUMNS.map((column) => (
                <TableCell key={column.key}>
                  <Skeleton className="h-4 w-24" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
