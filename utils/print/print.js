import template from "./template.ejs";

const print = async (testData, hideAns) => {
  const htmlContent = await ejs.render(template, testData, { async: true });
  await import("../paged.polyfill");

  if (hideAns) {
    const ans = document.getElementsByClassName("answer");
    for (let i = 0; i < ans.length; i++) {
      ans[i].style.display = "none";
    }
  }

  document.body.innerHTML = htmlContent;
  console.log("paged");
  class MyHandler extends Paged.Handler {
    constructor(chunker, polisher, caller) {
      super(chunker, polisher, caller);
    }
    afterRendered(pages) {
      console.log("paged print");
      window.print();
    }
  }
  Paged.registerHandlers(MyHandler);
  return true;
};

export { print };
