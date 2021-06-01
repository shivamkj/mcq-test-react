import { useEffect, useState } from "react";
import showConfetti from "../../utils/confetti";
import showToast from "../../utils/toast";

const options = ["A", "B", "C", "D"];

const Question = ({ question, isFinished, onFinish }) => {
  const [selectedOption, setSelectedOption] = useState(undefined);

  useEffect(() => {
    // if question is finished and no answer is selected , then show right answer
    if (isFinished == true && selectedOption == undefined) {
      setSelectedOption(question.A + 1);
    }
    // if next question is starting, then remove cureently selected
    else if (isFinished == false) setSelectedOption(undefined);
  }, [isFinished]);

  const onOptionSelect = (selectedIndex) => {
    // return if question is already answered or time over
    if (selectedOption != undefined || isFinished == true) return;
    setSelectedOption(selectedIndex);
    const isCorrect = question.A + 1 == selectedIndex;
    onFinish(isCorrect, selectedIndex);
  };

  const getClass = (index) => {
    if (index - 1 == question.A) return "correct";
    else return index == selectedOption ? "wrong" : "";
  };

  return (
    <div className="absolute left-0 right-0 mx-auto sm:max-w-xl lg:max-w-3xl mt-4 sm:mt-8 lg:mt-12 p-4 md:p-10 lg:px-24 text-justify bg-indigo-600 sm:border border-white sm:shadow-lg text-white sm:rounded-lg">
      <div
        className="text-xl md:text-2xl pb-4 text-white que-before font-semibold"
        data-que={question.N}
        dangerouslySetInnerHTML={{ __html: question.Q }}
      />
      {options.map((option, index) => (
        <div
          className={`opt ${selectedOption && getClass(index + 1)}`}
          data-opt={option}
          onClick={() => onOptionSelect(index + 1)}
          key={index}
        >
          {question.O[index]}
        </div>
      ))}
      <div style={{ animation: "fadein 0.5s, fadeout 0.5s 2.5s" }}>1</div>
    </div>
  );
};

export default Question;
