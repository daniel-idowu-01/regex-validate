import Randomizer from "../index";

describe('Randomizer', () => {
  let randomizer: Randomizer;

  beforeEach(() => {
    randomizer = new Randomizer();
  });

  describe('generateRandomNumber', () => {
    it('should generate a random number with the correct length', async () => {
      const result = await randomizer.generateRandomNumber(5);
      expect(result.toString().length).toBe(5);
    });

    it('should throw an error when length is less than 1', async () => {
      await expect(randomizer.generateRandomNumber(0)).rejects.toThrow(
        'Length must be at least 1.'
      );
    });
  });

  describe('generateAlphanumericWord', () => {
    it('should generate an alphanumeric word with the correct length', async () => {
      const result = await randomizer.generateAlphanumericWord(6);
      expect(result.length).toBe(6);
    });

    it('should throw an error when length is less than 4', async () => {
      await expect(randomizer.generateAlphanumericWord(3)).rejects.toThrow(
        'Length must be greater or equal to 4'
      );
    });
  });

  describe('generateAlphanumericWithSymbols', () => {
    it('should generate an alphanumeric word with symbols and the correct length', async () => {
      const result = await randomizer.generateAlphanumericWithSymbols(10);
      expect(result.length).toBe(10);
      expect(/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(result)).toBe(true);
    });

    it('should throw an error when length is less than 4', async () => {
      await expect(randomizer.generateAlphanumericWithSymbols(3)).rejects.toThrow(
        'Length must be greater or equal to 4'
      );
    });
  });

  describe('generateUsername', () => {
    it('should generate a username based on first and last name', async () => {
      const username = await randomizer.generateUsername('John', 'Doe');
      expect(username).toMatch(/johndoe\d{3}/);
    });

    it('should throw an error when firstName or lastName is missing', async () => {
      await expect(randomizer.generateUsername('', 'Doe')).rejects.toThrow(
        'First Name and Last Name are required'
      );
    });
  });

  describe('generatePassword', () => {
    it('should generate an easy password of length 8', async () => {
      const password = await randomizer.generatePassword('easy');
      expect(password.length).toBe(8);
      expect(/[a-z]/.test(password)).toBe(true);
    });

    it('should generate a medium password of length 12', async () => {
      const password = await randomizer.generatePassword('medium');
      expect(password.length).toBe(12);
      expect(/[A-Z0-9]/.test(password)).toBe(true);
    });

    it('should generate a hard password of length 20', async () => {
      const password = await randomizer.generatePassword('hard');
      expect(password.length).toBe(20);
      expect(/[!@#$%^&*()]/.test(password)).toBe(true);
    });

    it('should throw an error for invalid difficulty level', async () => {
      await expect(randomizer.generatePassword('invalid')).rejects.toThrow(
        "Invalid difficulty level. Choose 'easy', 'medium', or 'hard'."
      );
    });
  });

  describe('isEmail', () => {
    it('should return true for valid email', async () => {
      const result = await randomizer.isEmail('test@example.com');
      expect(result).toBe(true);
    });

    it('should return false for invalid email', async () => {
      const result = await randomizer.isEmail('invalid-email');
      expect(result).toBe(false);
    });
  });

  describe('isValidPassword', () => {
    it('should return true for valid password', async () => {
      const validPassword = 'Password1!';
      const result = await randomizer.isValidPassword(validPassword);
      expect(result).toBe(true);
    });

    it('should return false for invalid password', async () => {
      const invalidPassword = 'short';
      const result = await randomizer.isValidPassword(invalidPassword);
      expect(result).toBe(false);
    });
  });

  describe('isValidPhoneNumber', () => {
    it('should return true for valid US phone number', async () => {
      const result = await randomizer.isValidPhoneNumber('+14155552671');
      expect(result).toBe(true);
    });

    it('should return false for invalid phone number', async () => {
      const result = await randomizer.isValidPhoneNumber('123456');
      expect(result).toBe(false);
    });
  });
});
