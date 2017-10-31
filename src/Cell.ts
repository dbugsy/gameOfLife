import { LifeStatus } from "./LifeStatus";

export default class Cell {
  public nextRoundStatus(): LifeStatus {
    return LifeStatus.DEAD;
  }
}
