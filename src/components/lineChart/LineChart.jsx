import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Button } from "flowbite-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {

  const fullData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
    datasets: [
      {
        label: "2023",
        data: [65, 59, 80, 81, 56, 55, 40, 70],
        fill: false,
        borderColor: "#42a5f5",
        backgroundColor: "#90caf9",
        tension: 0.1,
      },
      {
        label: "2024",
        data: [10, 59, 40, 15, 20, 30, 17, 25],
        fill: false,
        borderColor: "#8b5cf6",
        backgroundColor: "#ede9fe",
        tension: 0.1,
      },
    ],
  };

  const [filter, setFilter] = useState("all");


  const getFilteredData = () => {
    switch (filter) {
      case "2023":
        return {
          labels: fullData.labels,
          datasets: [fullData.datasets[0]],
        };
      case "2024":
        return {
          labels: fullData.labels,
          datasets: [fullData.datasets[1]],
        };
      case "2023 vs 2024":
      default:
        return fullData;
    }
  };

  const chartData = getFilteredData();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "2023 va 2024 yillar ovqat xarajatlari",
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
      <div className="button-group gap-8 flex">
        <Button color="blue" onClick={() => setFilter("all")}>All</Button>
        <Button onClick={() => setFilter("2023")}>2023</Button>
        <Button onClick={() => setFilter("2024")}>2024</Button>
      </div>
    </div>
  );
};

export default LineChart;
