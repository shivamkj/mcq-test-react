import PieChart from "./PieChart";

const Result = ({ result }) => (
  <>
    <h4 className="text-center text-xl mt-8 max-w-lg">{result.message}</h4>
    <PieChart />
  </>
);

export default Result;
