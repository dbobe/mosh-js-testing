import { describe, test, it, expect } from "vitest";
import { max, fizzBuzz, calculateAverage } from "../intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });
  it("should return the second argument if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });
  it("should return the first argument if arguments are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz if argument is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return Fizz if argument is divisible by 3", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });
  it("should return Buzz if argument is divisible by 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });
  it("should return argument as string if argument is not divisible by 3 or 5", () => {
    expect(fizzBuzz(4)).toBe("4");
  });
});

describe("calculateAverage", () => {
  it("should return NaN if given an empty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });
  it("should calculate the average of an array with a single element", () => {
    expect(calculateAverage([1])).toBe(1);
  });
  it("should calculate the average of an array with 2 elements", () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });
  it("should calculate the average of an array with 3 elements", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});
