import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui";
import { LicenseStatusBadge } from "../shared";
import type { LicensePanelHeaderProps } from "./types";

export function LicensePanelHeader({
  customerName,
  status,
  plan,
}: LicensePanelHeaderProps) {
  return (
    <SheetHeader className="shrink-0 border-b px-5 pt-5 pr-12 pb-4">
      <SheetDescription>License detail</SheetDescription>
      <SheetTitle className="text-xl tracking-tight">{customerName}</SheetTitle>
      <div className="mt-2 flex items-center gap-2">
        <LicenseStatusBadge status={status} />
        <span className="text-sm text-muted-foreground">{plan}</span>
      </div>
    </SheetHeader>
  );
}
