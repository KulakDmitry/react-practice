import calculateDistanceInMilesFurlongsYards from "./calculateDistanceInMilesFurlongsYards";

describe("calculateDistanceInMilesFurlongsYards", () => {
  it("should return Yards when full distance in yards is 1", () => {
    expect(calculateDistanceInMilesFurlongsYards(1)).toBe("1y");
  });

  it("should return an empty string when full distance in yards is 0", () => {
    expect(calculateDistanceInMilesFurlongsYards(0)).toBe("");
  });

  it("should return Yards when full distance in yards is 20", () => {
    expect(calculateDistanceInMilesFurlongsYards(20)).toBe("20y");
  });

  it("should return Furlongs and Yards when full distance in yards is 300", () => {
    expect(calculateDistanceInMilesFurlongsYards(300)).toBe("1f 80y");
  });

  it("should return Miles, Furlongs and Yards when full distance in yards is 400", () => {
    expect(calculateDistanceInMilesFurlongsYards(4000)).toBe("2m 2f 40y");
  });
});
