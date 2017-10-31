import {} from "jest";
import Cell from "../src/Cell";
import { LifeStatus } from "../src/LifeStatus";

describe("Cell", () => {

  describe("will form a grid,", () => {
    describe("with a default size of 1 * 1", () => {
      it("will have a cell at position 1", () => {
        const cell = new Cell();
        expect(cell.at(1)).toBeInstanceOf(Cell);
      });
    });
  });


  describe("will not survive", () => {
    it("with no neighbours", () => {
      const cell = new Cell();
      expect(cell.nextRoundStatus()).toBe(LifeStatus.DEAD);
    });
  });
});
