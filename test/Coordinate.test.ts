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

  describe("on a 5 * 5 orthogonal grid", () => {
    it("the next coordinate after (1,1) is (1,2)", () => {
      const coord = new Coordinate(1, 1);
      const expectedNextCoord = new Coordinate(1, 2);
      expect(coord.next(5).equals(expectedNextCoord)).toBe(true);
    });
  });
});
