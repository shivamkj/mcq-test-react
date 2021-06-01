// Regex patterns
const italic = {
  pattern: /\*(.+)\*/,
  replace: "<i>$1</i>",
};

const bold = {
  pattern: /\*\*(.+)\*\*/,
  replace: "<b>$1</b>",
};

const toHtml = (markdown) => {
  const formatted = markdown
    .replace(bold.pattern, bold.replace)
    .replace(italic.pattern, italic.replace);
  return formatted;
};

export default toHtml;
