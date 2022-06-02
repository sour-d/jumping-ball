class Ball {
  #initialPoint;
  #angle;

  constructor(initialPoint, angle) {
    this.#initialPoint = initialPoint;
    this.#angle = angle;
  }

  equals(otherBall) {
    return this.#initialPoint.equals(otherBall.#initialPoint)
      && this.#angle === otherBall.#angle;
  }


}

exports.Ball = Ball;
