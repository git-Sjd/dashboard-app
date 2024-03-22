import React from 'react';
import BaseComponent from './BaseComponent';

const SegmentedBarStacks = () => {
  const data = [
    { name: 'Oil & Gas', value: 32.19, color: '#60a5fa' },
    { name: 'Private Bank', value: 26.04, color: '#a78bfa' },
    { name: 'Pharmaceuticals', value: 26.40, color: '#34d399' },
    { name: 'Construction', value: 12.03, color: '#f472b6' },
    { name: 'Power Generation', value: 26.40, color: '#fbbf24' },
    { name: 'Other', value: 12.03, color: '#f97316' },
  ];

  // Calculate the total to normalize widths if they don't add up to 100%
  const totalValue = data.reduce((total, segment) => total + segment.value, 0);

  return (
    <div className="container mx-auto p-4">
        <BaseComponent
          title="Sub-Category"
          description="A mutual fund distribution represents the earnings of a fund being passed on to the individual investor or unit holder of the fund."
            >
      {/* Segmented Bar */}
      <div style={{ display: 'flex', width: '100%', height: '50px',flexWrap:'wrap' }}>
        {data.map((segment, index) => (
          <div
            key={index}
            title={`${segment.name}: ${segment.value.toFixed(2)}%`}
            style={{
              width: `${(segment.value / totalValue) * 100}%`,
              backgroundColor: segment.color,
              display: 'flex',
              height: '100%',
            }}
          />
        ))}
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', marginTop: '10px' }}>
        {data.map((segment, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '10px', marginBottom: '5px' }}>
            <span style={{ width: '20px', height: '20px', backgroundColor: segment.color, display: 'inline-block', marginRight: '6px' }}></span>
            <span style={{ fontSize: '14px' }}>{`${segment.name} ${segment.value.toFixed(2)}%`}</span>
          </div>
        ))}
              </div>
              </BaseComponent>
    </div>
  );
};

export default SegmentedBarStacks;
