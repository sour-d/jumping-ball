const generateHtml = () => {
  const head = '<head><link rel="stylesheet" href="styles.css"></head>';
  const body = '<body><div class="ball"><div></body>';
  const html = `<html>${head}${body}</html>`;
  return html;
};

exports.generateHtml = generateHtml;

