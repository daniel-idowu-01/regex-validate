export function generateRandomNumber(length: number): number {
  if (length < 4) {
    throw new Error("Length must be greater or equal to 4");
  }

  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;

  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNum;
}

export function generateAlphanumericWord(length: number): string {
  if (length < 4) {
    throw new Error("Length must be greater or equal to 4");
  }

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

export function generateAlphanumericWithSymbols(length: number): string {
  if (length < 4) {
    throw new Error("Length must be greater or equal to 4");
  }

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
  let result = "";

  // Ensure at least one symbol is included
  result += characters[Math.floor(Math.random() * 32) + 62];
  length--;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  const reverseString = result.split("").reverse().join("");

  return reverseString;
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

// Example usage
try {
  const easyPassword = generatePassword("easy");
  const mediumPassword = generatePassword("medium");
  const hardPassword = generatePassword("hard");

  console.log(`Easy Password: ${easyPassword}`);
  console.log(`Medium Password: ${mediumPassword}`);
  console.log(`Hard Password: ${hardPassword}`);
} catch (error: any) {
  console.error(error.message);
}
