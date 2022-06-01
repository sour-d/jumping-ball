const assert = require('assert');

class Tag {
  constructor(tag, closingTag = true) {
    this.tag = tag;
    this.attrs = [];
    this.content = [];
    this.closingTag = closingTag;
  }

  equals(otherTag) {
    try {
      assert.deepStrictEqual(this, otherTag);
      return true;
    } catch (error) {
      return false;
    }
  }

  addAttr(attr, value) {
    this.attrs.push({ attr, value });
  }

  addContent(content) {
    this.content.push(content);
  }

  attrToString() {
    return this.attrs.map(({ attr, value }) => {
      return `${attr}="${value}"`;
    }).join(' ');
  }

  toString() {
    const contents = this.content.map(content => content).join('');

    if (!this.closingTag) {
      return `<${this.tag} ${this.attrToString()}/>`;
    }

    return `<${this.tag} ${this.attrToString()}>${contents}</${this.tag}>`;
  }
}

exports.Tag = Tag;
