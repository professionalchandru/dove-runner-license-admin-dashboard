import { LICENSE_STATUSES, PLANS, type License } from "../model";
import { CUSTOMERS } from "./constant";
import {
  emailFor,
  pad,
  renewalDateFor,
} from "./mock-helpers";

function buildMockLicenses(): License[] {
  if (CUSTOMERS.length !== 50) {
    throw new Error("Mock data must contain exactly 50 customers.");
  }

  return CUSTOMERS.map((customerName, index) => {
    const plan = PLANS[index % PLANS.length];
    const status = LICENSE_STATUSES[index % LICENSE_STATUSES.length];
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
