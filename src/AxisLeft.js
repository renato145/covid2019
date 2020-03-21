import React, { useMemo } from 'react';
import { format } from 'd3';
import './Axis.css';

const formatNumbers = format('.0s')

export const AxisLeft = ({
  yScale,
  boundedHeight,
  boundedWidth,
  label,
  labelOffset,
  tickSize,
  tickOffset,
}) => {
  const range = useMemo(() => yScale.range(), [yScale]);

  return (
    <>
      <path
        className="line"
        d={['M', 0, range[1], 'v', range[0]].join(' ')}
        fill="none"
      />
      {yScale.ticks().map((tickValue, i) => (
        <g
          key={i}
          className="tick"
          transform={`translate(0,${yScale(tickValue)})`}
        >
          <line x2={-tickSize} />
          <text
            key={tickValue}
            style={{ textAnchor: 'end' }}
            x={-tickOffset}
            dy=".32em"
          >
            {formatNumbers(tickValue)}
          </text>
        </g>
      ))}
      {label && (
        <text
          className="label"
          textAnchor="middle"
          transform={`translate(${-labelOffset},${boundedHeight /
            2}) rotate(-90)`}
        >
          {label}
        </text>
      )}
    </>
  );
};
