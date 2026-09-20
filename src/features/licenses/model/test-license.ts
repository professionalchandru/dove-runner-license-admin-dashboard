import type { License } from "./types";


export function testLicense(overrides: Partial<License> = {}): License {
  return {
    id: "lic-01",
    customerName: "Acme Corp",
    plan: "Standard",
    status: "Active",
    seatsUsed: 4,
    seatsAllowed: 10,
    renewalDate: "2026-11-01",
    ownerEmail: "owner@acme.example",
    createdAt: "2024-01-01",
    notes: "No additional notes.",
    ...overrides,
  };
}
