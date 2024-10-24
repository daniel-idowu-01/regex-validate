import { randomBytes } from "crypto";

const alphabetRegex = /^[a-zA-Z]$/;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const phoneNumberRegex =
  /^(?:\+\d{1,3}[-. ]?)?(?:\(\d{1,3}\)[-. ]?)?\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,9}$/;

const passwordRegex =
  /^(?=.*[0-9])(?=.*[!@#$%^&*?_\-.,?!:;'“”()\[\]{}+\-×*÷\/=$&*@#%^_|/<>=])[a-zA-Z0-9!@#$%^&*?_\-.,?!:;'“”()\[\]{}+\-×*÷\/=$&*@#%^_|/<>=]{8,30}$/;

// Utility function to generate secure random bytes
export function generateRandomNumber(length: number): number {
  if (length < 1) {
    throw new Error("Length must be greater or equal to 1");
  }

  const min = Math.pow(10, length - 1); 
  const max = Math.pow(10, length) - 1; 

  const randomValue = randomBytes(Math.ceil(length / 2)).toString("hex"); 
  let randomNumber = (parseInt(randomValue, 16) % (max - min + 1)) + min;

  return randomNumber;
}

export function generateAlphanumericWord(
  length: number,
  characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
): string {
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

export function generateAlphanumericWithSymbols(
  length: number,
  characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
): string {
  let newResult;
  if (length < 4) {
    throw new Error("Length must be greater or equal to 4");
  }

  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  // Ensure at least one symbol is included
  let result = symbols[Math.floor(Math.random() * symbols.length)];

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  if (!alphabetRegex.test(result[0])) {
    newResult =
      alphabets[Math.floor(Math.random() * alphabets.length)] + result;
  } else {
    newResult = result;
  }

  console.log(alphabetRegex.test(result[0]));

  return newResult;
}

export function generateUsername(firstName: string, lastName: string): string {
  if (!firstName || !lastName) {
    throw new Error("First Name and Last Name are required");
  }

  const lowerFirstName = firstName.toLowerCase();
  const lowerLastName = lastName.toLowerCase();

  const baseUsername = lowerFirstName + lowerLastName;

  const randomNum = Math.floor(Math.random() * 900) + 100;

  const username = baseUsername + randomNum;

  return username;

  return "";
}

export function generatePassword(difficulty: string): string {
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

export function isEmail(email: string): boolean {
  const isEmail = emailRegex.test(email);

  return isEmail;
}

export function isValidPassword(password: string): boolean {
  const isValidPassword = passwordRegex.test(password);

  return isValidPassword;
}

// Example usage
try {
  const easyPassword = generateRandomNumber(4);

  console.log(`Easy Password11: ${easyPassword}`);
} catch (error: any) {
  console.error(error.message);
}
