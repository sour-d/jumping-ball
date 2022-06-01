class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(anotherPoint) {
    return anotherPoint instanceof Point
      && this.x === anotherPoint.x && this.y === anotherPoint.y;
  }
}

const generateHtml = () => {
  const head = '<head><link rel="stylesheet" href="styles.css"></head>';
  const body = '<body><div class="ball"><div></body>';
  const html = `<html>${head}${body}</html>`;
  return html;
};

exports.Point = Point;
exports.generateHtml = generateHtml;
