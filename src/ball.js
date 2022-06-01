class Ball {
  #initalPoint;

  constructor(initalPoint) {
    this.#initalPoint = initalPoint;
  }

  equals(otherBall) {
    return this.#initalPoint.equals(otherBall.#initalPoint);
  }
}

exports.Ball = Ball;
