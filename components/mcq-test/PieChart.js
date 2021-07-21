import React from "react";
import { Doughnut } from "react-chartjs-2";

const PieChart = ({ data }) => {
  const config = {
    labels: ["Correct", "Incorrect", "Not Attempted"],
    datasets: [
      {
        label: "Exam Result",
        data: [data.correct, data.wrong, data.skipped],
        backgroundColor: ["#fc5404", "#f98404", "#f9b208"],
        borderColor: [
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={config} />;
};

export default PieChart;
