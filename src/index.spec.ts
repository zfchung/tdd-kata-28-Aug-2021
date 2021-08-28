import { add } from "./index";

describe("Test add function", () => {
  it("should return 0 for empty string", () => {
    expect(add("")).toEqual(0);
  });

  it("should return the sum of one number", () => {
    expect(add("1")).toEqual(1);
    expect(add("99")).toEqual(99);
  });

  it("should return sum of 2 numbers", () => {
    expect(add("1,2")).toEqual(3);
    expect(add("11,99")).toEqual(110);
  });

  it("should return sum of unknown amount of numbers", () => {
    expect(add("1,1,1,1,1,1,1,1,1,1")).toEqual(10);
    expect(add("1,22,333")).toEqual(356);
  });

  it("should allow new line '\n' and comma ',' as delimiter", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("1\n2\n33")).toBe(36);
  });

  it("should support different custom delimiters", () => {
    expect(add("//;\n1;2;3")).toEqual(6);
    expect(add("//,\n1,2,3")).toEqual(6);
    expect(add("//@\n1@2@3")).toEqual(6);
  });

  it("should throw exception for negative numbers", () => {
    expect(() => add("1,2,-3")).toThrow("Negatives not allowed: -3");
    expect(() => add("-1\n-2,-3")).toThrow("Negatives not allowed: -1,-2,-3");
    expect(() => add("//;\n-1;-2;3")).toThrow("Negatives not allowed: -1,-2");
  });
});
