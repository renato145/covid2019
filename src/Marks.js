import React, { useEffect, useRef } from 'react';
import { select, line, easeCubicOut } from 'd3';
import { interpolatePath } from 'd3-interpolate-path';
import { useSpring, animated } from 'react-spring';
import './Marks.css';

export const Dot = ({ x, y, r, fill, transition }) => {
  const [style, setStyle] = useSpring(() => ({
    config: { duration: transition, easing: easeCubicOut },
    cx: x,
    cy: y,
    r: 0,
    fill: fill ? fill : '#efefef',
  }));

  useEffect(() => {
    setStyle({
      cx: x,
      cy: y,
      r: r,
      fill: fill ? fill : '#efefef',
    });
  }, [setStyle, x, y, fill, r]);

  return (
    <animated.circle
      {...style}
    />
  );
};

export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  transition,
  color,
}) => {
  const path = useRef(null);

  useEffect(() => {
    select(path.current)
      .transition()
      .duration(transition)
      .ease(easeCubicOut)
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
      <path ref={path} stroke={color} />
      {/* {data.map((d, i) => {
        const x = xScale(xValue(d));
        const y = yScale(yValue(d));
        return (
          <Dot
            key={i}
            x={x}
            y={y}
            r={5}
            fill={color}
            transition={transition}
          />
        );
      })} */}
    </g>
  );
};
