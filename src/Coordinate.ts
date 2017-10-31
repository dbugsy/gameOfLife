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
    return new Coordinate(1, 2);
  }

}
