import { describe, it, expect } from "vitest";
import { formatSSN, validateSSN, generateRandomSSN } from "../index";

describe("SSN Utilities", () => {
  it("should format SSN correctly", () => {
    expect(formatSSN("1234567890")).toBe("12-34567-890");
  });

  it("should validate SSN", () => {
    expect(validateSSN("1234567890")).toBe(true);
    expect(validateSSN("12345")).toBe(false);
    expect(validateSSN("abcdefghij")).toBe(false);
  });

  it("should generate random SSN", () => {
    const ssn = generateRandomSSN();
    expect(validateSSN(ssn.replace(/-/g, ""))).toBe(true);
  });
});
