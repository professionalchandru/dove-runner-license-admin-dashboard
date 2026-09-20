import type {
  UseMutationResult,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  License,
  LicenseStats,
  PlanFilter,
  SortDirection,
  SortKey,
  StatusFilter,
  TableView,
  UpdateSeatsInput,
} from "../model/types";

export type LicensesQueryKey = readonly ["licenses", { fail: boolean }];

export type UseTableFiltersResult = {
  search: string;
  status: StatusFilter;
  plan: PlanFilter;
  sortKey: SortKey;
  sortDirection: SortDirection;
  page: number;
  pageSize: number;
  selectedId: string | null;
  setSearch: (value: string) => void;
  setStatus: (value: StatusFilter) => void;
  setPlan: (value: PlanFilter) => void;
  toggleSort: (key: SortKey) => void;
  setPage: (page: number) => void;
  setSelectedId: (id: string | null) => void;
};

export type UseEditSeatsFormSave = (seatsAllowed: number) => Promise<void>;

export type UseEditSeatsFormResult = {
  value: string;
  message: string | null;
  atMax: boolean;
  changeBy: (delta: number) => void;
  updateValue: (next: string) => void;
  submit: () => Promise<void>;
};

export type UseLicensesPageResult = {
  licensesQuery: UseQueryResult<License[], Error>;
  filters: UseTableFiltersResult;
  updateSeats: UseMutationResult<License, Error, UpdateSeatsInput>;
  showLoading: boolean;
  selectedLicense: License | null;
  view: TableView | null;
  stats: LicenseStats | null;
  closePanel: () => void;
  saveSeats: (seatsAllowed: number) => Promise<void>;
};
