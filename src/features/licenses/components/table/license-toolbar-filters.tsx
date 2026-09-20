import {
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { LICENSE_STATUSES, PLANS } from "../../model";
import { isPlanFilter, isStatusFilter } from "../../utils";
import type { LicenseToolbarFiltersProps } from "./types";

export function LicenseToolbarFilters({
  status,
  plan,
  onStatusChange,
  onPlanChange,
}: LicenseToolbarFiltersProps) {
  return (
    <>
      <div className="grid gap-1.5">
        <Label htmlFor="license-status">Status</Label>
        <Select
          value={status}
          onValueChange={(value) => {
            if (isStatusFilter(value)) {
              onStatusChange(value);
            }
          }}
        >
          <SelectTrigger id="license-status" className="w-44">
            <SelectValue placeholder="All statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            {LICENSE_STATUSES.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="license-plan">Plan</Label>
        <Select
          value={plan}
          onValueChange={(value) => {
            if (isPlanFilter(value)) {
              onPlanChange(value);
            }
          }}
        >
          <SelectTrigger id="license-plan" className="w-40">
            <SelectValue placeholder="All plans" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All plans</SelectItem>
            {PLANS.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
