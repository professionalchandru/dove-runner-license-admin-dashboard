import { describe, expect, it } from "vitest";
import {
  paginationItems,
  selectTableView,
  summarizeLicenses,
  testLicense,
  type TableFilters,
} from ".";

const defaultFilters: TableFilters = {
  query: "",
  status: "all",
  plan: "all",
  sortKey: "customerName",
  sortDirection: "asc",
  page: 1,
  pageSize: 10,
};

describe("summarizeLicenses", () => {
  it("counts licenses by status", () => {
    const licenses = [
      testLicense({ id: "a", status: "Active" }),
      testLicense({ id: "b", status: "Expiring Soon" }),
      testLicense({ id: "c", status: "Suspended" }),
      testLicense({ id: "d", status: "Expired" }),
      testLicense({ id: "e", status: "Active" }),
    ];

    expect(summarizeLicenses(licenses)).toEqual({
      total: 5,
      active: 2,
      expiring: 1,
      suspended: 1,
      expired: 1,
    });
  });
});

describe("selectTableView", () => {
  it("returns an empty page range when there are no licenses", () => {
    const view = selectTableView([], defaultFilters);

    expect(view).toMatchObject({
      rows: [],
      total: 0,
      page: 1,
      pageCount: 1,
      rangeStart: 0,
      rangeEnd: 0,
    });
  });

  it("matches customer names without caring about case or extra spaces", () => {
    const licenses = [
      testLicense({ id: "a", customerName: "Acme Labs" }),
      testLicense({ id: "b", customerName: "Northwind" }),
    ];

    const view = selectTableView(licenses, {
      ...defaultFilters,
      query: "  ACME  ",
    });

    expect(view.total).toBe(1);
    expect(view.rows[0]?.customerName).toBe("Acme Labs");
  });

  it("applies status and plan together", () => {
    const licenses = [
      testLicense({ id: "a", plan: "Trial", status: "Active" }),
      testLicense({ id: "b", plan: "Trial", status: "Expired" }),
      testLicense({ id: "c", plan: "Enterprise", status: "Active" }),
    ];

    const view = selectTableView(licenses, {
      ...defaultFilters,
      plan: "Trial",
      status: "Active",
    });

    expect(view.rows.map((row) => row.id)).toEqual(["a"]);
  });

  it("sorts seats by used first, then allowed", () => {
    const licenses = [
      testLicense({ id: "a", customerName: "A", seatsUsed: 2, seatsAllowed: 20 }),
      testLicense({ id: "b", customerName: "B", seatsUsed: 2, seatsAllowed: 8 }),
      testLicense({ id: "c", customerName: "C", seatsUsed: 9, seatsAllowed: 9 }),
    ];

    const view = selectTableView(licenses, {
      ...defaultFilters,
      sortKey: "seats",
      sortDirection: "asc",
    });

    expect(view.rows.map((row) => row.id)).toEqual(["b", "a", "c"]);
  });

  it("reverses sort when direction is desc", () => {
    const licenses = [
      testLicense({ id: "a", customerName: "Acme" }),
      testLicense({ id: "z", customerName: "Zenith" }),
    ];

    const view = selectTableView(licenses, {
      ...defaultFilters,
      sortKey: "customerName",
      sortDirection: "desc",
    });

    expect(view.rows.map((row) => row.id)).toEqual(["z", "a"]);
  });

  it("clamps an out-of-range page onto the last page", () => {
    const licenses = Array.from({ length: 12 }, (_, index) =>
      testLicense({
        id: `lic-${index + 1}`,
        customerName: `Customer ${String(index + 1).padStart(2, "0")}`,
      }),
    );

    const view = selectTableView(licenses, {
      ...defaultFilters,
      page: 99,
      pageSize: 10,
    });

    expect(view.page).toBe(2);
    expect(view.pageCount).toBe(2);
    expect(view.rows).toHaveLength(2);
    expect(view.rangeStart).toBe(11);
    expect(view.rangeEnd).toBe(12);
  });
});

describe("paginationItems", () => {
  it("lists every page when there are seven or fewer", () => {
    expect(paginationItems(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(paginationItems(4, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("inserts gaps instead of skipping page numbers", () => {
    expect(paginationItems(1, 10)).toEqual([1, 2, "gap", 10]);
    expect(paginationItems(5, 10)).toEqual([1, "gap", 4, 5, 6, "gap", 10]);
    expect(paginationItems(10, 10)).toEqual([1, "gap", 9, 10]);
  });

  it("returns a single page or nothing for tiny counts", () => {
    expect(paginationItems(1, 1)).toEqual([1]);
    expect(paginationItems(1, 0)).toEqual([]);
  });
});
