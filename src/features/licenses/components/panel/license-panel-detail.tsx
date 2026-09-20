import type { LicensePanelDetailProps } from "./types";

export function LicensePanelDetail({ label, value }: LicensePanelDetailProps) {
  return (
    <div className="grid gap-1 rounded-lg border bg-background px-3 py-2.5">
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </p>
      <p className="text-sm">{value}</p>
    </div>
  );
}
