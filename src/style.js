const assert = require('assert');

class Style {
  #styles;

  constructor() {
    this.#styles = [];
  }

  equals(otherStyle) {
    try {
      assert.deepStrictEqual(this, otherStyle);
    } catch (error) {
      return false;
    }
    return true;
  }

  addProperty(property, value) {
    this.#styles.push({ property, value });
  }

  toString() {
    const properties = this.#styles.map(style => {
      return `${style.property}: ${style.value};`;
    });

    return properties.join('\n');
  }
}

exports.Style = Style;
