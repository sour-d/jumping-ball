const { Style } = require('../src/style.js');
const assert = require('assert');

describe('Tag', () => {
  it('Same class object should match', () => {
    const style1 = new Style();
    const style2 = new Style();
    assert.ok(style1.equals(style2));
  });

  it('different objects should not match', () => {
    const style = new Style();
    assert.ok(!style.equals({}));
  });

  it('Should add property', () => {
    const style = new Style();
    assert.strictEqual(style.toString(), '');

    style.addProperty('size', '10px');
    assert.strictEqual(style.toString(), 'size: 10px;');

    style.addProperty('height', '100px');
    assert.strictEqual(style.toString(), 'size: 10px;\nheight: 100px;');
  });

});
