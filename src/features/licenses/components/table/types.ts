import type {
  License,
  PlanFilter,
  SortDirection,
  SortKey,
  StatusFilter,
} from "../../model";

export type LicenseEmptyKind = "source" | "filters";

export type LicenseEmptyCopy = {
  title: string;
  description: string;
};

export type LicenseEmptyProps = {
  kind: LicenseEmptyKind;
};

export type LicenseErrorProps = {
  message: string;
  onRetry: () => void;
  isRetrying?: boolean;
};

export type LicenseToolbarProps = {
  search: string;
  status: StatusFilter;
  plan: PlanFilter;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: StatusFilter) => void;
  onPlanChange: (value: PlanFilter) => void;
};

export type LicenseToolbarSearchProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export type LicenseToolbarFiltersProps = {
  status: StatusFilter;
  plan: PlanFilter;
  onStatusChange: (value: StatusFilter) => void;
  onPlanChange: (value: PlanFilter) => void;
};

export type LicenseTableColumn = {
  key: SortKey;
  label: string;
};

export type LicenseTableProps = {
  rows: License[];
  selectedId: string | null;
  sortKey: SortKey;
  sortDirection: SortDirection;
  onSort: (key: SortKey) => void;
  onRowSelect: (id: string) => void;
};

export type LicenseTableHeaderProps = {
  sortKey: SortKey;
  sortDirection: SortDirection;
  onSort: (key: SortKey) => void;
};

export type LicenseTableRowProps = {
  license: License;
  selected: boolean;
  onSelect: (id: string) => void;
};

export type LicenseTablePadRowsProps = {
  count: number;
};

export type LicensePaginationProps = {
  page: number;
  pageCount: number;
  total: number;
  rangeStart: number;
  rangeEnd: number;
  onPageChange: (page: number) => void;
};

export type LicensePaginationSummaryProps = {
  total: number;
  rangeStart: number;
  rangeEnd: number;
};

export type LicensePaginationNavProps = {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
};

export type LicenseSortIconProps = {
  active: boolean;
  direction: SortDirection;
};
