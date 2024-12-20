import { Validator } from "../index";

const validator = new Validator();

describe("isAlphabet", () => {
  it("should return true for single alphabetic characters", async () => {
    expect(await validator.isAlphabet("a")).toBeTruthy();
    expect(await validator.isAlphabet("Z")).toBeTruthy();
  });

  it("should return false for non-alphabetic characters", async () => {
    expect(await validator.isAlphabet("1")).toBeFalsy();
    expect(await validator.isAlphabet("@")).toBeFalsy();
    expect(await validator.isAlphabet("ab")).toBeFalsy();
  });
});

describe("isEmail", () => {
  it("should validate correct email addresses", async () => {
    expect(await validator.isEmail("test@example.com")).toBeTruthy();
    expect(await validator.isEmail("user.name+tag@example.co.uk")).toBeTruthy();
  });

  it("should reject invalid email addresses", async () => {
    expect(await validator.isEmail("invalid.email")).toBeFalsy();
    expect(await validator.isEmail("@example.com")).toBeFalsy();
    expect(await validator.isEmail("test@")).toBeFalsy();
  });
});

describe("isValidPassword", () => {
  it("should validate correct password", async () => {
    expect(await validator.isValidPassword("P@ssw0rd")).toBeTruthy();
    expect(await validator.isValidPassword("NewUser$$**40")).toBeTruthy();
  });

  it("should reject invalid password", async () => {
    expect(await validator.isValidPassword("pass")).toBeFalsy();
    expect(await validator.isValidPassword("1234")).toBeFalsy();
  });
});

describe("isValidUsername", () => {
  it("should validate correct username", async () => {
    expect(await validator.isValidUsername("johndoe34")).toBeTruthy();
    expect(await validator.isValidUsername("danielidowu")).toBeTruthy();
  });

  it("should reject invalid username", async () => {
    expect(await validator.isValidUsername("123e")).toBeFalsy();
    expect(await validator.isValidUsername("*&7w")).toBeFalsy();
  });
});

describe("isValidURL", () => {
  it("should validate correct URLs", async () => {
    expect(await validator.isValidURL("https://example.com")).toBeTruthy();
    expect(
      await validator.isValidURL("http://sub.example.com/path")
    ).toBeTruthy();
    expect(await validator.isValidURL("example.com")).toBeTruthy();
  });

  it("should reject invalid URLs", async () => {
    expect(await validator.isValidURL("not-a-url")).toBeFalsy();
    expect(await validator.isValidURL("http://")).toBeFalsy();
    expect(await validator.isValidURL("https://.com")).toBeFalsy();
  });
});

describe("isValidTime", () => {
  it("should validate correct time formats", async () => {
    expect(await validator.isValidTime("00:00")).toBeTruthy();
    expect(await validator.isValidTime("01:23")).toBeTruthy();
    expect(await validator.isValidTime("12:34")).toBeTruthy();
    expect(await validator.isValidTime("23:59")).toBeTruthy();
  });

  it("should not validate incorrect time formats", async () => {
    expect(await validator.isValidTime("24:00")).toBeFalsy();
    expect(await validator.isValidTime("00:60")).toBeFalsy();
    expect(await validator.isValidTime("abc")).toBeFalsy();
  });
});

describe("isValidIP", () => {
  it("should validate correct IPv4 addresses", async () => {
    expect(await validator.isValidIP("192.168.1.1")).toBeTruthy();
    expect(await validator.isValidIP("10.0.0.1")).toBeTruthy();
    expect(await validator.isValidIP("255.255.255.255")).toBeTruthy();
  });

  it("should not validate incorrect IPv4 addresses", async () => {
    expect(await validator.isValidIP("192.168.1")).toBeFalsy();
    expect(await validator.isValidIP("192.168.1.1.1")).toBeFalsy();
    expect(await validator.isValidIP("256.0.0.0")).toBeFalsy();
    expect(await validator.isValidIP("abc")).toBeFalsy();
  });
});

describe("isValidCreditCard", () => {
  it("should validate correct credit card numbers", async () => {
    expect(await validator.isValidCreditCard("4111111111111111")).toBeTruthy();
    // expect(
    //   await validator.isValidCreditCard("4111-1111-1111-1111")
    // ).toBeTruthy();
    expect(await validator.isValidCreditCard("5555555555554444")).toBeTruthy();
    expect(await validator.isValidCreditCard("5105105105105100")).toBeTruthy();
  });

  it("should not validate incorrect credit card numbers", async () => {
    expect(await validator.isValidCreditCard("4111111111111")).toBeFalsy();
    expect(await validator.isValidCreditCard("4111111111111112")).toBeFalsy();
    expect(await validator.isValidCreditCard("5555555555554443")).toBeFalsy();
    expect(await validator.isValidCreditCard("abc")).toBeFalsy();
  });
});

describe("isValidIPv6", () => {
  it("should validate correct IPv6 addresses", async () => {
    expect(
      await validator.isValidIPv6("2001:0db8:85a3:0000:0000:8a2e:0370:7334")
    ).toBeTruthy();
    expect(
      await validator.isValidIPv6("2001:db8:85a3::8a2e:370:7334")
    ).toBeTruthy();
    expect(await validator.isValidIPv6("fe80::1")).toBeTruthy();
  });

  it("should not validate incorrect IPv6 addresses", async () => {
    expect(
      await validator.isValidIPv6("2001:0db8:85a3:0000:0000:8a2e:0370:7334:1")
    ).toBeFalsy();
    expect(
      await validator.isValidIPv6("2001:0db8:85a3:0000:0000:8a2e:0370")
    ).toBeFalsy();
    expect(
      await validator.isValidIPv6("2001:0db8:85a3:0000:0000:8a2e:0370:7334:")
    ).toBeFalsy();
    expect(await validator.isValidIPv6("abc")).toBeFalsy();
  });
});

describe("extractYouTubeVideoId", () => {
  it("should extract valid YouTube video IDs", async () => {
    expect(
      await validator.extractYouTubeVideoId(
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      )
    ).toBe("dQw4w9WgXcQ");
    expect(
      await validator.extractYouTubeVideoId("https://youtu.be/dQw4w9WgXcQ")
    ).toBe("dQw4w9WgXcQ");
    expect(
      await validator.extractYouTubeVideoId(
        "https://www.youtube.com/embed/dQw4w9WgXcQ"
      )
    ).toBe("dQw4w9WgXcQ");
    expect(
      await validator.extractYouTubeVideoId(
        "https://www.youtube.com/v/dQw4w9WgXcQ"
      )
    ).toBe("dQw4w9WgXcQ");
  });

  it("should not extract invalid YouTube video IDs", async () => {
    expect(
      await validator.extractYouTubeVideoId("https://www.youtube.com/watch?v=")
    ).toBe(null);
    expect(await validator.extractYouTubeVideoId("https://youtu.be/")).toBe(
      null
    );
    expect(
      await validator.extractYouTubeVideoId("https://www.youtube.com/embed/")
    ).toBe(null);
    expect(
      await validator.extractYouTubeVideoId("https://www.youtube.com/v/")
    ).toBe(null);
    expect(await validator.extractYouTubeVideoId("abc")).toBe(null);
  });
});

describe("isValidDateYYYYMMDD", () => {
  it("should validate correct YYYY-MM-DD dates", async () => {
    expect(await validator.isValidDateYYYYMMDD("2023-04-15")).toBeTruthy();
    expect(await validator.isValidDateYYYYMMDD("2024-02-29")).toBeTruthy();
    expect(await validator.isValidDateYYYYMMDD("2023-12-31")).toBeTruthy();
  });

  it("should not validate incorrect YYYY-MM-DD dates", async () => {
    // expect(await validator.isValidDateYYYYMMDD("2023-02-30")).toBeFalsy();
    expect(await validator.isValidDateYYYYMMDD("2023-13-01")).toBeFalsy();
    expect(await validator.isValidDateYYYYMMDD("23-04-15")).toBeFalsy();
    expect(await validator.isValidDateYYYYMMDD("2023-4-1")).toBeFalsy();
  });
});

describe("date_DDMMYYYY_Regex", () => {
  it("should validate correct DD-MM-YYYY dates", async () => {
    expect(await validator.isValidDateDDMMYYYY("15-04-2023")).toBeTruthy();
    expect(await validator.isValidDateDDMMYYYY("29-02-2024")).toBeTruthy();
    expect(await validator.isValidDateDDMMYYYY("31-12-2023")).toBeTruthy();
  });

  it("should not validate incorrect DD-MM-YYYY dates", async () => {
    // expect(await validator.isValidDateDDMMYYYY("30-02-2023")).toBeFalsy();
    expect(await validator.isValidDateDDMMYYYY("01-13-2023")).toBeFalsy();
    expect(await validator.isValidDateDDMMYYYY("4-1-23")).toBeFalsy();
    // expect(await validator.isValidDateDDMMYYYY("15/04/2023")).toBeFalsy();
  });
});

describe("isValidTime24H", () => {
  it("should validate correct 24-hour time formats", async () => {
    expect(await validator.isValidTime24H("00:00")).toBeTruthy();
    expect(await validator.isValidTime24H("12:34")).toBeTruthy();
    expect(await validator.isValidTime24H("23:59")).toBeTruthy();
  });

  it("should not validate incorrect 24-hour time formats", async () => {
    expect(await validator.isValidTime24H("24:00")).toBeFalsy();
    expect(await validator.isValidTime24H("00:60")).toBeFalsy();
    expect(await validator.isValidTime24H("abc")).toBeFalsy();
  });
});

describe("isValidTime12H", () => {
  it("should validate correct 12-hour time formats", async () => {
    expect(await validator.isValidTime12H("1:23 PM")).toBeTruthy();
    expect(await validator.isValidTime12H("12:00 AM")).toBeTruthy();
    expect(await validator.isValidTime12H("11:59 PM")).toBeTruthy();
  });

  it("should not validate incorrect 12-hour time formats", async () => {
    expect(await validator.isValidTime12H("24:00 PM")).toBeFalsy();
    expect(await validator.isValidTime12H("00:60 AM")).toBeFalsy();
    expect(await validator.isValidTime12H("13:00 PM")).toBeFalsy();
    expect(await validator.isValidTime12H("abc")).toBeFalsy();
  });
});

describe("isValidDateTimeISO8601", () => {
  it("should validate correct ISO 8601 date-time formats", async () => {
    expect(
      await validator.isValidDateTimeISO8601("2023-04-15T12:34:56Z")
    ).toBeTruthy();
    expect(
      await validator.isValidDateTimeISO8601("2023-04-15T12:34:56.123Z")
    ).toBeTruthy();
    expect(
      await validator.isValidDateTimeISO8601("2023-04-15T12:34:56+02:00")
    ).toBeTruthy();
    expect(
      await validator.isValidDateTimeISO8601("2023-04-15T12:34:56.123+02:00")
    ).toBeTruthy();
  });

  it("should not validate incorrect ISO 8601 date-time formats", async () => {
    expect(
      await validator.isValidDateTimeISO8601("2023-04-15 12:34:56Z")
    ).toBeFalsy();
    expect(
      await validator.isValidDateTimeISO8601("2023-04-15T12:34Z")
    ).toBeFalsy();
    expect(
      await validator.isValidDateTimeISO8601("2023-04-15T12:34:56.")
    ).toBeFalsy();
    expect(
      await validator.isValidDateTimeISO8601("2023-04-15T12:34:56+2:00")
    ).toBeFalsy();
    expect(await validator.isValidDateTimeISO8601("abc")).toBeFalsy();
  });
});

describe("isValidPhone", () => {
  it("should validate correct phone numbers", async () => {
    expect(await validator.isValidPhone("+1-555-555-5555")).toBeTruthy();
    expect(await validator.isValidPhone("(555) 555-5555")).toBeTruthy();
    expect(await validator.isValidPhone("555.555.5555")).toBeTruthy();
  });

  it("should reject invalid phone numbers", async () => {
    expect(await validator.isValidPhone("abc-def-ghij")).toBeFalsy();
    expect(await validator.isValidPhone("+1+")).toBeFalsy();
  });
});

describe("isValidDate", () => {
  it("should validate correct dates", async () => {
    expect(await validator.isValidDate("2024-02-29")).toBeTruthy(); // Leap year
    expect(await validator.isValidDate("2023-12-31")).toBeTruthy();
    expect(await validator.isValidDate("2024-01-01")).toBeTruthy();
  });

  it("should reject invalid dates", async () => {
    expect(await validator.isValidDate("2024-13-01")).toBeFalsy();
    expect(await validator.isValidDate("2024-04-31")).toBeFalsy();
  });
});

describe("isValidHexColor", () => {
  it("should validate correct hex colors", async () => {
    expect(await validator.isValidHexColor("#ffffff")).toBeTruthy();
    expect(await validator.isValidHexColor("#fff")).toBeTruthy();
    expect(await validator.isValidHexColor("123abc")).toBeTruthy();
  });

  it("should reject invalid hex colors", async () => {
    expect(await validator.isValidHexColor("#ffg")).toBeFalsy();
    expect(await validator.isValidHexColor("#ff")).toBeFalsy();
    expect(await validator.isValidHexColor("#fffffff")).toBeFalsy();
  });
});

describe("isValidZipCode", () => {
  it("should validate correct ZIP codes", async () => {
    expect(await validator.isValidZipCode("12345")).toBeTruthy();
    expect(await validator.isValidZipCode("12345-6789")).toBeTruthy();
  });

  it("should reject invalid ZIP codes", async () => {
    expect(await validator.isValidZipCode("1234")).toBeFalsy();
    expect(await validator.isValidZipCode("123456")).toBeFalsy();
    expect(await validator.isValidZipCode("12345-")).toBeFalsy();
  });
});

describe("isValidSSN", () => {
  it("should validate correct SSNs", async () => {
    expect(await validator.isValidSSN("123-45-6789")).toBeTruthy();
    expect(await validator.isValidSSN("234-56-7890")).toBeTruthy();
  });

  it("should reject invalid SSNs", async () => {
    expect(await validator.isValidSSN("666-45-6789")).toBeFalsy();
    expect(await validator.isValidSSN("000-45-6789")).toBeFalsy();
    expect(await validator.isValidSSN("123-00-6789")).toBeFalsy();
  });
});

describe("isValidWindowsPath", () => {
  it("should validate correct Windows paths", async () => {
    expect(
      await validator.isValidWindowsPath("C:\\Program Files\\App")
    ).toBeTruthy();
    expect(
      await validator.isValidWindowsPath("D:\\Documents\\file")
    ).toBeTruthy();
  });

  it("should reject invalid Windows paths", async () => {
    expect(await validator.isValidWindowsPath("C:")).toBeFalsy();
    expect(await validator.isValidWindowsPath("/usr/local")).toBeFalsy();
    expect(
      await validator.isValidWindowsPath("C:\\Program Files?")
    ).toBeFalsy();
  });
});

describe("isValidUnixPath", () => {
  it("should validate correct Unix paths", async () => {
    expect(await validator.isValidUnixPath("/usr/local/bin")).toBeTruthy();
    expect(await validator.isValidUnixPath("/home/user")).toBeTruthy();
  });

  it("should reject invalid Unix paths", async () => {
    expect(await validator.isValidUnixPath("usr/local")).toBeFalsy();
    expect(await validator.isValidUnixPath("C:\\Windows")).toBeFalsy();
  });
});

describe("isValidSlug", () => {
  it("should validate correct slugs", async () => {
    expect(await validator.isValidSlug("my-blog-post")).toBeTruthy();
    expect(await validator.isValidSlug("article-123")).toBeTruthy();
  });

  it("should reject invalid slugs", async () => {
    expect(await validator.isValidSlug("My Blog Post")).toBeFalsy();
    expect(await validator.isValidSlug("article_123")).toBeFalsy();
    expect(await validator.isValidSlug("-invalid-slug-")).toBeFalsy();
  });
});

describe("containsHTMLTag", () => {
  it("should detect HTML tags", async () => {
    expect(await validator.containsHTMLTag("<p>text</p>")).toBeTruthy();
    expect(await validator.containsHTMLTag("<br/>")).toBeTruthy();
  });

  it("should handle text without HTML tags", async () => {
    expect(await validator.containsHTMLTag("plain text")).toBeFalsy();
    expect(await validator.containsHTMLTag("text > text")).toBeFalsy();
  });
});

describe("containsOnlyLettersAndSpaces", () => {
  it("should validate text with only letters and spaces", async () => {
    expect(
      await validator.containsOnlyLettersAndSpaces("Hello World")
    ).toBeTruthy();
    expect(
      await validator.containsOnlyLettersAndSpaces("OnlyLetters")
    ).toBeTruthy();
  });

  it("should reject text with other characters", async () => {
    expect(
      await validator.containsOnlyLettersAndSpaces("Hello123")
    ).toBeFalsy();
    expect(await validator.containsOnlyLettersAndSpaces("Hello!")).toBeFalsy();
  });
});

describe("containsOnlyNumbers", () => {
  it("should validate strings with only numbers", async () => {
    expect(await validator.containsOnlyNumbers("123")).toBeTruthy();
    expect(await validator.containsOnlyNumbers("0")).toBeTruthy();
  });

  it("should reject strings with non-numbers", async () => {
    expect(await validator.containsOnlyNumbers("123a")).toBeFalsy();
    expect(await validator.containsOnlyNumbers("12.3")).toBeFalsy();
  });
});

describe("isValidFileExtension", () => {
  it("should validate allowed file extensions", async () => {
    expect(await validator.isValidFileExtension("image.jpg")).toBeTruthy();
    expect(await validator.isValidFileExtension("document.pdf")).toBeTruthy();
  });

  it("should reject invalid file extensions", async () => {
    expect(await validator.isValidFileExtension("script.js")).toBeFalsy();
    expect(await validator.isValidFileExtension("image")).toBeFalsy();
  });
});

describe("isValidDecimal", () => {
  it("should validate decimal numbers", async () => {
    expect(await validator.isValidDecimal("123.45")).toBeTruthy();
    expect(await validator.isValidDecimal("0.5")).toBeTruthy();
  });

  it("should reject non-decimal numbers", async () => {
    expect(await validator.isValidDecimal("123")).toBeFalsy();
    expect(await validator.isValidDecimal("-123.45")).toBeFalsy();
  });
});

describe("isValidNegativeDecimal", () => {
  it("should validate negative decimal numbers", async () => {
    expect(await validator.isValidNegativeDecimal("-123.45")).toBeTruthy();
    expect(await validator.isValidNegativeDecimal("-0.5")).toBeTruthy();
  });

  it("should reject positive decimal numbers", async () => {
    expect(await validator.isValidNegativeDecimal("123.45")).toBeFalsy();
    expect(await validator.isValidNegativeDecimal("0.5")).toBeFalsy();
  });
});

describe("isValidCurrencyUSD", () => {
  it("should validate USD currency format", async () => {
    expect(await validator.isValidCurrencyUSD("$123.45")).toBeTruthy();
    expect(await validator.isValidCurrencyUSD("$1,234.56")).toBeTruthy();
  });

  it("should reject invalid USD formats", async () => {
    expect(await validator.isValidCurrencyUSD("123.45")).toBeFalsy();
    expect(await validator.isValidCurrencyUSD("$123.456")).toBeFalsy();
  });
});

describe("isValidPercentage", () => {
  it("should validate percentage values", async () => {
    expect(await validator.isValidPercentage("100%")).toBeTruthy();
    expect(await validator.isValidPercentage("50.5%")).toBeTruthy();
  });

  it("should reject invalid percentage values", async () => {
    expect(await validator.isValidPercentage("101%")).toBeFalsy();
    expect(await validator.isValidPercentage("-1%")).toBeFalsy();
  });
});

describe("isValidDomain", () => {
  it("should validate domain names", async () => {
    expect(await validator.isValidDomain("example.com")).toBeTruthy();
    expect(await validator.isValidDomain("sub.example.com")).toBeTruthy();
  });

  it("should reject invalid domain names", async () => {
    expect(await validator.isValidDomain("example")).toBeFalsy();
    expect(await validator.isValidDomain("-example.com")).toBeFalsy();
  });
});

describe("isValidMacAddress", () => {
  it("should validate MAC addresses", async () => {
    expect(await validator.isValidMacAddress("00:1A:2B:3C:4D:5E")).toBeTruthy();
    expect(await validator.isValidMacAddress("00-1A-2B-3C-4D-5E")).toBeTruthy();
  });

  it("should reject invalid MAC addresses", async () => {
    expect(await validator.isValidMacAddress("00:1A:2B:3C:4D")).toBeFalsy();
    expect(await validator.isValidMacAddress("00:1A:2B:3C:4D:5G")).toBeFalsy();
  });
});

describe("isValidLatitude", () => {
  it("should validate latitude values", async () => {
    expect(await validator.isValidLatitude("45.0")).toBeTruthy();
    expect(await validator.isValidLatitude("-90.0")).toBeTruthy();
  });

  it("should reject invalid latitude values", async () => {
    expect(await validator.isValidLatitude("91.0")).toBeFalsy();
    expect(await validator.isValidLatitude("-91.0")).toBeFalsy();
  });
});

describe("isValidLongitude", () => {
  it("should validate longitude values", async () => {
    expect(await validator.isValidLongitude("180.0")).toBeTruthy();
    expect(await validator.isValidLongitude("-180.0")).toBeTruthy();
  });

  it("should reject invalid longitude values", async () => {
    expect(await validator.isValidLongitude("181.0")).toBeFalsy();
    expect(await validator.isValidLongitude("-181.0")).toBeFalsy();
  });
});

describe("noSpecialCharacter", () => {
  it("should validate strings without special characters", async () => {
    expect(await validator.noSpecialCharacter("Hello123")).toBeTruthy();
    expect(await validator.noSpecialCharacter("Just Text")).toBeTruthy();
  });

  it("should reject strings with special characters", async () => {
    expect(await validator.noSpecialCharacter("Hello!")).toBeFalsy();
    expect(await validator.noSpecialCharacter("Text@123")).toBeFalsy();
  });
});

describe("noConsecutiveSpaces", () => {
  it("should validate strings without consecutive spaces", async () => {
    expect(await validator.noConsecutiveSpaces("Hello World")).toBeTruthy();
    expect(await validator.noConsecutiveSpaces("Just Text")).toBeTruthy();
  });

  it("should reject strings with consecutive spaces", async () => {
    expect(await validator.noConsecutiveSpaces("Hello  World")).toBeFalsy();
    expect(await validator.noConsecutiveSpaces("Text   Here")).toBeFalsy();
  });
});
