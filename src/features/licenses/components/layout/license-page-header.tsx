import type { LicensePageHeaderProps } from "./types";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "./constant";

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
