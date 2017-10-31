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
    if (this.x === gridSize && this.y === gridSize) { throw new Error("Coordinate is beyond grid"); }
    if (this.y === gridSize) { return new Coordinate(this.x + 1, 1); }
    return new Coordinate(1, this.y + 1);
  }

}
