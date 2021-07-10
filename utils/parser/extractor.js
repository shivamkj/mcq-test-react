import toHtml from "./markdown";

const getQuestionNumber = (rawText) => {
  const questionNum = parseInt(rawText[0]);
  if (isNaN(questionNum)) throw "Question number is missing";
  return questionNum;
};

const findAnswerIndex = (question) => {
  for (let i = question.length - 1; i > 0; i--)
    if (
      question[i] == "A" ||
      question[i] == "B" ||
      question[i] == "C" ||
      question[i] == "D"
    )
      return i;
  return null;
};

const getQuestion = (rawText, answerIndex) => {
  const questionText = rawText.slice(1, answerIndex - 4);
  if (questionText.length == 0) throw "Question not formetted properly";
  return toHtml(questionText.join("<br />"));
};

const getOptions = (rawText, answerIndex) => {
  const options = [
    rawText[answerIndex - 4],
    rawText[answerIndex - 3],
    rawText[answerIndex - 2],
    rawText[answerIndex - 1],
  ];
  if (
    options.includes(undefined) ||
    options.includes("") ||
    options.includes(null)
  )
    throw "Options missing. All options must be present.";
  return options;
};

const getAnswer = (answer) => {
  if (answer == "A" || answer == "B" || answer == "C" || answer == "D")
    return answer.charCodeAt() - 65;
  throw "Error in Answer";
};

const getSolution = (rawText, answerIndex) => {
  const solutionText = rawText.slice(answerIndex+1, undefined);
  if (solutionText.length == 0) return ""
  return toHtml(solutionText.join("<br />"));
}

const clean = (text) => {
  const clean = text.map((line) => line.trim()).filter((line) => Boolean(line))
  return clean;
};

export {
  findAnswerIndex,
  getQuestionNumber,
  getQuestion,
  getOptions,
  getAnswer,
  getSolution,
  clean,
};
