import {} from "jest";
import Coordinate from "../src/Coordinate";

describe("Coordinate", () => {
  it("is not equal to a different coordinate", () => {
    const startCoord = new Coordinate(1,1);
    const endCoord = new Coordinate(2,2);
    expect(startCoord.equals(endCoord)).toBe(false);
  })
})