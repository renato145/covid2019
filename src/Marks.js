import React, { useEffect, useRef } from 'react';
import { select, line } from 'd3';
import { useSpring, animated } from 'react-spring';
import './Marks.css';

const Dot = ({ x, y, transition }) => {
  const ref = useRef();

  const style = useSpring({
    config: { duration: transition },
    r: 6,
    cx: x,
    cy: y
  });

  return <animated.circle {...style} ref={ref} />;
};

export const Marks = ({ data, xScale, yScale, xValue, yValue, transition }) => {
  const path = useRef(null);
  useEffect(() => {
    select(path.current)
      .transition()
      .duration(1000)
      .attr('d', () =>
        line()
          .x(d => xScale(xValue(d)))
          .y(d => yScale(yValue(d)))
          (data)
      );
  }, [data, xScale, yScale, xValue, yValue]);
  return (
    <g className="marks">
      <path ref={path} />
      {data.map((d, i) => (
        <Dot
          key={i}
          x={xScale(xValue(d))}
          y={yScale(yValue(d))}
          transition={transition}
        />
      ))}
    </g>
  );
};
