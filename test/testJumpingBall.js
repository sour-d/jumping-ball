const { generateHtml } = require('../src/jumpBall.js');
const assert = require('assert');

describe('generateHtml', () => {
  it('should return html of the page', () => {
    const expected = [
      '<html >',
      '<head ><link rel="stylesheet" href="styles.css"/></head>',
      '<body ><div class="ball"></div></body>',
      '</html>'
    ];
    assert.deepStrictEqual(generateHtml(), expected.join(''));
  });
});
