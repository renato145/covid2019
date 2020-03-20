import React, { useEffect, useRef } from 'react';
import { select, line, easeCubic } from 'd3';
import { interpolatePath } from 'd3-interpolate-path';
import { useSpring, animated } from 'react-spring';
import './Marks.css';

const Dot = ({ x, y, r, transition }) => {
  const ref = useRef();

  const style = useSpring({
    config: { duration: transition, easing: easeCubic },
    r: r,
    cx: x,
    cy: y,
  });

  return <animated.circle {...style} ref={ref} />;
};

export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  transition,
  radius,
}) => {
  const path = useRef(null);

  useEffect(() => {
    select(path.current)
      .transition()
      .duration(transition)
      .attrTween('d', function() {
        const prev = select(this).attr('d');
        const current = line()
          .x(d => xScale(xValue(d)))
          .y(d => yScale(yValue(d)))(data);
        return interpolatePath(prev, current);
      });
  }, [data, xScale, yScale, xValue, yValue, transition]);

  return (
    <g className="marks">
      <path ref={path} />
      {data.map((d, i) => (
        <Dot
          key={i}
          x={xScale(xValue(d))}
          y={yScale(yValue(d))}
          r={radius}
          transition={transition}
        />
      ))}
    </g>
  );
};
