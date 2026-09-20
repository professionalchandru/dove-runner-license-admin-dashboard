import type { ReactNode } from "react";
import type { UseQueryResult } from "@tanstack/react-query";
import type { License, LicenseStats, TableView } from "../../model";
import type { UseTableFiltersResult } from "../../hooks/types";

export type LicensePageHeaderProps = {
  title?: string;
  description?: string;
};

export type LicenseStatCard = {
  key: keyof LicenseStats;
  label: string;
  detail: string;
};

export type LicenseStatsSectionProps = {
  stats: LicenseStats | null;
};

export type LicenseContentSectionProps = {
  showLoading: boolean;
  licensesQuery: UseQueryResult<License[], Error>;
  filters: UseTableFiltersResult;
  view: TableView | null;
};

export type LicenseContentReadyProps = {
  licenses: License[];
  filters: UseTableFiltersResult;
  view: TableView;
};

export type LicensesPageLayoutProps = {
  children: ReactNode;
  panel: ReactNode;
};
