# regex-validate

A comprehensive TypeScript validation utility class that provides a wide range of validation methods using regular expressions. This class offers validation for common data formats including emails, passwords, dates, phone numbers, and various other standard formats.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Available Validators](#available-validators)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the package using npm:

```bash
npm install regex-validate
```

```bash
// Import the Validator class
import { Validator } from 'regex-validate';


// Create a new instance
const validator = new Validator();
```

## Usage

### Avaliable Validators

#### Basic Validation

- isAlphabet(value: string): Validates single alphabetic characters
- containsOnlyLettersAndSpaces(value: string): Validates strings with only letters and spaces
- containsOnlyNumbers(value: string or number): Validates numeric-only strings
- isValidNoSpecialChar(value: string): Validates strings without special characters
- isValidNoConsecutiveSpaces(value: string): Validates strings without consecutive

### User Data Validation

- isEmail(value: string): Validates email addresses
- isValidPassword(value: string): Validates strong passwords
- isValidUsername(value: string): Validates usernames
- isValidSSN(value: string): Validates Social Security Numbers

### Web-Related Validation

- isValidURL(value: string): Validates URLs
- isValidDomain(value: string): Validates domain names
- containsHTMLTag(value: string): Checks for HTML tags
- isValidSlug(value: string): Validates URL slugs
- extractYouTubeVideoId(url: string): Extracts YouTube video IDs

### Date and Time Validation

- isValidDate(value: string): Validates dates
- isValidTime(value: string): Validates times
- isValidDateYYYYMMDD(value: string): Validates dates in YYYY-MM-DD format
- isValidDateDDMMYYYY(value: string): Validates dates in DD-MM-YYYY format
- isValidTime24H(value: string): Validates 24-hour time format
- isValidTime12H(value: string): Validates 12-hour time format
- isValidDateTimeISO8601(value: string): Validates ISO8601 datetime format

### Number and Currency Validation

- isValidDecimal(value: string or number): Validates decimal numbers
- isValidNegativeDecimal(value: string): Validates negative decimal numbers
- isValidCurrencyUSD(value: string): Validates USD currency format
- isValidPercentage(value: string): Validates percentage values

### Phone Number Validation

- isValidPhone(value: string): Validates phone numbers

### Technical Validation

- isValidIP(value: string): Validates IPv4 addresses
- isValidIPv6(value: string): Validates IPv6 addresses
- isValidMacAddress(value: string): Validates MAC addresses
- isValidWindowsPath(value: string): Validates Windows file paths
- isValidUnixPath(value: string): Validates Unix file paths

### Geographic Validation

- isValidLatitude(value: string): Validates latitude coordinates
- isValidLongitude(value: string): Validates longitude coordinates
- isValidZipCode(value: string): Validates zip codes

### File and Color Validation

- isValidFileExtension(value: string): Validates common file extensions (jpg, jpeg, png, gif, pdf)
- isValidHexColor(value: string): Validates hexadecimal color codes

### Payment Validation

- isValidCreditCard(value: string): Validates credit card numbers

## Examples
<b>Validating User Registration Data</b>

```bash
const validator = new Validator();

async function validateUserRegistration(userData: {
    email: string,
    password: string,
    username: string,
    phone: string
}) {
    
    const isValid = {
        email: await validator.isEmail(userData.email),
        password: await validator.isValidPassword(userData.password),
        username: await validator.isValidUsername(userData.username),
        phone: await validator.isValidPhoneInternational(userData.phone)
    };
    
    return Object.values(isValid).every(Boolean);
}
```
<b>Validating Geographic Coordinates</b>
```
const validator = new Validator();

async function validateCoordinates(lat: string, lng: string) {
    
    const isValidCoordinate = await Promise.all([
        validator.isValidLatitude(lat),
        validator.isValidLongitude(lng)
    ]);
    
    return isValidCoordinate.every(Boolean);
}
```



## Contributing
Feel free to contribute to this project by:

- Adding new validation patterns
- Improving existing regular expressions
- Adding new validation methods
- Optimizing performance
- Adding tests

Please ensure that any new validators follow the existing pattern of:

- Using TypeScript
- Implementing async methods
- Including proper documentation
- Following the established naming conventions

## License
ISC © Idowu Daniel
```bash
This `README.md` provides detailed instructions for using the package's main features, installation steps, and information on testing and licensing.
```