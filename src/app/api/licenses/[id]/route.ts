import { NextResponse } from "next/server";
import type { ApiErrorResponse, License } from "@/features/licenses/model";
import { validateSeatsAllowed } from "@/features/licenses/model";
import {
  getLicenseById,
  updateSeatsAllowed,
} from "@/features/licenses/server";
import type { PatchLicenseRouteContext, PatchSeatsBody } from "..";

export async function PATCH(
  request: Request,
  context: PatchLicenseRouteContext,
): Promise<NextResponse<License | ApiErrorResponse>> {
  const { id } = await context.params;
  const existing = getLicenseById(id);
  if (!existing) {
    return NextResponse.json({ error: "License not found." }, { status: 404 });
  }

  let body: PatchSeatsBody;
  try {
    body = (await request.json()) as PatchSeatsBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const result = validateSeatsAllowed(
    String(body.seatsAllowed ?? ""),
    existing.seatsUsed,
  );
  if (!result.ok) {
    return NextResponse.json({ error: result.message }, { status: 400 });
  }

  const updated = updateSeatsAllowed(id, result.seatsAllowed);
  if (!updated) {
    return NextResponse.json({ error: "License not found." }, { status: 404 });
  }

  return NextResponse.json(updated);
}
