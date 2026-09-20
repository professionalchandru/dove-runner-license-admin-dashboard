import type { LicenseStatus } from "../../model";

export const LICENSE_STATUS_CLASS: Record<LicenseStatus, string> = {
  Active:
    "border-transparent bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100",
  "Expiring Soon":
    "border-transparent bg-amber-100 text-amber-950 dark:bg-amber-900/40 dark:text-amber-100",
  Expired:
    "border-transparent bg-red-100 text-red-900 dark:bg-red-900/40 dark:text-red-100",
  Suspended:
    "border-transparent bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100",
};
