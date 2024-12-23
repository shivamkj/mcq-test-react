import { useEffect, useState } from "react";
import styles from "../../styles/Question.module.css";

const options = ["A", "B", "C", "D"];

const Question = ({ isFinished, question, allSelectedOptions }) => {
  const [showSolution, setShowSolution] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const onOptionSelect = (index) => {
    if (selectedOption != null || isFinished) return;
    setSelectedOption(index);
    allSelectedOptions.current[question.N - 1] = index;
  };

  useEffect(() => {
    if (isFinished && selectedOption == null) setSelectedOption(question.A);
  }, [isFinished]);

  const getClass = (index) => {
    if (index == question.A) return styles.correct;
    else return index == selectedOption ? styles.wrong : "";
  };

  return (
    <div className="lg:max-w-2xl my-4 p-2 text-justify bg-gray-100 rounded shadow-lg">
      <div
        className={"font-bold que-before"}
        data-que={question.N}
        dangerouslySetInnerHTML={{ __html: question.Q }}
      />
      {question.O.map((option, index) => (
        <div
          className={`${styles.opt} ${
            selectedOption != null && getClass(index)
          }`}
          data-opt={options[index]}
          onClick={() => onOptionSelect(index)}
          key={index}
        >
          {option}
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
    </div>
  );
};

export default Question;
