export default class Coordinate {
  protected x: number;
  protected y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public equals(other: Coordinate): boolean {
    return this.x === other.x && this.y === other.y;
  }

  public next(gridSize: number): Coordinate {
    this._validate(gridSize);
    if (this.y === gridSize) { return new Coordinate(this.x + 1, 1); }
    return new Coordinate(1, this.y + 1);
  }

  private _validate(gridSize: number): void {
    if (gridSize < 1) { throw new Error("gridSize must be greater than 0"); }
    if (this.x === gridSize && this.y === gridSize) { throw new Error("Coordinate is beyond grid"); }
  }
}
