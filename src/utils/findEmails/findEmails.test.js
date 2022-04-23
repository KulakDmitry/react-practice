import { removeEmails, findEmails } from "./findEmails";

describe("Check emails", () => {
  const mockStringWithEmails =
    "Sincere@april.biz hello world !! Nathan@yesenia.net";

  describe("Remove email", () => {
    it("should return the string without emails when provided a string with multiple emails.", () => {
      expect(removeEmails(mockStringWithEmails)).toMatch("hello world !!");
    });
  });

  describe("Find email", () => {
    it("should return the first found email when provided a string with multiple emails.", () => {
      expect(findEmails(mockStringWithEmails)).toContain("Sincere@april.biz");
      expect(findEmails(mockStringWithEmails)).toContain("Nathan@yesenia.net");
    });
  });
});
