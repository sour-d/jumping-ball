const { Ball } = require('../src/ball.js');
const assert = require('assert');

describe('Ball', () => {
  it('Same class object should match', () => {
    const ball1 = new Ball({ x: 0, y: 0 }, { x: 5, y: 5 });
    const ball2 = new Ball({ x: 0, y: 0 }, { x: 5, y: 5 });
    assert.ok(ball1.equals(ball2));
  });

  it('different objects should not match', () => {
    const ball1 = new Ball({ x: 0, y: 0 }, { x: 5, y: 5 });
    const ball2 = new Ball({ x: 0, y: 0 }, { x: 4, y: 4 });
    assert.ok(!ball1.equals(ball2));
  });

  it('Same class object should match', () => {
    const ball1 = new Ball({ x: 0, y: 0 }, { x: 5, y: 10 });
    assert.deepStrictEqual(ball1.nextPoint(), { x: 1, y: 2 });
    assert.deepStrictEqual(ball1.nextPoint(), { x: 2, y: 4 });
  });
});
