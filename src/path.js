class Path {
  #point1;
  #point2;

  constructor(p1, p2) {
    this.#point1 = {
      x: p1.x,
      y: p1.y
    };

    this.#point2 = {
      x: p2.x,
      y: p2.y
    };
  }

  equals(otherPath) {
    return this.#point1.x === otherPath.#point1.x &&
      this.#point1.y === otherPath.#point1.y &&
      this.#point2.x === otherPath.#point2.x &&
      this.#point2.y === otherPath.#point2.y;
  }
}

exports.Path = Path;
