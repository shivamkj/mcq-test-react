import { useState } from "react";
import Confetti from "react-dom-confetti";

const options = ["A", "B", "C", "D"];

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 30,
  elementCount: 70,
  dragFriction: 0.12,
  duration: "4160",
  stagger: 3,
  width: "15px",
  height: "15px",
  perspective: "600px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

const Question = ({ isFinished, question, allSelectedOptions }) => {
  const [showSolution, setShowSolution] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const onOptionSelect = (index) => {
    if (selectedOption != null || isFinished) return;
    setSelectedOption(index);
    const correctOption = String.fromCharCode(65 + index);
    allSelectedOptions.current[question.N - 1] = correctOption;
  };

  const getClass = (index) => {
    if (isFinished) return;
    if (String.fromCharCode(65 + index) == question.A) return "correct";
    else return index == selectedOption ? "wrong" : "";
  };

  return (
    <div className="lg:max-w-2xl my-4 p-2 text-justify bg-gray-100 rounded shadow-lg">
      <div
        className="font-bold que"
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
          {options[index]}
        </div>
      ))}
      {isFinished && (
        <>
          <button
            className="px-2 py-1 text-indigo-800 border border-indigo-700 rounded text-sm focus:outline-none"
            onClick={() => setShowSolution(!showSolution)}
          >
            {showSolution ? "Hide Solution" : "Show Solution"}
          </button>
          <div
            className="m-3"
            style={{ display: showSolution ? "block" : "none" }}
            dangerouslySetInnerHTML={{
              __html: `Option ${question.A} is the correct answer. <br /> ${
                question.S || ""
              }`,
            }}
          ></div>
        </>
      )}
      <Confetti
        active={String.fromCharCode(65 + selectedOption) == question.A}
        config={config}
      />
    </div>
  );
};

export default Question;
