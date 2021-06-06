import PieChart from "./PieChart";

const Result = ({ result }) => (
  <div className="w-11/12 sm:w-3/4 xl:w-2/4">
    <h4 className="text-center text-xl mt-8 max-w-lg">{result.message}</h4>
    <PieChart />
  </div>
);

export default Result;
