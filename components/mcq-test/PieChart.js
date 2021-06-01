import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Correct", "Incorrect", "Not Attempted"],
  datasets: [
    {
      label: "Exam Result",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return (
    <div className="w-11/12 sm:w-3/4 xl:w-2/4">
      <Doughnut data={data} />
    </div>
  );
};

export default PieChart;
