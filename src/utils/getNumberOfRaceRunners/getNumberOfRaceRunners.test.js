import getNumberOfRaceRunners from "./getNumberOfRaceRunners";

const runners = [
  { name: "Unnamed Favourite" },
  { name: "Den" },
  { name: "John" },
];

describe("getNumberOfRaceRunners", () => {
  it("should return count of runners", () => {
    expect(getNumberOfRaceRunners(runners)).toBe(2);
  });

  it("should return 0 if use invalid name", () => {
    expect(getNumberOfRaceRunners([{ name: "Unnamed Favourite" }])).toBe(0);
  });

  it("should return 0 if use emptey array", () => {
    expect(getNumberOfRaceRunners([])).toBe(0);
  });
});
