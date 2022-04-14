export function getNumberOfRaceRunners(allRunners) {
  return allRunners.filter(
    (runner) => !runner.nonRunner && runner.name !== "Unnamed Favourite"
  ).length;
}

module.exports = getNumberOfRaceRunners;
