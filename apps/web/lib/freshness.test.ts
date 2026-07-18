import { describe, it, expect } from "vitest";
import { isFresh } from "./freshness";

const DAY = 24 * 60 * 60 * 1000;

describe("isFresh", () => {
  it("null (no rows) is never fresh", () => {
    expect(isFresh(null, DAY)).toBe(false);
  });
  it("row fetched just now is fresh", () => {
    expect(isFresh(new Date(), DAY)).toBe(true);
  });
  it("row older than window is stale", () => {
    expect(isFresh(new Date(Date.now() - 2 * DAY), DAY)).toBe(false);
  });
  it("row inside window is fresh", () => {
    expect(isFresh(new Date(Date.now() - DAY / 2), DAY)).toBe(true);
  });
});
