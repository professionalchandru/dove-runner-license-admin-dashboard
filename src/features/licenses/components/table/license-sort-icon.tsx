import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import type { LicenseSortIconProps } from "./types";

export function LicenseSortIcon({ active, direction }: LicenseSortIconProps) {
  if (!active) {
    return <ArrowUpDown className="size-3.5 opacity-60" />;
  }
  return direction === "asc" ? (
    <ArrowUp className="size-3.5" />
  ) : (
    <ArrowDown className="size-3.5" />
  );
}
