import template from "./template.ejs";

const print = async (testData, hideAns) => {
  const htmlContent = await ejs.render(template, testData, { async: true });
  const { Handler, registerHandlers } = await import("pagedjs");

  if (hideAns) {
    const ans = document.getElementsByClassName("answer");
    for (let i = 0; i < ans.length; i++) {
      ans[i].style.display = "none";
    }
  }

  document.body.innerHTML = htmlContent;
  class MyHandler extends Handler {
    constructor(chunker, polisher, caller) {
      super(chunker, polisher, caller);
    }
    afterRendered(pages) {
      window.print();
    }
  }
  registerHandlers(MyHandler);
  return true;
};

export { print };
