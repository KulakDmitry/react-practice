import calculateDistanceInMilesFurlongsYards from "./calculateDistanceInMilesFurlongsYards";

describe("calculateDistanceInMilesFurlongsYards", () => {
  it("should return Yards", () => {
    expect(calculateDistanceInMilesFurlongsYards(1)).toBe("1y");
  });

  it("should return empty string if use default parameters", () => {
    expect(calculateDistanceInMilesFurlongsYards()).toBe("");
  });

  it("should return empty string", () => {
    expect(calculateDistanceInMilesFurlongsYards(0)).toBe("");
  });

  it("should return Yards", () => {
    expect(calculateDistanceInMilesFurlongsYards(20)).toBe("20y");
  });

  it("should return Furlongs and Yards", () => {
    expect(calculateDistanceInMilesFurlongsYards(300)).toBe("1f 80y");
  });

  it("should return Miles, Furlongs and Yards", () => {
    expect(calculateDistanceInMilesFurlongsYards(4000)).toBe("2m 2f 40y");
  });
});
