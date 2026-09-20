import { Button } from "@/components/ui";
import type { LicenseErrorProps } from "./types";

export function LicenseError({
  message,
  onRetry,
  isRetrying = false,
}: LicenseErrorProps) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-6 text-center"
      role="alert"
    >
      <p className="text-sm font-medium text-destructive">{message}</p>
      <Button
        type="button"
        variant="outline"
        onClick={onRetry}
        disabled={isRetrying}
      >
        {isRetrying ? "Retrying…" : "Retry"}
      </Button>
    </div>
  );
}
