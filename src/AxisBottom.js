import React, { useMemo } from 'react';
import moment from 'moment';
import './Axis.css';

export const AxisBottom = ({
  xScale,
  boundedHeight,
  boundedWidth,
  date,
  label,
  labelOffset,
  tickSize,
  tickOffset,
  tickWidth,
  tickWidthDate
}) => {
  const range = useMemo(() => xScale.range(), [xScale]);
  const tickCount = useMemo(() => boundedWidth / (date ? tickWidthDate : tickWidth), [
    boundedWidth,
    tickWidth,
    tickWidthDate,
    date
  ]);

  return (
    <>
      <path
        className="line"
        d={['M', range[0], boundedHeight, 'H', range[1]].join(' ')}
        // in case of not nice() scale
        // d={['M', range[0], boundedHeight+6, 'v', -6, 'H', range[1], 'v', 6].join(' ')}
        fill="none"
      />
      {xScale.ticks(tickCount).map((tickValue, i) => (
        <g
          className="tick"
          key={i}
          transform={`translate(${xScale(tickValue)},0)`}
        >
          <line y1={boundedHeight} y2={boundedHeight + tickSize} />
          {/* <line y1={boundedHeight - tickSize} y2={boundedHeight} /> */}
          <text
            style={{ textAnchor: 'middle' }}
            dy=".71em"
            y={boundedHeight + tickOffset}
          >
            {date ? moment(tickValue).format('Do MMM') : tickValue}
          </text>
        </g>
      ))}
      {label && (
        <text
          className="label"
          x={boundedWidth / 2}
          y={boundedHeight + labelOffset}
          textAnchor="middle"
        >
          {label}
        </text>
      )}
    </>
  );
};
