import { licenseEmptyCopy } from "./empty-copy";
import type { LicenseEmptyProps } from "./types";

export function LicenseEmpty({ kind }: LicenseEmptyProps) {
  const { title, description } = licenseEmptyCopy(kind);

  return (
    <div className="px-6 py-12 text-center">
      <p className="text-sm font-medium">{title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
