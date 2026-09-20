import { Badge } from "@/components/ui";
import { LICENSE_STATUS_CLASS } from "./status-styles";
import type { LicenseStatusBadgeProps } from "./types";

export function LicenseStatusBadge({ status }: LicenseStatusBadgeProps) {
  return <Badge className={LICENSE_STATUS_CLASS[status]}>{status}</Badge>;
}
