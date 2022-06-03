const assert = require('assert');
const { Path } = require('./path.js');
const { Style } = require('./style.js');

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

  moveToNextPoint() {
    const path = new Path(this.#currentPoint, this.#destPoint);
    // const nextPoint = path.nextPoint();
    this.#currentPoint = path.nextPoint();
    return this.generateStyle();
  }

  reachedDest() {
    return this.#currentPoint.x === this.#destPoint.x &&
      this.#currentPoint.y === this.#destPoint.y;
  }

  generateStyle() {
    const style = new Style();
    style.addProperty('top', this.#currentPoint.y + '%');
    style.addProperty('left', this.#currentPoint.x + '%');
    style.addProperty('position', 'relative');
    style.addProperty('height', '100px');
    style.addProperty('width', '100px');
    style.addProperty('border-radius', '50%');
    style.addProperty('border', '1px solid gray');
    return '.ball {\n' + style.toString() + '}\n';
  }
}

exports.Ball = Ball;
