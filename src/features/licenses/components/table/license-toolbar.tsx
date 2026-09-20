import { LicenseToolbarFilters } from "./license-toolbar-filters";
import { LicenseToolbarSearch } from "./license-toolbar-search";
import type { LicenseToolbarProps } from "./types";

export function LicenseToolbar({
  search,
  status,
  plan,
  onSearchChange,
  onStatusChange,
  onPlanChange,
}: LicenseToolbarProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
      <LicenseToolbarSearch search={search} onSearchChange={onSearchChange} />
      <LicenseToolbarFilters
        status={status}
        plan={plan}
        onStatusChange={onStatusChange}
        onPlanChange={onPlanChange}
      />
    </div>
  );
}
