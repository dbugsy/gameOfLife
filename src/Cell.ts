import { LifeStatus } from "./LifeStatus";

export default class Cell {
  public at(position: number): Cell {
    return new Cell();
  }
  public nextRoundStatus(): LifeStatus {
    return LifeStatus.DEAD;
  }
}
