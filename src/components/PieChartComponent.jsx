import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import "chartjs-plugin-datalabels";
import BaseComponent from "./BaseComponent";

const PieChartComponent = () => {
  const pieChartData = {
    labels: [
      "Flexi Cap Fund",
      "ELSS",
      "Small Cap Fund",
      "Index Fund",
      "Sectoral Fund",
      "Large & Mid Cap Fund",
    ],
    datasets: [
      {
        data: [32.19, 26.04, 26.4, 12.03, 26.4, 12.03],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
      datalabels: {
        color: "#000",
        display: true,
        align: "bottom",
        anchor: "end",
        formatter: (value, context) => {
          // Append the percentage sign and ensure it only has two decimal places
          return `${value.toFixed(2)}%`;
        },
      },
    },
    // Additional configuration to adjust the position of the labels
    layout: {
      padding: {
        bottom: 30, // Add padding at the bottom to prevent labels from being cut off
      },
    },
  };

  // Calculate the total sum of the data for percentage calculations
  const total = pieChartData.datasets[0].data.reduce((acc, value) => acc + value, 0);


  return (
    <div className="container mx-auto p-4">
      <BaseComponent
        title="Sub-Category"
        description="The assets are distributed between equity and cash & equivalents."
      >
        <Pie data={pieChartData} options={options} />
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: '10px' }}>
        {pieChartData.labels.map((label, index) => {
          // Calculate the percentage for each label
          const value = pieChartData.datasets[0].data[index];
          const percentage = ((value / total) * 100).toFixed(2); // Round to two decimal places

          return (
            <div key={label} style={{ display: 'flex', alignItems: 'center', marginRight: '20px', marginBottom: '10px' }}>
              <span style={{ width: '20px', height: '20px', backgroundColor: pieChartData.datasets[0].backgroundColor[index], marginRight: '10px' }}></span>
              <span>{`${label} ${percentage}%`}</span> {/* Display the label with the percentage */}
            </div>
          );
        })}
      </div>
      </BaseComponent>
    </div>
  );
};

export default PieChartComponent;
