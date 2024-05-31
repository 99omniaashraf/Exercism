function wrap(text, tag) {
  return `<${tag}>${text}</${tag}>`;
}
  
function parser(markdown, delimiter, tag) {
  const pattern = new RegExp(`${delimiter}(.+?)${delimiter}`, 'g');
  const replacement = `<${tag}>$1</${tag}>`;
  return markdown.replace(pattern, replacement);
}
  
function parseStrong(markdown) {
  return parser(markdown, '__', 'strong');
}
  
function parseEmphasis(markdown) {
  return parser(markdown, '_', 'em');
}
  
function parseText(markdown, isList) {
  const parsedText = parseEmphasis(parseStrong(markdown));
  return isList ? parsedText : wrap(parsedText, 'p');
}
  
function parseHeader(markdown, isList) {
  const headerMatch = markdown.match(/^#+/);
  if (!headerMatch) return [null, isList];
  
  const headerLevel = headerMatch[0].length;
  if (headerLevel > 6) return [null, isList];
  
  const headerTag = `h${headerLevel}`;
  const headerHtml = wrap(markdown.slice(headerLevel + 1).trim(), headerTag);
  
  return isList ? [`</ul>${headerHtml}`, false] : [headerHtml, false];
}
  
function parseListItem(markdown, isList) {
  if (markdown.startsWith('* ')) {
    const listItemHtml = wrap(parseText(markdown.slice(2).trim(), true), 'li');
    return isList ? [listItemHtml, true] : [`<ul>${listItemHtml}`, true];
  }
  return [null, isList];
}
  
function parseParagraph(markdown, isList) {
  const paragraphHtml = parseText(markdown, false);
  return isList ? [`</ul>${paragraphHtml}`, false] : [paragraphHtml, false];
}
  
function parseLine(markdown, isList) {
  let result, newListStatus;
  
  [result, newListStatus] = parseHeader(markdown, isList);
  if (result !== null) return [result, newListStatus];
  
  [result, newListStatus] = parseListItem(markdown, isList);
  if (result !== null) return [result, newListStatus];
  
  [result, newListStatus] = parseParagraph(markdown, isList);
  if (result !== null) return [result, newListStatus];
  
  throw new Error('Invalid markdown');
}
  
export function parse(markdown) {
  const lines = markdown.split('\n');
  let result = '';
  let isList = false;
  
  for (const line of lines) {
    const [lineResult, newListStatus] = parseLine(line, isList);
    result += lineResult;
    isList = newListStatus;
  }
  
  return isList ? result + '</ul>' : result;
}
