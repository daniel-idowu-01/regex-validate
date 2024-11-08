export class Validator {
  // Regular expressions
  private alphabetRegex: RegExp = /^[a-zA-Z]$/;
  private emailRegex: RegExp =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  private passwordRegex: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()])[A-Za-z\d@$!%*?&^#()]{8,}$/;
  private usernameRegex: RegExp = /^[a-zA-Z_][a-zA-Z0-9_]{2,15}$/;
  private urlRegex: RegExp =
    /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/[^\s]*)?$/;
  private phoneRegex: RegExp =
    /^\+?(?:\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,4})$/;
  private dateRegex: RegExp =
    /^(?:(?!0000)\d{4})-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31|02-29)$/;
  private timeRegex: RegExp = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  private ipRegex: RegExp =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  private hexColorRegex: RegExp = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  private creditCardRegex: RegExp =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})[- ]?(\d{4})?$/;
  private zipCodeRegex: RegExp = /^\d{5}(-\d{4})?$/;
  private ssnRegex: RegExp =
    /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;
  private ipv6Regex: RegExp =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
  private windowsPathRegex: RegExp =
    /^[a-zA-Z]:\\(?:[^\\/:*?"<>|\r\n]+\\)*[^\\/:*?"<>|\r\n]*$/;
  private unixPathRegex: RegExp = /^\/(?:[^/\0]+\/)*[^/\0]*$/;
  private slugRegex: RegExp = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  private htmlTagRegex: RegExp =
    /<([a-z]+)(\s[^>]*)?>.*?<\/\1>|<([a-z]+)(\s[^>]*)?\/?>/i;
  private lettersAndSpacesRegex: RegExp = /^[A-Za-z\s]*$/;
  private numbersOnlyRegex: RegExp = /^\d+$/;
  private fileExtensionRegex: RegExp = /^[^/]+?\.(jpg|jpeg|png|gif|pdf)$/;
  private youtubeVideoIdRegex: RegExp =
    /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|(?:[a-z]{2,3}\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=|.+\/|.*[?&]v=))([\w-]{11})/;
  private decimalRegex: RegExp = /^\d+\.\d+$/;
  private negativeDecimalRegex: RegExp = /^-\d+\.\d+$/;
  private currencyUSDRegex: RegExp = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
  private percentageRegex: RegExp = /^(100(\.00?)?|[1-9]?\d(\.\d{1,2})?)%?$/;
  private date_YYYYMMDD_Regex: RegExp =
    /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
  private date_DDMMYYYY_Regex: RegExp =
    /^(0[1-9]|[12]\d|3[01])[- /.](0[1-9]|1[0-2])[- /.]\d{4}$/;
  private time24HRegex: RegExp = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  private time12HRegex: RegExp = /^(0?[1-9]|1[0-2]):[0-5][0-9] ?[AaPp][Mm]$/;
  private dateTime_ISO8601_Regex: RegExp =
    /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/;
  private domainRegex: RegExp =
    /^(?!-)[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}(?<!-)$/;
  private macAddressRegex: RegExp = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
  private latitudeRegex: RegExp = /^-?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
  private longitudeRegex: RegExp =
    /^-?(180(\.0+)?|1[0-7]\d(\.\d+)?|[1-9]?\d(\.\d+)?)$/;
  private noSpecialCharRegex: RegExp = /^[A-Za-z0-9\s]*$/;
  private noConsecutiveSpacesRegex: RegExp = /^(?!.*\s{2})[A-Za-z0-9\s]*$/;

  async isAlphabet(value: string): Promise<boolean> {
    return this.alphabetRegex.test(value);
  } //

  async isEmail(value: string): Promise<boolean> {
    return this.emailRegex.test(value);
  } //

  async isValidPassword(value: string): Promise<boolean> {
    return this.passwordRegex.test(value);
  } //

  async isValidUsername(value: string): Promise<boolean> {
    return this.usernameRegex.test(value);
  } //

  async isValidURL(value: string): Promise<boolean> {
    return this.urlRegex.test(value);
  } //

  async isValidPhone(value: string): Promise<boolean> {
    return this.phoneRegex.test(value);
  } //

  async isValidDate(value: string): Promise<boolean> {
    return this.dateRegex.test(value);
  } //

  async isValidTime(value: string): Promise<boolean> {
    return this.timeRegex.test(value);
  } // **

  async isValidIP(value: string): Promise<boolean> {
    return this.ipRegex.test(value);
  } // **

  async isValidHexColor(value: string): Promise<boolean> {
    return this.hexColorRegex.test(value);
  } //

  async isValidCreditCard(value: string): Promise<boolean> {
    if (!this.creditCardRegex.test(value)) {
      return false;
    }

    // Luhn algorithm implementation
    const sanitizedNumber = value.replace(/\D/g, "");

    if (sanitizedNumber.length < 2) {
      return false;
    }

    let sum = 0;
    let shouldDouble = false;

    // Process digits from right to left
    for (let i = sanitizedNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(sanitizedNumber.charAt(i), 10);

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  } // **

  async isValidZipCode(value: string): Promise<boolean> {
    return this.zipCodeRegex.test(value);
  } //

  async isValidSSN(value: string): Promise<boolean> {
    return this.ssnRegex.test(value);
  } //

  async isValidIPv6(value: string): Promise<boolean> {
    return this.ipv6Regex.test(value);
  } // **

  async isValidWindowsPath(value: string): Promise<boolean> {
    return this.windowsPathRegex.test(value);
  } //

  async isValidUnixPath(value: string): Promise<boolean> {
    return this.unixPathRegex.test(value);
  } //

  async isValidSlug(value: string): Promise<boolean> {
    return this.slugRegex.test(value);
  } //

  async containsHTMLTag(value: string): Promise<boolean> {
    return this.htmlTagRegex.test(value);
  } //

  async containsOnlyLettersAndSpaces(value: string): Promise<boolean> {
    return this.lettersAndSpacesRegex.test(value);
  } //

  async containsOnlyNumbers(value: string): Promise<boolean> {
    return this.numbersOnlyRegex.test(value);
  } //

  async isValidFileExtension(filename: string): Promise<boolean> {
    return this.fileExtensionRegex.test(filename);
  } //

  async extractYouTubeVideoId(url: string): Promise<string | null> {
    const match = url.match(this.youtubeVideoIdRegex);
    return match ? match[1] : null;
  } //

  async isValidDecimal(value: string): Promise<boolean> {
    return this.decimalRegex.test(value);
  } //

  async isValidNegativeDecimal(value: string): Promise<boolean> {
    return this.negativeDecimalRegex.test(value);
  } //

  async isValidCurrencyUSD(value: string): Promise<boolean> {
    return this.currencyUSDRegex.test(value);
  } //

  async isValidPercentage(value: string): Promise<boolean> {
    return this.percentageRegex.test(value);
  } //

  async isValidDateYYYYMMDD(value: string): Promise<boolean> {
    return this.date_YYYYMMDD_Regex.test(value);
  }

  async isValidDateDDMMYYYY(value: string): Promise<boolean> {
    return this.date_DDMMYYYY_Regex.test(value);
  }

  async isValidTime24H(value: string): Promise<boolean> {
    return this.time24HRegex.test(value);
  }

  async isValidTime12H(value: string): Promise<boolean> {
    return this.time12HRegex.test(value);
  }

  async isValidDateTimeISO8601(value: string): Promise<boolean> {
    return this.dateTime_ISO8601_Regex.test(value);
  }

  async isValidDomain(value: string): Promise<boolean> {
    return this.domainRegex.test(value);
  } //

  async isValidMacAddress(value: string): Promise<boolean> {
    return this.macAddressRegex.test(value);
  } //

  async isValidLatitude(value: string): Promise<boolean> {
    return this.latitudeRegex.test(value);
  } //

  async isValidLongitude(value: string): Promise<boolean> {
    return this.longitudeRegex.test(value);
  } //

  async noSpecialCharacter(value: string): Promise<boolean> {
    return this.noSpecialCharRegex.test(value);
  } //

  async noConsecutiveSpaces(value: string): Promise<boolean> {
    return this.noConsecutiveSpacesRegex.test(value);
  } //
}
