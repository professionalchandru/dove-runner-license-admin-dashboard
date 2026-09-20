import { LicensesPage } from "@/features/licenses/licenses-page";
import type { LicensesRouteProps } from ".";
import { readFailParam } from "./read-fail-param";

export default async function LicensesRoute({
  searchParams,
}: LicensesRouteProps) {
  const params = await searchParams;
  const fail = readFailParam(params.fail);

  return <LicensesPage fail={fail} />;
}
