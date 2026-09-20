import { NextResponse } from "next/server";
import type { ApiErrorResponse, LicensesResponse } from "@/features/licenses/model";
import { listLicenses } from "@/features/licenses/server";
import { DELAY_MS } from "./constant";

export async function GET(request: Request): Promise<
  NextResponse<LicensesResponse | ApiErrorResponse>
> {
  await new Promise((resolve) => {
    setTimeout(resolve, DELAY_MS);
  });

  const fail = new URL(request.url).searchParams.get("fail");
  if (fail === "1") {
    return NextResponse.json(
      { error: "Could not load licenses." },
      { status: 500 },
    );
  }

  return NextResponse.json({ licenses: listLicenses() });
}
