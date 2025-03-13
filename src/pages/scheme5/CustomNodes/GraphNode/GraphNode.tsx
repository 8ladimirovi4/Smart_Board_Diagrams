// @ts-nocheck
import React from "react";
import { Handle, Position } from "@xyflow/react";
import { Scatter, Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, BarElement, ArcElement } from "chart.js";

// Регистрируем необходимые модули Chart.js
ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, BarElement, ArcElement);

const GraphNode = ({ data }) => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
    },
  };

  const renderChart = () => {
    switch (data.chartType) {
      case "scatter":
        return <Scatter data={data.chartData} options={chartOptions} />;
      case "bar":
        return <Bar data={data.chartData} options={chartOptions} />;
      case "pie":
        return <Pie data={data.chartData} options={chartOptions} />;
      default:
        return <div>Неизвестный тип графика</div>;
    }
  };

  return (
    <div className="graph-node">
      <div className="graph-header">{data.label || "График"}</div>
      <div className="graph-container">{renderChart()}</div>

      {/* Вход и выход для соединений */}
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default GraphNode;
