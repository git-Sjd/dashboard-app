import React from "react";
import HorizontalChartBar from "./components/HorizontalChartBar";
import PieChartComponent from "./components/PieChartComponent";
import SegmentedBarStacks from "./components/SegmentedBarStack";

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <PieChartComponent />
      <HorizontalChartBar />
      <SegmentedBarStacks />
    </div>
  );
};

export default App;
