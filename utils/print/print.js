import template from "./template.ejs";

const print = async (testData, HideAns) => {
  const htmlContent = await ejs.render(template, testData, { async: true });
  const name = HideAns ? "print" : "printNoAns";
  const printWindow = window.open("", name, "height=800,width=800");
  printWindow.document.write(htmlContent);
  return true;
};

export { print };
