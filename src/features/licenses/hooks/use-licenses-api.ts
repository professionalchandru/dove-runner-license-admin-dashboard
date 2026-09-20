import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchLicenses, patchSeats } from "../api";
import type { License, UpdateSeatsInput } from "../model";
import type { LicensesQueryKey } from "./types";

export const licensesQueryKey = (fail: boolean): LicensesQueryKey =>
  ["licenses", { fail }] as const;

export function useLicenses(fail = false, enabled = true) {
  return useQuery({
    queryKey: licensesQueryKey(fail),
    queryFn: () => fetchLicenses(fail),
    enabled,
  });
}

export function useUpdateSeats() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, seatsAllowed }: UpdateSeatsInput) =>
      patchSeats(id, seatsAllowed),
    onSuccess: (updated) => {
      queryClient.setQueriesData<License[]>(
        { queryKey: ["licenses"] },
        (current) => {
          if (!current) {
            return current;
          }
          return current.map((license) =>
            license.id === updated.id ? updated : license,
          );
        },
      );
    },
  });
}
