import { Search } from "lucide-react";
import { Input, Label } from "@/components/ui";
import type { LicenseToolbarSearchProps } from "./types";

export function LicenseToolbarSearch({
  search,
  onSearchChange,
}: LicenseToolbarSearchProps) {
  return (
    <div className="grid w-full gap-1.5 sm:max-w-sm">
      <Label htmlFor="license-search">Search customer</Label>
      <div className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          id="license-search"
          value={search}
          onChange={(event) => {
            onSearchChange(event.target.value);
          }}
          placeholder="Search by name"
          className="pl-8"
        />
      </div>
    </div>
  );
}
