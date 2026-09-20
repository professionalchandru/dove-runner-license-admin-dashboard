import type { LicenseTableColumn } from "./types";

export const LICENSE_TABLE_COLUMNS: readonly LicenseTableColumn[] = [
  { key: "customerName", label: "Customer name" },
  { key: "plan", label: "Plan" },
  { key: "status", label: "Status" },
  { key: "seats", label: "Seats used / allowed" },
  { key: "renewalDate", label: "Renewal date" },
];
