import type { LicenseEmptyCopy, LicenseEmptyKind } from "./types";

export function licenseEmptyCopy(kind: LicenseEmptyKind): LicenseEmptyCopy {
  if (kind === "source") {
    return {
      title: "No licenses",
      description: "There are no license records to show yet.",
    };
  }
  return {
    title: "No licenses match",
    description: "Try a different name, status, or plan.",
  };
}
