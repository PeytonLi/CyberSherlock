import { describe, expect, it } from "vitest";
import { FLAT_FILL, heatFill } from "./heat";
import {
  countNewSinceCheck,
  countUnread,
  type MapVisitState,
} from "./map-visits";

describe("heatFill", () => {
  it("returns null for zero", () => {
    expect(heatFill(0, 5)).toBeNull();
  });

  it("gets darker from low to high", () => {
    const low = heatFill(1, 10)!;
    const high = heatFill(10, 10)!;
    const lum = (rgb: string) => {
      const m = rgb.match(/rgb\((\d+),(\d+),(\d+)\)/)!;
      return +m[1] + +m[2] + +m[3];
    };
    expect(lum(high)).toBeLessThan(lum(low));
  });
});

describe("map visit counts", () => {
  const items = [
    { url: "a", publishedAt: "2026-07-10T00:00:00.000Z" },
    { url: "b", publishedAt: "2026-07-15T00:00:00.000Z" },
    { url: "c", publishedAt: "2026-07-17T00:00:00.000Z" },
  ];

  it("counts all as new when never checked", () => {
    const state: MapVisitState = { lastChecked: {}, readUrls: [] };
    expect(countNewSinceCheck("France", items, state)).toBe(3);
  });

  it("counts only newer than last check", () => {
    const state: MapVisitState = {
      lastChecked: { France: "2026-07-14T00:00:00.000Z" },
      readUrls: [],
    };
    expect(countNewSinceCheck("France", items, state)).toBe(2);
  });

  it("counts unread urls", () => {
    const state: MapVisitState = { lastChecked: {}, readUrls: ["a"] };
    expect(countUnread(items, state)).toBe(2);
  });
});

describe("FLAT_FILL", () => {
  it("is white", () => {
    expect(FLAT_FILL).toBe("#ffffff");
  });
});
