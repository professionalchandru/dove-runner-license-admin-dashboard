import type { License, SortKey } from "../model/types";

export function compareText(a: string, b: string): number {
  return a.localeCompare(b, "en", { sensitivity: "base" });
}

export function compareLicenseRows(
  left: License,
  right: License,
  sortKey: SortKey,
): number {
  switch (sortKey) {
    case "customerName":
      return compareText(left.customerName, right.customerName);
    case "plan":
      return compareText(left.plan, right.plan);
    case "status":
      return compareText(left.status, right.status);
    case "seats": {
      const used = left.seatsUsed - right.seatsUsed;
      if (used !== 0) {
        return used;
      }
      return left.seatsAllowed - right.seatsAllowed;
    }
    case "renewalDate":
      return left.renewalDate.localeCompare(right.renewalDate);
  }
}
