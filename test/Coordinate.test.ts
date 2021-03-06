import {} from "jest";
import Coordinate from "../src/Coordinate";
import { Neighbour } from '../src/Neighbour';

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
    it("does not accept grid size less than 1", () => {
      const coord = new Coordinate(1, 1);
      expect( () => coord.next(0)).toThrow("gridSize must be greater than 0");
    });

    it("the next coordinate after (1,1) is (1,2)", () => {
      const coord = new Coordinate(1, 1);
      const expectedNextCoord = new Coordinate(1, 2);
      expect(coord.next(5).equals(expectedNextCoord)).toBe(true);
    });

    it("the next coordinate after (1,2) is (1,3)", () => {
      const coord = new Coordinate(1, 2);
      const expectedNextCoord = new Coordinate(1, 3);
      expect(coord.next(5).equals(expectedNextCoord)).toBe(true);
    });

    it("the next coordinate after (1,5) is (2,1)", () => {
      const coord = new Coordinate(1, 5);
      const expectedNextCoord = new Coordinate(2, 1);
      expect(coord.next(5).equals(expectedNextCoord)).toBe(true);
    });

    it("has no coordinate after (5,5)", () => {
      const coord = new Coordinate(5, 5);
      expect( () => coord.next(5)).toThrow("Coordinate is beyond grid");
    });

    describe("locates neighbours", () => {
      it("top left", () => {
        const coord = new Coordinate(3,3);
        const expectedTopLeft = new Coordinate(2,2);
        expect(coord.neighbour(Neighbour.TOP_LEFT).equals(expectedTopLeft)).toBe(true);
      })
    });
  });
});
