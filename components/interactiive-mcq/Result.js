import {
  ChartPieIcon,
  ClockIcon,
  TrendingUpIcon,
} from "@heroicons/react/outline";
import Header from "./Header";
import PieChart from "../mcq-test/PieChart";
import QuestionsTab from "./QuestionsTab";

const DataCard = ({ title, data, Icon }) => (
  <div className="flex p-4  mx-4 shadow bg-white rounded border">
    <Icon className="h-12 w-12 text-indigo-400" />
    <div className="ml-2">
      <div className="text-lg">{data}</div>
      <div className="text-sm text-gray-600">{title}</div>
    </div>
  </div>
);

const Result = ({
  questions,
  resultAnalysis: {
    totalCorrect,
    totalWrong,
    totalSkipped,
    totalQuestions,
    totalTime,
    percentMarks,
    percentAccuracy,
    userResponse,
  },
}) => (
  <>
    <Header />
    <div className="max-w-sm mx-auto p-2">
      <h4 className="text-center text-lg mt-8 max-w-lg">
        {percentMarks > 50
          ? `Congratulation, you have scored ${totalCorrect} out of ${totalQuestions} ( ${percentMarks}% ). Best of Luck for the next test.`
          : `You scored ${totalCorrect} out of ${totalQuestions} ( ${percentMarks}% ). You can improve more. Best of Luck for the next test.`}
      </h4>
      <PieChart data={[totalCorrect, totalWrong, totalSkipped]} />
    </div>
    <div className="flex justify-between flex-col sm:flex-row max-w-3xl mx-auto mt-3">
      <DataCard
        data={`${percentMarks} %`}
        title="Overall Percentage"
        Icon={ChartPieIcon}
      />
      <DataCard data={`${totalTime} minutes`} title="Time Taken" Icon={ClockIcon} />
      <DataCard
        data={`${percentAccuracy} %`}
        title="Total Accuracy"
        Icon={TrendingUpIcon}
      />
    </div>
    <QuestionsTab questions={questions} userResponse={userResponse} />
  </>
);

export default Result;
