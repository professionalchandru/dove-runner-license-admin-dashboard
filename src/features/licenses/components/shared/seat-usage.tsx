import { seatUsageTone } from "../../utils";
import type { SeatUsageProps } from "./types";

export function SeatUsage({ used, allowed, size = "sm" }: SeatUsageProps) {
  const percent =
    allowed <= 0 ? 0 : Math.min(100, Math.round((used / allowed) * 100));
  const barClass = size === "md" ? "h-2 w-full" : "h-1.5 w-16";

  return (
    <div
      className={
        size === "md" ? "grid gap-2" : "flex min-w-40 items-center gap-3"
      }
    >
      <span className="text-sm tabular-nums">
        {used} / {allowed}
        {size === "md" ? (
          <span className="ml-2 text-xs text-muted-foreground">
            {percent}% used
          </span>
        ) : null}
      </span>
      <div
        className={`overflow-hidden rounded-full bg-muted ${barClass}`}
        title={`${percent}% of seats used`}
      >
        <div
          className={`h-full rounded-full ${seatUsageTone(percent)}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
