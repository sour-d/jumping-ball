const { Path } = require('./path.js');

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

  createPath(anotherPoint) {
    const point1 = { x: this.#x, y: this.#y };
    const point2 = { x: anotherPoint.#x, y: anotherPoint.#y };
    return new Path(point1, point2);
  }
}

exports.Point = Point;
