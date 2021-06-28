import { useState } from "react";
import Question from "./Question";

const TABS = ["Correct", "Incorrect", "Unattempted"];
const selectedTabStyle = { borderColor: "#4338ca", color: "#4338ca" };

const QUESTION_CLASS_NAME = "text-justify mt-4 p-2 text-indigo-800";

const QuestionsTab = ({ questions, userResponse }) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <div className=" max-w-3xl mx-auto text-center mt-6">
        {TABS.map((tabName, index) => (
          <button
            className="inline-block w-1/3 text-gray-500 border-b-2 border-gray-300 text-base sm:text-lg font-semibold focus:outline-none"
            onClick={() => setCurrentTab(index)}
            style={index == currentTab ? selectedTabStyle : null}
            key={index}
          >
            {tabName}
          </button>
        ))}

        {userResponse.map((response, index) => {
          if (currentTab == 0 && response.isCorrect == true)
            return (
              <Question
                isFinished={true}
                question={questions[index]}
                key={index}
                className={QUESTION_CLASS_NAME}
              />
            );
          else if (currentTab == 1 && response.isCorrect == false)
            return (
              <Question
                isFinished={true}
                question={questions[index]}
                preSelectedOption={response.selectedOption}
                key={index}
                className={QUESTION_CLASS_NAME}
              />
            );
          else if (currentTab == 2 && response.isCorrect == undefined)
            return (
              <Question
                isFinished={true}
                question={questions[index]}
                key={index}
                className={QUESTION_CLASS_NAME}
              />
            );
          else return null;
        })}
      </div>
    </>
  );
};

export default QuestionsTab;
