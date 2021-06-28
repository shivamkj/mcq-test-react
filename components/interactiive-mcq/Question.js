import { useEffect, useState } from "react";

const OPTIONS = ["A", "B", "C", "D"];

const correctOptionStyle = {
  backgroundColor: "#17da99",
  animation: "pulse 0.3s",
};
const wrongOptionStyle = {
  backgroundColor: "#fc308c",
  animation: "pulse 0.3s",
};

const Question = ({
  question,
  isFinished,
  onFinish,
  className,
  preSelectedOption,
}) => {
  const [selectedOption, setSelectedOption] = useState(preSelectedOption);

  useEffect(() => {
    // if question is finished and no answer is selected , then show right answer
    if (isFinished == true && selectedOption == undefined) {
      setSelectedOption(question.A + 1);
    }
    // if next question is starting, then remove cureently selected
    else if (isFinished == false) setSelectedOption(undefined);
  }, [isFinished]);

  const onOptionSelect = (selectedIndex) => {
    // return if question is already answered or time is over
    if (selectedOption != undefined || isFinished == true) return;
    setSelectedOption(selectedIndex);
    const isCorrect = question.A + 1 == selectedIndex;
    onFinish(isCorrect, selectedIndex);
  };

  const getOptionsStyle = (index) => {
    console.log("styles");
    if (index - 1 == question.A) return correctOptionStyle;
    return index == selectedOption ? wrongOptionStyle : null;
  };

  return (
    <div className={className}>
      <div
        className="text-lg md:text-xl bg-white rounded shadow p-2 sm:p-4 que-before"
        data-que={question.N}
        dangerouslySetInnerHTML={{ __html: question.Q }}
      />
      {OPTIONS.map((option, index) => (
        <div
          className="opt-before p-3 my-2 text-xl text-indigo-800 bg-indigo-100 shadow rounded-md"
          data-opt={option}
          style={selectedOption && getOptionsStyle(index + 1)}
          onClick={() => onOptionSelect(index + 1)}
          key={index}
        >
          {question.O[index]}
        </div>
      ))}
      {question.S &&
        <div
          className="text-lg md:text-xl bg-gray-100 rounded shadow p-1 sm:p-3" 
          dangerouslySetInnerHTML={{ __html: question.S }}>
        </div>}
    </div>
  );
};

export default Question;
