const { Tag } = require('../src/tag.js');
const assert = require('assert');

describe('Tag', () => {
  it('Same class object should match', () => {
    const div1 = new Tag('div');
    const div2 = new Tag('div');
    assert.ok(div1.equals(div2));
  });

  it('different objects should not match', () => {
    const div = new Tag('div');
    assert.ok(!div.equals({ tag: 'div' }));
  });

  it('should return html as string', () => {
    const div = new Tag('div');
    let expected = '<div ></div>';
    assert.strictEqual(div.toString(), expected);

    div.addAttr('class', '1');
    div.addContent('content');
    expected = '<div class="1">content</div>';
    assert.strictEqual(div.toString(), expected);
  });

  it('should add attribute', () => {
    const div = new Tag('div');
    let expected = '<div ></div>';
    assert.strictEqual(div.toString(), expected);

    div.addAttr('class', '1');
    expected = '<div class="1"></div>';
    assert.strictEqual(div.toString(), expected);
  });

  it('should add multiple attribute', () => {
    const div = new Tag('div');
    div.addAttr('class', '1');
    div.addAttr('id', '2');
    const expected = '<div class="1" id="2"></div>';
    assert.strictEqual(div.toString(), expected);
  });

  it('should add content in tag', () => {
    const div = new Tag('div');
    div.addContent('content');
    const expected = '<div >content</div>';
    assert.strictEqual(div.toString(), expected);
  });

  it('should return multiple attributes as string', () => {
    const div = new Tag('div');
    div.addAttr('class', '1');
    div.addAttr('id', '2');
    const expected = 'class="1" id="2"';
    assert.strictEqual(div.attrToString(), expected);
  });

});
