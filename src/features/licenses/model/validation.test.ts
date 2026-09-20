import { describe, expect, it } from "vitest";
import { validateSeatsAllowed } from ".";

describe("validateSeatsAllowed", () => {
  it("rejects a blank value", () => {
    expect(validateSeatsAllowed("   ", 4)).toEqual({
      ok: false,
      message: "Enter a seats allowed number.",
    });
  });

  it("rejects text, decimals, and negative numbers", () => {
    const message =
      "Seats allowed must be a whole number that is not negative.";

    expect(validateSeatsAllowed("twelve", 4)).toEqual({ ok: false, message });
    expect(validateSeatsAllowed("5.5", 4)).toEqual({ ok: false, message });
    expect(validateSeatsAllowed("-1", 0)).toEqual({ ok: false, message });
  });

  it("rejects a value below seats used", () => {
    expect(validateSeatsAllowed("3", 8)).toEqual({
      ok: false,
      message: "Must be at least seats used (8). Cannot be negative.",
    });
  });

  it("rejects a number above the maximum", () => {
    expect(validateSeatsAllowed("10000", 0)).toEqual({
      ok: false,
      message: "Seats allowed cannot exceed 9999.",
    });
    expect(validateSeatsAllowed("9007199254740992", 0)).toEqual({
      ok: false,
      message: "Seats allowed cannot exceed 9999.",
    });
  });

  it("accepts a whole number at or above seats used", () => {
    expect(validateSeatsAllowed(" 8 ", 8)).toEqual({
      ok: true,
      seatsAllowed: 8,
    });
    expect(validateSeatsAllowed("12", 8)).toEqual({
      ok: true,
      seatsAllowed: 12,
    });
    expect(validateSeatsAllowed("9999", 8)).toEqual({
      ok: true,
      seatsAllowed: 9999,
    });
  });
});
