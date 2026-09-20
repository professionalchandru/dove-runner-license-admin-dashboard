import type { LicensesStatProps } from "./types";

export function LicenseStat({ label, value, detail }: LicensesStatProps) {
  return (
    <div className="rounded-xl border bg-card px-4 py-2.5 shadow-sm">
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-1 text-xl font-semibold tracking-tight tabular-nums">
        {value}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
    </div>
  );
}
