import {} from "jest";
import Cell from "../src/Cell";
import { LifeStatus } from "../src/LifeStatus";

describe("Cell", () => {

  describe("will not survive", () => {
    it("with no neighbours", () => {
      const cell = new Cell();
      expect(cell.nextRoundStatus()).toBe(LifeStatus.DEAD);
    });
  });
});
