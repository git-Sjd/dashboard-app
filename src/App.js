// import React from 'react';
// import BaseComponent from './components/BaseComponent';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const App = () => {
//   // ... insert the chart data and options here ...
//   // data for the pie chart (Sub-Category)
// const pieChartData = {
//   labels: ['Flexi Cap Fund', 'ELSS', 'Small Cap Fund', 'Index Fund', 'Sectoral Fund', 'Large & Mid Cap Fund'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [32.19, 26.04, 26.40, 12.03, 26.40, 12.03],
//       backgroundColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// // data for the bar chart (Fund Distribution)
// const barChartDataFundDistribution = {
//   labels: ['Equity', 'Bonds', 'Gold', 'Govt. Securities'],
//   datasets: [
//     {
//       label: 'Fund Distribution',
//       data: [32.19, 26.40, 26.04, 26.40],
//       backgroundColor: [
//         '#FF6384',
//         '#36A2EB',
//         '#FFCE56',
//         '#4BC0C0',
//       ],
//     },
//   ],
// };

// // data for the bar chart (Top Sectors)
// const barChartDataTopSectors = {
//   labels: ['Oil & Gas', 'Private Bank', 'Pharmaceuticals', 'Power Generation', 'Construction', 'Other'],
//   datasets: [
//     {
//       label: 'Top Sectors',
//       data: [32.19, 26.04, 26.40, 26.40, 12.03, 12.03],
//       backgroundColor: [
//         '#FF6384',
//         '#36A2EB',
//         '#FFCE56',
//         '#4BC0C0',
//         '#9966FF',
//         '#FF9F40',
//       ],
//     },
//   ],
// };

//   return (
//     <div className="container mx-auto p-4">
//       <BaseComponent
//         title='Sub-Category'
//         description='The assets are distributed between equity and cash & equivalents.'
//         children={
//           <Pie data={pieChartData} />
//         }
//       />

//       {/* <div className="mb-8">
//         <h1 className="text-xl font-bold mb-2">Fund Distribution</h1>
//         <p className="text-gray-700 mb-4">
//           A mutual fund distribution represents the earnings of a fund being passed on to the individual investor or unit holder of the fund.
//         </p>
//         <BarChartComponent chartData={barChartDataFundDistribution} />
//       </div>

//       <div>
//         <h1 className="text-xl font-bold mb-2">Top Sectors</h1>
//         <p className="text-gray-700 mb-4">
//           The assets are distributed between equity and cash & equivalents.
//         </p>
//         <BarChartComponent chartData={barChartDataTopSectors} />
//       </div> */}
//     </div>
//   );
// };

// export default App;
import React from "react";
import HorizontalChartBar from "./components/HorizontalChartBar";
import PieChartComponent from "./components/PieChartComponent";
import SegmentedBarStacks from "./components/SegmentedBarStack";

const App = () => {
  return (
    <div style={{display:'flex'}}>
      <PieChartComponent/>
      <HorizontalChartBar />
      <SegmentedBarStacks/>
    </div>
  );
};

export default App;
