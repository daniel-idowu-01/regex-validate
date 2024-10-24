import { parsePhoneNumber } from "libphonenumber-js";

export default class Randomizer {
  alphabetRegex: RegExp;
  emailRegex: RegExp;
  passwordRegex: RegExp;
  constructor() {
    this.alphabetRegex = /^[a-zA-Z]$/;
    this.emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*?_\-.,?!:;'“”()\[\]{}+\-×*÷\/=$&*@#%^_|/<>=])[a-zA-Z0-9!@#$%^&*?_\-.,?!:;'“”()\[\]{}+\-×*÷\/=$&*@#%^_|/<>=]{8,30}$/;
  }

  async generateRandomNumber(length: number): Promise<number> {
    if (length < 1) throw new Error("Length must be at least 1.");

    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;

    // Generate a random number in the range [min, max]
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  async generateAlphanumericWord(
    length: number,
    characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  ): Promise<string> {
    if (length < 4) {
      throw new Error("Length must be greater or equal to 4");
    }
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    return result;
  }

  async generateAlphanumericWithSymbols(
    length: number,
    characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
  ): Promise<string> {
    let result= '';
    if (length < 4) {
      throw new Error("Length must be greater or equal to 4");
    }

    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // Ensure at least one symbol is included
    //result = symbols[Math.floor(Math.random() * symbols.length)];

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    /* if (!this.alphabetRegex.test(result[0])) {
      result = alphabets[Math.floor(Math.random() * alphabets.length)] + result;
    } */

    return result;
  }

  async generateUsername(firstName: string, lastName: string): Promise<string> {
    if (!firstName || !lastName) {
      throw new Error("First Name and Last Name are required");
    }

    const lowerFirstName = firstName.toLowerCase();
    const lowerLastName = lastName.toLowerCase();

    const baseUsername = lowerFirstName + lowerLastName;

    const randomNum = Math.floor(Math.random() * 900) + 100;

    const username = baseUsername + randomNum;

    return username;
  }

  async generatePassword(difficulty: string): Promise<string> {
    let length;
    let characters = "";

    switch (difficulty) {
      case "easy":
        length = 8;
        characters = "abcdefghijklmnopqrstuvwxyz";
        break;
      case "medium":
        length = 12;
        characters =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        break;
      case "hard":
        length = 20;
        characters =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
        break;
      default:
        throw new Error(
          "Invalid difficulty level. Choose 'easy', 'medium', or 'hard'."
        );
    }

    let password = "";

    if (difficulty !== "easy") {
      password += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];
      password += "0123456789"[Math.floor(Math.random() * 10)];
      password += "!@#$%^&*()_+-=[]{}|;:,.<>?"[Math.floor(Math.random() * 32)];
    }

    for (let i = password.length; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    // Shuffle the password to ensure randomness
    password = password
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    return password;
  }

  async isEmail(email: string): Promise<boolean> {
    const isEmail = this.emailRegex.test(email);

    return isEmail;
  }

  async isValidPassword(password: string): Promise<boolean> {
    const isValidPassword = this.passwordRegex.test(password);

    return isValidPassword;
  }

  async isValidPhoneNumber(phoneNumber: string): Promise<boolean> {
    let isValidPhoneNumber;
    //"+14155552671";
    const phoneInfo = parsePhoneNumber(phoneNumber, "US");

    if (phoneInfo.isValid()) {
      isValidPhoneNumber = true;
    } else {
      isValidPhoneNumber = false;
    }

    return isValidPhoneNumber;
  }
}
