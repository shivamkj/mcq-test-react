import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const PieChart = ({ data }) => {
  return (
    <Doughnut
      data={{
        labels: ["Correct", "Incorrect", "Not Attempted"],
        datasets: [
          {
            label: "Exam Result",
            data,
            backgroundColor: ["#fc5404", "#f98404", "#f9b208"],
            borderColor: [
              "rgba(255, 255, 255, 1)",
              "rgba(255, 255, 255, 1)",
              "rgba(255, 255, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      }}
    />
  );
};

export default PieChart;
