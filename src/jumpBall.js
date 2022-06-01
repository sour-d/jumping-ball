const { Tag } = require('./tag.js');

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

exports.generateHtml = generateHtml;

