export class Coordinate {
  y: number;
  x: number;

  constructor(y: number, x: number) {
    this.y = y;
    this.x = x;
  }

  *[Symbol.iterator]() {
    yield this.y;
    yield this.x;
  }
}
