class Point {
  #x;
  #y;
  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  equals(anotherPoint) {
    return anotherPoint instanceof Point
      && this.#x === anotherPoint.#x && this.#y === anotherPoint.#y;
  }
}

exports.Point = Point;
