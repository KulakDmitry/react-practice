import { removeEmails, findEmails } from "./findEmails";

const string = "Sincere@april.biz hello world !! Nathan@yesenia.net";
describe("Emails check", () => {
  it("should removeEmails", () => {
    expect(removeEmails(string)).toMatch("hello world !!");
  });

  it("should findEmails", () => {
    expect(findEmails(string)).toContain("Sincere@april.biz");
    expect(findEmails(string)).toContain("Nathan@yesenia.net");
  });
});
