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

export function generatePassword(difficulty: string) : string {
  let length;
  let characters;

  switch (difficulty) {
      case 'easy':
          length = 6; // Short length
          characters = 'abcdefghijklmnopqrstuvwxyz'; // Lowercase letters
          break;
      case 'medium':
          length = 10; // Moderate length
          characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // Letters and digits
          break;
      case 'hard':
          length = 20; // Longer length
          characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'; // Letters, digits, and symbols
          break;
      default:
          throw new Error("Invalid difficulty level. Choose 'easy', 'medium', or 'hard'.");
  }

  let password = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
  }

  return password;
}

// Example usage
try {
  const easyPassword = generatePassword('easy');
  const mediumPassword = generatePassword('medium');
  const hardPassword = generatePassword('hard');
  
  console.log(`Easy Password: ${easyPassword}`);
  console.log(`Medium Password: ${mediumPassword}`);
  console.log(`Hard Password: ${hardPassword}`);
} catch (error: any) {
  console.error(error.message);
}