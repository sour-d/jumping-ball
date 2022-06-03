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

  #calculateY(x) {
    const YDelta = this.#point2.y - this.#point1.y;
    const XDelta = this.#point2.x - this.#point1.x;
    const slope = YDelta / XDelta;
    return (slope * (x - this.#point1.x)) + this.#point1.y;
  }

  #calculateX(y) {
    const YDelta = this.#point2.y - this.#point1.y;
    const XDelta = this.#point2.x - this.#point1.x;
    const slope = YDelta / XDelta;
    return ((1 / slope) * (y - this.#point1.y)) + this.#point1.x;
  }

  nextPoint() {
    const YDelta = this.#point2.y - this.#point1.y;
    const XDelta = this.#point2.x - this.#point1.x;
    const slope = YDelta / XDelta;
    if (slope > 1 && slope != Infinity) {
      return {
        x: this.#point1.x + 1,
        y: this.#calculateY(this.#point1.x + 1)
      };
    }
    return {
      y: this.#point1.y + 1,
      x: this.#calculateX(this.#point1.x + 1)
    };
  }
}

exports.Path = Path;
