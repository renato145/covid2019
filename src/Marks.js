import React, { useEffect, useRef } from 'react';
const d3 = require('d3');

export const Marks = ({ data, sex, xScale, yScale, xValue, yValue }) => {
  const path = useRef(null);
  useEffect(() => {
    d3.select(path.current)
      .transition().duration(1000)
      .attr('d', () =>
        d3.line()
          .x(d => xScale(xValue(d)))
          .y(d => yScale(yValue(d)))
          .curve(d3.curveBasis)(data.filter(d => d.Sex === sex))
      );
  }, [ data, sex, xScale, yScale, xValue, yValue ]);
  return (
    <g className='marks'>
      <path
        className={sex}
        ref={path}
        fill='none'
        stroke='black'
      />
    </g>
  );
}
