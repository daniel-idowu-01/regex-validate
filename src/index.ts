export class Validator {
  // Regular expressions
  private alphabetRegex: RegExp = /^[a-zA-Z]$/;
  private emailRegex: RegExp =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  private passwordRegex: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
  private usernameRegex: RegExp = /^[a-zA-Z0-9_]{3,16}$/;
  private urlRegex: RegExp =
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-])\/?$/;
  private phoneRegex: RegExp =
    /^\+?1?\s*\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
  private dateRegex: RegExp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
  private timeRegex: RegExp = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  private ipRegex: RegExp =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  private hexColorRegex: RegExp = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  private creditCardRegex: RegExp =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/;
  private zipCodeRegex: RegExp = /^\d{5}(-\d{4})?$/;
  private ssnRegex: RegExp =
    /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;
  private ipv6Regex: RegExp =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
  private windowsPathRegex: RegExp =
    /^[a-zA-Z]:\\(?:[^\\/:?"<>|\r\n]+\\)[^\\/:?"<>|\r\n]$/;
  private unixPathRegex: RegExp = /^(\/[^/ ]*)+\/?$/;
  private slugRegex: RegExp = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  private htmlTagRegex: RegExp = /<[^>]*>/g;
  private lettersAndSpacesRegex: RegExp = /^[A-Za-z\s]*$/;
  private numbersOnlyRegex: RegExp = /^\d+$/;
  private fileExtensionRegex: RegExp = /^.+\.(jpg|jpeg|png|gif|pdf)$/;
  private youtubeVideoIdRegex: RegExp =
    /http:\/\/(?:youtu\.be\/|(?:[a-z]{2,3}\.)?youtube\.com\/watch(?:\?|#\!)v=([\w-]{11}).*)/gi;
  private decimalRegex: RegExp = /^\d*\.?\d+$/;
  private negativeDecimalRegex: RegExp = /^-?\d*\.?\d+$/;
  private currencyUSDRegex: RegExp = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
  private percentageRegex: RegExp = /^100(\.0{1,2})?$|^\d{1,2}(\.\d{1,2})?$/;
  private phoneUSRegex: RegExp =
    /^\+?1?\s*\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
  private phoneInternationalRegex: RegExp = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  private date_YYYYMMDD_Regex: RegExp =
    /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
  private date_DDMMYYYY_Regex: RegExp =
    /^(0[1-9]|[12]\d|3[01])[- /.](0[1-9]|1[0-2])[- /.]\d{4}$/;
  private time24HRegex: RegExp = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  private time12HRegex: RegExp = /^(0?[1-9]|1[0-2]):[0-5][0-9] ?[AaPp][Mm]$/;
  private dateTime_ISO8601_Regex: RegExp =
    /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/;
  private domainRegex: RegExp =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
  private macAddressRegex: RegExp = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
  private latitudeRegex: RegExp =
    /^(-?[1-8]?\d(?:\.\d{1,6})?|90(?:\.0{1,6})?)$/;
  private longitudeRegex: RegExp =
    /^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,6})?|180(?:\.0{1,6})?)$/;
  private ssnUSRegex: RegExp =
    /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;
  private zipUSRegex: RegExp = /^\d{5}(-\d{4})?$/;
  private noSpecialCharRegex: RegExp = /^[A-Za-z0-9\s]*$/;
  private noConsecutiveSpacesRegex: RegExp = /^(?!.*\s{2})[A-Za-z0-9\s]*$/;

  async isAlphabet(value: string): Promise<boolean> {
    return this.alphabetRegex.test(value);
  }

  async isEmail(value: string): Promise<boolean> {
    return this.emailRegex.test(value);
  }

  async isValidPassword(value: string): Promise<boolean> {
    return this.passwordRegex.test(value);
  }

  async isValidUsername(value: string): Promise<boolean> {
    return this.usernameRegex.test(value);
  }

  async isValidURL(value: string): Promise<boolean> {
    return this.urlRegex.test(value);
  }

  async isValidPhone(value: string): Promise<boolean> {
    return this.phoneRegex.test(value);
  }

  async isValidDate(value: string): Promise<boolean> {
    return this.dateRegex.test(value);
  }

  async isValidTime(value: string): Promise<boolean> {
    return this.timeRegex.test(value);
  }

  async isValidIP(value: string): Promise<boolean> {
    return this.ipRegex.test(value);
  }

  async isValidHexColor(value: string): Promise<boolean> {
    return this.hexColorRegex.test(value);
  }

  async isValidCreditCard(value: string): Promise<boolean> {
    return this.creditCardRegex.test(value);
  }

  async isValidZipCode(value: string): Promise<boolean> {
    return this.zipCodeRegex.test(value);
  }

  async isValidSSN(value: string): Promise<boolean> {
    return this.ssnRegex.test(value);
  }

  async isValidIPv6(value: string): Promise<boolean> {
    return this.ipv6Regex.test(value);
  }

  async isValidWindowsPath(value: string): Promise<boolean> {
    return this.windowsPathRegex.test(value);
  }

  async isValidUnixPath(value: string): Promise<boolean> {
    return this.unixPathRegex.test(value);
  }

  async isValidSlug(value: string): Promise<boolean> {
    return this.slugRegex.test(value);
  }

  async containsHTMLTag(value: string): Promise<boolean> {
    return this.htmlTagRegex.test(value);
  }

  async containsOnlyLettersAndSpaces(value: string): Promise<boolean> {
    return this.lettersAndSpacesRegex.test(value);
  }

  async containsOnlyNumbers(value: string): Promise<boolean> {
    return this.numbersOnlyRegex.test(value);
  }

  async isValidFileExtension(filename: string): Promise<boolean> {
    return this.fileExtensionRegex.test(filename);
  }

  async extractYouTubeVideoId(url: string): Promise<string | null> {
    const match = url.match(this.youtubeVideoIdRegex);
    return match ? match[1] : null;
  }

  async isValidDecimal(input: string): Promise<boolean> {
    return this.decimalRegex.test(input);
  }

  async isValidNegativeDecimal(input: string): Promise<boolean> {
    return this.negativeDecimalRegex.test(input);
  }

  async isValidCurrencyUSD(input: string): Promise<boolean> {
    return this.currencyUSDRegex.test(input);
  }

  async isValidPercentage(input: string): Promise<boolean> {
    return this.percentageRegex.test(input);
  }

  async isValidPhoneUS(input: string): Promise<boolean> {
    return this.phoneUSRegex.test(input);
  }

  async isValidPhoneInternational(input: string): Promise<boolean> {
    return this.phoneInternationalRegex.test(input);
  }

  async isValidDateYYYYMMDD(input: string): Promise<boolean> {
    return this.date_YYYYMMDD_Regex.test(input);
  }

  async isValidDateDDMMYYYY(input: string): Promise<boolean> {
    return this.date_DDMMYYYY_Regex.test(input);
  }

  async isValidTime24H(input: string): Promise<boolean> {
    return this.time24HRegex.test(input);
  }

  async isValidTime12H(input: string): Promise<boolean> {
    return this.time12HRegex.test(input);
  }

  async isValidDateTimeISO8601(input: string): Promise<boolean> {
    return this.dateTime_ISO8601_Regex.test(input);
  }

  async isValidDomain(input: string): Promise<boolean> {
    return this.domainRegex.test(input);
  }

  async isValidMacAddress(input: string): Promise<boolean> {
    return this.macAddressRegex.test(input);
  }

  async isValidLatitude(input: string): Promise<boolean> {
    return this.latitudeRegex.test(input);
  }

  async isValidLongitude(input: string): Promise<boolean> {
    return this.longitudeRegex.test(input);
  }

  async isValidSSNUS(input: string): Promise<boolean> {
    return this.ssnUSRegex.test(input);
  }

  async isValidZipUS(input: string): Promise<boolean> {
    return this.zipUSRegex.test(input);
  }

  async isValidNoSpecialChar(input: string): Promise<boolean> {
    return this.noSpecialCharRegex.test(input);
  }

  async isValidNoConsecutiveSpaces(input: string): Promise<boolean> {
    return this.noConsecutiveSpacesRegex.test(input);
  }
}
