import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Question from "../components/mcq-test/Question";
import Header from "../components/mcq-test/Header";
import Numbering from "../components/mcq-test/Numbering";
import PieChart from "../components/PieChart";
import Loader from "../components/Loader";

const Test = () => {
  const [data, setData] = useState(null);
  const [isFinished, setFinished] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const selectedOption = useRef([]);
  const result = useRef({});

  const onSubmit = () => {
    const total = data.examInfo.totalQuestions;
    const score = {
      correct: 0,
      wrong: 0,
      skipped: 0,
    };
    let count = 0;
    const length = data.questions.length;
    for (let i = 0; i < length; i++) {
      if (!data.questions[i].A) count++;
      else if (!selectedOption.current[i - count]) score.skipped++;
      else if (data.questions[i].A == selectedOption.current[i - count])
        score.correct++;
      else score.wrong++;
    }
    const percentage = (score.correct / total) * 100;
    const percentageRounded = parseFloat(percentage).toFixed(2);
    if (percentageRounded > 50)
      result.current.message = `Congratulation, you have scored ${score.correct} out of ${total} ( ${percentageRounded}% ). Best of Luck for the next test.`;
    else
      result.current.message = `You scored ${score.correct} out of ${total} ( ${percentageRounded}% ). You can improve more. Best of Luck for the next test.`;

    result.current.score = score;
    setFinished(true);
  };

  useEffect(() => {
    const id = window.location.search.substring(1).slice(3);
    const url = `https://storage.googleapis.com/mcq-test/${id}.json`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const onNumClick = (e) => {
    const questionNum = parseInt(e.target.innerHTML);
    document.querySelector(`[data-que="${questionNum}"]`).scrollIntoView();
  };

  if (isLoading) return <Loader message="Loading" />;

  return (
    <>
      <Head>
        <title>Target with SK Sir</title>
      </Head>

      <Header
        TIME_LIMIT={data.examInfo.timeLimit * data.examInfo.totalQuestions}
        isFinished={isFinished}
        onFinish={onSubmit}
      />

      <div className="container flex mt-20">
        <div className="w-full md:w-2/3 p-1">
          <div className="px-3 py-2 mb-2 text-center rounded font-semibold bg-indigo-200 text-indigo-800 lg:max-w-2xl">
            {data.examInfo.testName}
          </div>
          <div className="px-3 py-2 mb-2 rounded font-semibold bg-indigo-200 text-indigo-800 flex justify-between lg:max-w-2xl">
            <span>{data.examInfo.category}</span>
            <span>{data.examInfo.totalQuestions}</span>
          </div>

          <div id="questions">
            {data.questions.map((question) => {
              if (typeof question.N == typeof 0)
                return (
                  <Question
                    key={`Q${question.N}`}
                    isFinished={isFinished}
                    question={question}
                    allSelectedOptions={selectedOption}
                  />
                );
              else if (question.N == "P")
                return (
                  <div>
                    <div> {question.Q} </div>
                    <div> {question.H} </div>
                    <div> {question.B} </div>
                  </div>
                );
              else if (question.N == "I") return <div> {question.I} </div>;
            })}
          </div>

          <div className="text-center">
            {isFinished ? (
              <>
                <h4 className="text-center text-xl mt-8 max-w-lg">
                  {result.current.message}
                </h4>
                <PieChart data={result.current.score} />
              </>
            ) : (
              <button
                onClick={onSubmit}
                className="bg-indigo-600 px-4 py-2 text-white rounded my-3"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>

      <Numbering
        total={parseInt(data.questions[data.questions.length - 1].N)}
        onNumClick={onNumClick}
      />
    </>
  );
};

export default Test;
