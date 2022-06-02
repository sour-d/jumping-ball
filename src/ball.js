const assert = require('assert');
const { Path } = require('./path.js');

class Ball {
  #initialPoint;
  #currentPoint;
  #destPoint;

  constructor(initialPoint, destinationPoint) {
    this.#initialPoint = initialPoint;
    this.#destPoint = destinationPoint;
    this.#currentPoint = initialPoint;
  }

  equals(otherBall) {
    try {
      assert.deepStrictEqual(this.#initialPoint, otherBall.#initialPoint);
      assert.deepStrictEqual(this.#destPoint, otherBall.#destPoint);
      assert.deepStrictEqual(this.#currentPoint, otherBall.#currentPoint);
    } catch (err) {
      return false;
    }
    return true;
  }

  nextPoint() {
    const path = new Path(this.#initialPoint, this.#destPoint);
    this.#currentPoint.x += 1;
    this.#currentPoint.y = path.calculateY(this.#currentPoint.x);

    return { x: this.#currentPoint.x, y: this.#currentPoint.y };
  }

}

exports.Ball = Ball;
