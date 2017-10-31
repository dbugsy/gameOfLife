import {} from "jest";
import Coordinate from "../src/Coordinate";

describe("Coordinate", () => {
  it("is not equal to a different x coordinate", () => {
    const startCoord = new Coordinate(1, 1);
    const endCoord = new Coordinate(2, 1);
    expect(startCoord.equals(endCoord)).toBe(false);
  });

  it("is not equal to a different y coordinate", () => {
    const startCoord = new Coordinate(1, 1);
    const endCoord = new Coordinate(1, 2);
    expect(startCoord.equals(endCoord)).toBe(false);
  });

  it("is equal to the same x and y coordinate", () => {
    const startCoord = new Coordinate(1, 1);
    const endCoord = new Coordinate(1, 1);
    expect(startCoord.equals(endCoord)).toBe(true);
  });
});
