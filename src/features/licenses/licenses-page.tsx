"use client";

import {
  LicenseContentSection,
  LicensePageHeader,
  LicensePanel,
  LicenseStatsSection,
  LicensesPageLayout,
} from "./components";
import { useLicensesPage } from "./hooks";
import type { LicensesPageProps } from "./types";

export function LicensesPage({ fail = false }: LicensesPageProps) {
  const page = useLicensesPage(fail);

  return (
    <LicensesPageLayout
      panel={
        <LicensePanel
          license={page.selectedLicense}
          isSaving={page.updateSeats.isPending}
          saveError={page.updateSeats.error?.message ?? null}
          onClose={page.closePanel}
          onSaveSeats={page.saveSeats}
        />
      }
    >
      <LicensePageHeader />
      <LicenseStatsSection stats={page.stats} />
      <LicenseContentSection
        showLoading={page.showLoading}
        licensesQuery={page.licensesQuery}
        filters={page.filters}
        view={page.view}
      />
    </LicensesPageLayout>
  );
}
