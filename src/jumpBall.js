const { Tag } = require('./tag.js');
const { Ball } = require('./ball.js');
const fs = require('fs');

const generateHead = () => {
  const link = new Tag('link', false);
  link.addAttr('rel', 'stylesheet');
  link.addAttr('href', 'styles.css');

  const head = new Tag('head');
  head.addContent(link);
  return head;
};

const generateBody = () => {
  const div = new Tag('div');
  div.addAttr('class', 'ball');

  const body = new Tag('body');
  body.addContent(div);
  return body;
};

const generateHtml = () => {
  const head = generateHead();
  const body = generateBody();
  const html = new Tag('html');
  html.addContent(head);
  html.addContent(body);

  return html.toString();
};

const moveBall = () => {
  const source = { x: 50, y: 0 };
  const destination = { x: 50, y: 80 };
  const ball = new Ball(source, destination);

  const intervalID = setInterval(() => {
    const nextPosition = ball.moveToNextPoint();
    fs.writeFileSync('styles.css', nextPosition, 'utf8');

    if (ball.reachedDest()) {
      clearInterval(intervalID);
    }
  }, 50);
};

moveBall();
exports.generateHtml = generateHtml;

