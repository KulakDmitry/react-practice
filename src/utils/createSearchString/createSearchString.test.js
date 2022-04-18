import createSearchString from "./createSearchString";

describe("createSearchString", () => {
  it("should return a correct search string when one parameters provided", () => {
    expect(createSearchString({ page: "1" })).toMatch("?page=1");
  });

  it("should return a correct search string when multiple parameters provided", () => {
    expect(
      createSearchString({ page: "1", user: "name", count: "number" })
    ).toMatch("?page=1&user=name&count=number");
  });

  it("should return '?' if use emptey object", () => {
    expect(createSearchString({})).toMatch("?");
  });
});
