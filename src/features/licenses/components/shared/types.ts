import type { LicenseStatus } from "../../model";

export type SeatUsageSize = "sm" | "md";

export type SeatUsageProps = {
  used: number;
  allowed: number;
  size?: SeatUsageSize;
};

export type LicenseStatusBadgeProps = {
  status: LicenseStatus;
};

export type LicensesStatProps = {
  label: string;
  value: string;
  detail: string;
};
