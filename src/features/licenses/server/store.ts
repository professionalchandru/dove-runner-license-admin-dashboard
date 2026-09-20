import "server-only";

import type { License } from "../model";
import { MOCK_LICENSES } from "./mock-licenses";

let licenses: License[] = structuredClone(MOCK_LICENSES);

export function listLicenses(): License[] {
  return structuredClone(licenses);
}

export function getLicenseById(id: string): License | undefined {
  const match = licenses.find((license) => license.id === id);
  return match ? structuredClone(match) : undefined;
}

export function updateSeatsAllowed(
  id: string,
  seatsAllowed: number,
): License | undefined {
  const index = licenses.findIndex((license) => license.id === id);
  const current = licenses[index];
  if (index === -1 || current === undefined) {
    return undefined;
  }

  const next: License = { ...current, seatsAllowed };
  licenses = [
    ...licenses.slice(0, index),
    next,
    ...licenses.slice(index + 1),
  ];
  return structuredClone(next);
}
