export default function calculateDistanceInMilesFurlongsYards(
  fullDistanceInYards = 0
) {
  let remainder = fullDistanceInYards;
  const ONE_MILE = 1760; // one mile is equal to 1760 yards
  const ONE_FURLONG = 220; // one furlong is equal to 220 yards
  const miles = Math.trunc(fullDistanceInYards / ONE_MILE); // Math.trunc() method is used to truncate the fractional portion of a number.
  remainder -= miles * ONE_MILE;
  const furlongs = Math.trunc(remainder / ONE_FURLONG);
  remainder -= furlongs * ONE_FURLONG;
  const yards = remainder;
  return `${miles ? `${miles}m` : ""}${furlongs ? ` ${furlongs}f` : ""}${
    yards ? ` ${yards}y` : ""
  }`.trim(); // trim() method removes whitespace from the beginning and end
}
