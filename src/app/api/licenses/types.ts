export type PatchSeatsBody = {
  seatsAllowed?: unknown;
};

export type PatchLicenseRouteContext = {
  params: Promise<{ id: string }>;
};
