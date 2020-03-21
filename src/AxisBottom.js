import React, { useMemo } from 'react';
import moment from 'moment';
import './Axis.css';

export const AxisBottom = ({
  xScale,
  boundedHeight,
  boundedWidth,
  label,
  labelOffset,
  tickSize,
  tickOffset,
  tickWidth,
}) => {
  const range = useMemo(() => xScale.range(), [xScale]);
  const tickCount = useMemo(() => boundedWidth / tickWidth, [
    boundedWidth,
    tickWidth,
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
            {moment(tickValue).format('Do MMM')}
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
