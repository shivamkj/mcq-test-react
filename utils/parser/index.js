import {
  findAnswerIndex,
  getQuestionNumber,
  getQuestion,
  getOptions,
  getAnswer,
  clean,
} from "./extractor";

const parser = (rawText) => {
  let questionNum = 0;
  try {
    const splittedChunk = rawText.split("///");
    const output = {};

    // output["header"] = splittedChunk[0].trim().split(/[\r\n]+/g);

    const questions = [];
    // const instructions = [];

    for (let i = 0; i < splittedChunk.length; i++) {
      const rawText = clean(splittedChunk[i].split(/[\r\n]+/g));
      const question = {};
      const answerIndex = findAnswerIndex(rawText);
      if (answerIndex != null) {
        question["N"] = getQuestionNumber(rawText);
        question["Q"] = getQuestion(rawText, answerIndex);
        question["O"] = getOptions(rawText, answerIndex);
        question["A"] = getAnswer(rawText[answerIndex]);
        //   question['S'] = processAns(listToStr(que[(num+1):])) if num != -1 else None
        questionNum += 1;
        questions.push(question);
      } else if (rawText[0] == "inst") {
        // console.log(`INSTRUCTION ${i} ${rawText}`);
        // const raw = rawText.join("<br/>");
        // const instruction = {};
        // instruction["N"] = "I";
        // instruction["I"] = raw
        //   .match(/(?<=\$inst{\s*).*?(?=\s*}\$)/gs)
        //   .toString()
        //   .trim();
        // instructions.push(rawText);
        // questions.push(instruction);
      } else throw "Unknown Error occured.";
    }

    if (questionNum != questions[questions.length - 1].N)
      throw "Question sequence is incorrect or two questions are not seprated by '///' ";

    output["questions"] = questions;
    // output["instructions"] = instructions;

    return output;
  } catch (err) {
    throw `There is a error in question number ${questionNum + 1}. ${err}.`;
  }
};

export default parser;
