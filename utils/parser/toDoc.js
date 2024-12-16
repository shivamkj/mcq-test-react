export function downloadTestContent(testData, testId) {
  const allQuestions = testData.questions
    .map((v) => {
      const solution = v.S?.trim() != "" ? `\n${v.S}` : "";
      return `${v.N}\n${v.Q}\n${v.O.join("\n")}\n${intToABCD(v.A)}${solution}`;
    })
    .join("\n///\n");
  downloadFile(allQuestions, testId);
}

export function downloadFile(fileData, testId) {
  const blob = new Blob([fileData], { type: "text/json" });

  const a = document.createElement("a");
  const e = new MouseEvent("click", { view: window, bubbles: true, cancelable: false });

  a.download = `${testId}.txt`;
  a.href = window.URL.createObjectURL(blob);
  a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
  a.dispatchEvent(e);
}

function intToABCD(answerIndex) {
  if (answerIndex == 0 || answerIndex == 1 || answerIndex == 2 || answerIndex == 3)
    return String.fromCharCode(65 + answerIndex);
  throw "Error in Answer";
}
