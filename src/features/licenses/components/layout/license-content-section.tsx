import { LicenseError, LicenseLoading } from "../table";
import { LicenseContentReady } from "./license-content-ready";
import type { LicenseContentSectionProps } from "./types";

export function LicenseContentSection({
  showLoading,
  licensesQuery,
  filters,
  view,
}: LicenseContentSectionProps) {
  return (
    <section className="overflow-hidden rounded-xl border bg-card shadow-sm">
      {showLoading ? <LicenseLoading /> : null}
      {!showLoading && licensesQuery.isError ? (
        <div className="p-4">
          <LicenseError
            message={licensesQuery.error.message}
            isRetrying={licensesQuery.isFetching}
            onRetry={() => {
              void licensesQuery.refetch();
            }}
          />
        </div>
      ) : null}
      {!showLoading && licensesQuery.isSuccess && view ? (
        <LicenseContentReady
          licenses={licensesQuery.data}
          filters={filters}
          view={view}
        />
      ) : null}
    </section>
  );
}
