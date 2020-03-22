import React from 'react';
import './ChartToolTip.css';

export const ChartToolTip = ({ text, x, y, color }) => {
  return (
    <div
      className="wrapper"
      style={{
        transform: `translate(${x}px,${y + 30}px)`,
        backgroundColor: color,
        opacity: text ? 0.75 : 0,
      }}
    >
      <div className="chart-tooltip">{text}</div>
    </div>
  );
};
