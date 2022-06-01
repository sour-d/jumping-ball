const { Point, generateHtml } = require('../src/point.js');
const assert = require('assert');

describe('Point', () => {
  it('Same class object should match', () => {
    const point1 = new Point(0, 0);
    const point2 = new Point(0, 0);
    assert.ok(point1.equals(point2));
  });

  it('different objects should not match', () => {
    const point1 = new Point(0, 0);
    assert.ok(!point1.equals({ x: 0, y: 0 }));
  });
});

describe('generateHtml', () => {
  it('should return html of the page', () => {
    const expected = [
      '<html>',
      '<head><link rel="stylesheet" href="styles.css"></head>',
      '<body><div class="ball"><div></body>',
      '</html>'
    ];
    assert.deepStrictEqual(generateHtml(), expected.join(''));
  });
});
