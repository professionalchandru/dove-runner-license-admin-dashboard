import type { LicensePageHeaderProps } from "./types";

const DEFAULT_TITLE = "License Usage";
const DEFAULT_DESCRIPTION =
  "Internal admin for customer license records. Open a row to review the account and update seats allowed.";

export function LicensePageHeader({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
}: LicensePageHeaderProps) {
  return (
    <header className="flex flex-col gap-1">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      <p className="text-sm text-muted-foreground">{description}</p>
    </header>
  );
}
