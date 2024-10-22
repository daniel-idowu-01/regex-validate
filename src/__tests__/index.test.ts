import { describe, it } from "node:test";
import { generateRandomNumber } from "../index";

describe("test to generate a random number", () => {
  it("should return a number of 4 digits", () => {
    const length = 4;
    const randomNumber = generateRandomNumber(length) as number;

    expect(randomNumber.toString().length).toBe(4);
  });

  it("when user inputs negative digit", () => {
    const length = -4;
    const randomNumber = generateRandomNumber(length) as number;
    expect(randomNumber).toBe("Length must be at least 1");
  });
});
describe("test to generate a random number", () => {
  it("should return a number of 4 digits", () => {
    const length = 4;
    const randomNumber = generateRandomNumber(length) as number;

    expect(randomNumber.toString().length).toBe(4);
  });

  it("when user inputs negative digit", () => {
    const length = -4;
    const randomNumber = generateRandomNumber(length) as number;
    expect(randomNumber).toBe("Length must be at least 1");
  });
});
