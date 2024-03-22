import React from "react";
import "chart.js/auto";
import BaseComponent from "./BaseComponent";

const HorizontalChartBar = () => {

  const segments = [
    { name: "Equity", value: 32.19, color: "#60a5fa" },
    { name: "Gold", value: 26.04, color: "#a78bfa" },
    { name: "Bonds", value: 26.4, color: "#facc15" },
    { name: "Govt. Securities", value: 26.4, color: "#f97316" },
  ];

  // Calculate the total to normalize widths if they don't add up to 100%
  const totalValue = segments.reduce(
    (total, segment) => total + segment.value,
    0
  );

    return (
        <div className="container mx-auto p-4">
        <BaseComponent
          title="Sub-Category"
          description="A mutual fund distribution represents the earnings of a fund being passed on to the individual investor or unit holder of the fund."
            >
                {/* <div style={{ width: "100%", height: "50px", position: "relative" }}> */}
      <div style={{ display: "flex", width: "100%", height: "20px" }}>
        {segments.map((segment, index) => (
          <div
            key={index}
            style={{
              width: `${(segment.value / totalValue) * 100}%`,
              backgroundColor: segment.color,
              display: "inline-block",
              height: "100%",
            }}
          />
        ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-between", marginTop: "10px", flexWrap:'wrap' }}
      >
        {segments.map((item, index) => (
          <div
                key={index}
                style={{ display: 'flex', alignItems: 'center', marginRight: '20px', marginBottom: '10px', minWidth:'200px' }}
          >
            <span
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: item.color,
                marginRight: "10px",
              }}
            ></span>
            <span>{`${item.name} ${item.value.toFixed(2)}%`}</span>
          </div>
        ))}
      </div>
            </BaseComponent>
            
            </div>
    
  );
};

export default HorizontalChartBar;
