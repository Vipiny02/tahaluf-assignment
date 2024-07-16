import { memo } from "react";
import { Pie } from "react-chartjs-2";
import "./PieChart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { content } from "../../content/content";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = memo(() => {
  const data = {
    labels: [],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["rgba(9, 174, 242, 1)", "rgba(16, 112, 197, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const { chartContent } = content;
  return (
    <div className="pie-container">
      <div>
        <h2>
          {chartContent.activeVehicles} <br /> Vs. In-Active <br /> Vehicles
        </h2>
        <div className="pie-text-container">
          <div className="pie-text-container-flex">
            <div className="pie-text-container-active"></div>
            <p style={{ fontSize: "14px" }}> {chartContent.activeVehicles}</p>
          </div>
          <div className="pie-text-container-flex">
            <div className="pie-text-container-inactive"></div>
            <p style={{ fontSize: "14px" }}>{chartContent.inactiveVehicles}</p>
          </div>
        </div>
      </div>
      <div>
        <Pie data={data} className="pieChart" />
      </div>
    </div>
  );
});

export default PieChart;
