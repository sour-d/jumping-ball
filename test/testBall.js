const { Ball } = require('../src/ball.js');
const { Point } = require('../src/point.js');
const assert = require('assert');

describe('Tag', () => {
  it('Same class object should match', () => {
    const point = new Point(0, 0);
    const point1 = new Point(0, 0);
    const ball1 = new Ball(point);
    const ball2 = new Ball(point1);
    assert.ok(ball1.equals(ball2));
  });

  it('different objects should not match', () => {
    const point1 = new Point(0, 0);
    const point2 = new Point(1, 0);
    const ball1 = new Ball(point1);
    const ball2 = new Ball(point2);
    assert.ok(!ball1.equals(ball2));
  });
});
