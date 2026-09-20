import type { SeatsValidationResult } from "./types";


export const MAX_SEATS_ALLOWED = 9999;

export function validateSeatsAllowed(
  input: string,
  seatsUsed: number,
): SeatsValidationResult {
  const trimmed = input.trim();
  if (trimmed.length === 0) {
    return { ok: false, message: "Enter a seats allowed number." };
  }

  if (!/^\d+$/.test(trimmed)) {
    return {
      ok: false,
      message: "Seats allowed must be a whole number that is not negative.",
    };
  }

  const seatsAllowed = Number(trimmed);
  if (!Number.isSafeInteger(seatsAllowed) || seatsAllowed > MAX_SEATS_ALLOWED) {
    return {
      ok: false,
      message: `Seats allowed cannot exceed ${MAX_SEATS_ALLOWED}.`,
    };
  }

  if (seatsAllowed < seatsUsed) {
    return {
      ok: false,
      message: `Must be at least seats used (${seatsUsed}). Cannot be negative.`,
    };
  }

  return { ok: true, seatsAllowed };
}
