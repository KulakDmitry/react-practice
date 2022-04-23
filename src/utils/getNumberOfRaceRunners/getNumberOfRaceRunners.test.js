import getNumberOfRaceRunners from "./getNumberOfRaceRunners";

describe("getNumberOfRaceRunners", () => {
  const mockArrayWithRunners = [
    { name: "Unnamed Favourite" },
    { name: "Den" },
    { name: "John" },
    { name: "Carl", nonRunner: true },
    { name: "Mike", nonRunner: false },
  ];

  it("should return count of runners if array with runners is provided", () => {
    expect(getNumberOfRaceRunners(mockArrayWithRunners)).toBe(3);
  });

  it("should return 0 if use invalid name", () => {
    expect(getNumberOfRaceRunners([{ name: "Unnamed Favourite" }])).toBe(0);
  });

  it("should return 0 if use emptey array", () => {
    expect(getNumberOfRaceRunners([])).toBe(0);
  });

  it("should return 0 if nonRunners is true", () => {
    expect(getNumberOfRaceRunners([{ name: "Carl", nonRunner: true }])).toBe(0);
  });

  it("should return 1 if nonRunners is false", () => {
    expect(getNumberOfRaceRunners([{ name: "Mike", nonRunner: false }])).toBe(
      1
    );
  });
});
