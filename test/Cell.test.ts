import {} from "jest";
import Cell from "../src/Cell";
import { LifeStatus } from "../src/LifeStatus";

describe("Cell", () => {

  describe("will form a grid,", () => {
    describe("with a default size of 1 * 1", () => {
      it("will have a dead cell at position 1", () => {
        const cell = new Cell();
        expect(cell.lifeStatus(1)).toBe(LifeStatus.DEAD);
      });

      it("can be populated", () => {
        const cell = new Cell();
        cell.populate(1);
        expect(cell.lifeStatus(1)).toBe(LifeStatus.ALIVE);
      });

      it("will not survive a step", () => {
        const cell = new Cell();
        cell.populate(1);
        const nextStep = cell.step();
        expect(nextStep.lifeStatus(1)).toBe(LifeStatus.DEAD);
      });
    });

    describe("a 5 * 5 grid", () => {
      it("will have a dead cell at position 25", () => {
        const cell = new Cell(5);
        expect(cell.lifeStatus(25)).toBe(LifeStatus.DEAD);
      });

      it("will have a dead cell at position 1", () => {
        const cell = new Cell(5);
        expect(cell.lifeStatus(1)).toBe(LifeStatus.DEAD);
      });

      it("can be populated at position 25", () => {
        const cell = new Cell(5);
        cell.populate(25);
        expect(cell.lifeStatus(25)).toBe(LifeStatus.ALIVE);
      });

      it("populating cell 25 will not populate cell 1", () => {
        const cell = new Cell(5);
        cell.populate(25);
        expect(cell.lifeStatus(1)).toBe(LifeStatus.DEAD);
      });
    });
  });
});
