import createSearchString from "./createSearchString";

describe("createSearchString", () => {
  it("should match with one parameter", () => {
    expect(createSearchString({ page: "1" })).toMatch("?page=1");
  });

  it("should match with some parameters", () => {
    expect(
      createSearchString({ page: "1", user: "name", count: "number" })
    ).toMatch("?page=1&user=name&count=number");
  });

  it("should return '?' if use emptey object", () => {
    expect(createSearchString({})).toMatch("?");
  });
});
