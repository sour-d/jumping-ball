const { Path } = require('../src/path.js');
const assert = require('assert');

describe('Path', () => {
  it('Same class object should match', () => {
    const path1 = new Path({ x: 0, y: 0 }, { x: 2, y: 3 });
    const path2 = new Path({ x: 0, y: 0 }, { x: 2, y: 3 });
    assert.ok(path1.equals(path2));
  });

  it('different objects should not match', () => {
    const path1 = new Path({ x: 0, y: 0 }, { x: 2, y: 3 });
    const path2 = new Path({ x: 0, y: 0 }, { x: 3, y: 3 });
    assert.ok(!path1.equals(path2));
  });

  // it('Same class object should match', () => {
  //   const path1 = new Path({ x: 0, y: 0 }, { x: 3, y: 3 });
  //   assert.strictEqual(path1.calculateY(1), 1);
  // });
});
