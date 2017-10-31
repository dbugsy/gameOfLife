import { LifeStatus } from "./LifeStatus";

export default class Cell {
  private currentLifeStatus: LifeStatus;
  private next: Cell;

  constructor(gridSize: number = 1, count?: number) {
    const numberOfCells = gridSize * gridSize;
    const remainingCells = (count || numberOfCells) - 1;
    this.currentLifeStatus = LifeStatus.DEAD;
    if (remainingCells > 0) { this.next = new Cell(gridSize, remainingCells); }
  }

  public populate(position: number): void {
    const target = this._target(position);
    target.currentLifeStatus = LifeStatus.ALIVE;
  }

  public lifeStatus(position: number): LifeStatus {
    const target = this._target(position);
    return target.currentLifeStatus;
  }

  public step(): Cell {
    return new Cell();
  }

  private _target(position: number, count: number = 1): Cell {
    if (count !== position) { return this.next._target(position, count + 1); }
    return this;
  }
}
