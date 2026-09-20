import {
  LICENSE_STATUSES,
  PLANS,
  type PlanFilter,
  type StatusFilter,
} from "../model";

export function isStatusFilter(value: string): value is StatusFilter {
  return (
    value === "all" || (LICENSE_STATUSES as readonly string[]).includes(value)
  );
}

export function isPlanFilter(value: string): value is PlanFilter {
  return value === "all" || (PLANS as readonly string[]).includes(value);
}
