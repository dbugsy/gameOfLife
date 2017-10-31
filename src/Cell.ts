import { LifeStatus } from "./LifeStatus";

export default class Cell {
  private currentLifeStatus: LifeStatus;

  constructor(gridSize: number = 1) {
    this.currentLifeStatus = LifeStatus.DEAD;
  }

  public populate(position: number): void {
    this.currentLifeStatus = LifeStatus.ALIVE;
  }

  public lifeStatus(position: number): LifeStatus {
    return this.currentLifeStatus;
  }

  public step(): Cell {
    return new Cell();
  }
}
