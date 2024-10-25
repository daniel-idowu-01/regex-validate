import { Validator } from "../index";

const randomizer = new Validator();
describe("Randomizer", () => {

  describe("isEmail", () => {
    it("should return true for valid email", async () => {
      const result = await randomizer.isEmail("test@example.com");
      expect(result).toBe(true);
    });

    it("should return false for invalid email", async () => {
      const result = await randomizer.isEmail("invalid-email");
      expect(result).toBe(false);
    });
  });

  describe("isValidPassword", () => {
    it("should return true for valid password", async () => {
      const validPassword = "Password1!";
      const result = await randomizer.isValidPassword(validPassword);
      expect(result).toBe(true);
    });

    it("should return false for invalid password", async () => {
      const invalidPassword = "short";
      const result = await randomizer.isValidPassword(invalidPassword);
      expect(result).toBe(false);
    });
  });

  describe("isValidPhoneNumber", () => {
    it("should return true for valid US phone number", async () => {
      const result = await randomizer.isValidPhone("+14155552671");
      expect(result).toBe(true);
    });

    it("should return false for invalid phone number", async () => {
      const result = await randomizer.isValidPhone("123456");
      expect(result).toBe(false);
    });
  });
});
