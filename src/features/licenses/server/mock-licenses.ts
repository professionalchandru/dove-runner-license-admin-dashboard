import type { License, LicenseStatus, Plan } from "../model";
import {
  emailFor,
  pad,
  renewalDateFor,
} from "./mock-helpers";

const CUSTOMERS: readonly string[] = [
  "Acme Corp",
  "Acme Labs",
  "Northwind Ltd",
  "Northwind Retail",
  "Contoso",
  "Contoso Health",
  "Globex",
  "Initech",
  "Umbrella Systems",
  "Stark Analytics",
  "Wayne Logistics",
  "Hooli Cloud",
  "Pied Piper",
  "Massive Dynamic",
  "Soylent Foods",
  "Cyberdyne",
  "Oscorp",
  "Wonka Confectionery",
  "Duff Brewing",
  "Vandelay Industries",
  "Prestige Worldwide",
  "Inversource",
  "Blue Ocean Media",
  "Cedar & Pine",
  "Harbor Freight Co",
  "Lumen Finance",
  "Nimbus Travel",
  "Oak & Iron",
  "Quiet Harbor",
  "Redwood Clinics",
  "Silverline HR",
  "Tidepool Education",
  "Vertex Legal",
  "Willow Parks",
  "Amber Grid",
  "Brightside Insurance",
  "Copperfield Books",
  "Driftwood Hotels",
  "Ember Robotics",
  "Fieldnote Agriculture",
  "Granite Civic",
  "Horizon Biotech",
  "Ivory Coast Coffee",
  "Juniper Networks Demo",
  "Keystone Museums",
  "Larkspur Audio",
  "Maplewood Schools",
  "Nightingale Care",
  "Orchard Payments",
  "Prairie Energy",
];

const STATUSES: readonly LicenseStatus[] = [
  "Active",
  "Expiring Soon",
  "Expired",
  "Suspended",
];

const PLANS: readonly Plan[] = ["Trial", "Standard", "Enterprise"];

function buildMockLicenses(): License[] {
  if (CUSTOMERS.length !== 50) {
    throw new Error("Mock data must contain exactly 50 customers.");
  }

  return CUSTOMERS.map((customerName, index) => {
    const plan = PLANS[index % PLANS.length];
    const status = STATUSES[index % STATUSES.length];
    if (!plan || !status) {
      throw new Error("Plan and status must always resolve.");
    }

    const seatsAllowed =
      plan === "Trial" ? 5 : plan === "Standard" ? 25 : 100;
    const seatsUsed =
      status === "Expired"
        ? seatsAllowed
        : Math.max(0, seatsAllowed - (index % 7));

    const createdYear = 2023 + (index % 3);
    const createdMonth = 1 + (index % 12);
    const createdDay = Math.min(28, 1 + (index % 20));

    return {
      id: `lic-${pad(index + 1)}`,
      customerName,
      plan,
      status,
      seatsUsed,
      seatsAllowed,
      renewalDate: renewalDateFor(status, index),
      ownerEmail: emailFor(customerName, index),
      createdAt: `${createdYear}-${pad(createdMonth)}-${pad(createdDay)}`,
      notes:
        index % 5 === 0
          ? "Annual contract. Seat increase pending review."
          : index % 3 === 0
            ? "Auto-renew enabled."
            : "No additional notes.",
    };
  });
}

export const MOCK_LICENSES: License[] = buildMockLicenses();
