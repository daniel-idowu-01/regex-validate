# randomizer-val

A versatile package for generating alphanumeric values, validating data, and generating customizable usernames and passwords.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Generating Random Numbers](#generating-random-numbers)
  - [Generating Alphanumeric Words](#generating-alphanumeric-words)
  - [Generating Alphanumeric Words with Symbols](#generating-alphanumeric-words-with-symbols)
  - [Generating Usernames](#generating-usernames)
  - [Generating Passwords](#generating-passwords)
  - [Validating Email](#validating-email)
  - [Validating Password](#validating-password)
  - [Validating Phone Number](#validating-phone-number)
- [Testing](#testing)
- [License](#license)

## Installation

Install the package using npm:

```bash
npm install randomizer-val

```
## Usage

First, import the Randomizer class:

```bash
import Randomizer from 'randomizer-val';

const randomizer = new Randomizer();

```
### Generating Random Numbers

Generate a random number of specified length:

```bash
const randomNumber = await randomizer.generateRandomNumber(5);
console.log(randomNumber); // Example output: 12345
```
### Generating Alphanumeric Words

Generate a random alphanumeric word of specified length (minimum 4):

```bash
const alphanumericWord = await randomizer.generateAlphanumericWord(6);
console.log(alphanumericWord); // Example output: Ab3dFg
```
### Generating Alphanumeric Words with Symbols

Generate a random alphanumeric word with symbols:

```bash
const wordWithSymbols = await randomizer.generateAlphanumericWithSymbols(10);
console.log(wordWithSymbols); // Example output: Ab#3$Fg9!2
```
### Generating Usernames

Generate a username based on the provided first and last name:

```bash
const username = await randomizer.generateUsername('John', 'Doe');
console.log(username); // Example output: johndoe123
```
### Generating Passwords

Generate passwords with different difficulty levels:

Easy: 8 characters
Medium: 12 characters
Hard: 20 characters

```bash
const password = await randomizer.generatePassword('medium');
console.log(password); // Example output: AbC123XyZ78!
```
### Validating Email

Validate an email format:

```bash
const isValidEmail = await randomizer.isEmail('test@example.com');
console.log(isValidEmail); // true
```
### Validating Password

Check if a password is valid based on the package’s criteria (...)

```bash
const isValidPassword = await randomizer.isValidPassword('Password1!');
console.log(isValidPassword); // true
```
### Validating Phone Number

Validate if a given phone number is a valid US number:

```bash
const isValidPhone = await randomizer.isValidPhoneNumber('+14155552671');
console.log(isValidPhone); // true
```

## Testing
This package uses Jest for testing. You can run the tests with coverage by executing:
```bash
npm run test
```

## License
ISC © Idowu Daniel
```bash

This `README.md` provides detailed instructions for using the package's main features, installation steps, and information on testing and licensing.
```