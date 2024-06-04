"use client";
import reportsData from "../data/reportsData.json";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register the required components with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Reports = () => {
  return (
    <div className="w-full">
      <div className="h-60  w-full   shadow-md shadow-black/35 rounded-md flex items-center justify-center">
        <Bar
          className=" w-full py-3"
          data={{
            labels: reportsData.map((data) => data.label),
            datasets: [
              {
                label: "Reveniew",
                data: reportsData.map((data) => data.revenue),
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Revenue",
              },
            },
            scales: {
              x: {
                type: "category",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Reports;
