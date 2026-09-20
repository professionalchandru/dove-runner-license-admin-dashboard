import type { ApiErrorResponse, License, LicensesResponse } from "../model";

export async function fetchLicenses(fail = false): Promise<License[]> {
  const url = fail ? "/api/licenses?fail=1" : "/api/licenses";
  const response = await fetch(url);

  if (!response.ok) {
    let message = "Could not load licenses.";
    try {
      const body = (await response.json()) as ApiErrorResponse;
      if (body.error) {
        message = body.error;
      }
    } catch {
      // Keep the fallback message when the body is not JSON.
    }
    throw new Error(message);
  }

  const body = (await response.json()) as LicensesResponse;
  return body.licenses;
}

export async function patchSeats(
  id: string,
  seatsAllowed: number,
): Promise<License> {
  const response = await fetch(`/api/licenses/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ seatsAllowed }),
  });

  if (!response.ok) {
    let message = "Could not update seats.";
    try {
      const body = (await response.json()) as ApiErrorResponse;
      if (body.error) {
        message = body.error;
      }
    } catch {
      // Keep the fallback message when the body is not JSON.
    }
    throw new Error(message);
  }

  return (await response.json()) as License;
}
