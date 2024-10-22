export function generateRandomNumber(length: number) {
  if (length < 1) {
    throw new Error("Length must be at least 1");
  }

  // Calculate the minimum and maximum values based on the length
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;

  // Generate a random number between min and max
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNum;
}

export function generateAlphanumericWord(length: number) {
  if (length < 1) {
    throw new Error("Length must be at least 1");
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

export function generateAlphanumericWithSymbols(length: number) {
  if (length < 1) {
    throw new Error("Length must be at least 1");
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


const randomWord = generateAlphanumericWithSymbols(16);
console.log(randomWord);