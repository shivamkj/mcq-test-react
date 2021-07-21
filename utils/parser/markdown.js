// Regex patterns
const italic = {
  pattern: /\*(.+)\*/,
  replace: "<i>$1</i>",
};

const bold = {
  pattern: /\*\*(.+)\*\*/,
  replace: "<b>$1</b>",
};

const underline = {
  pattern: /#(.+)#/,
  replace: "<u>$1</u>",
};

const toHtml = (markdown) => {
  const formatted = markdown
    .replace(bold.pattern, bold.replace)
    .replace(italic.pattern, italic.replace)
    .replace(underline.pattern, underline.replace);
  return formatted;
};

export default toHtml;
