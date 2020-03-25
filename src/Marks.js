import React, { useEffect, useRef } from 'react';
import { select, line, easeCubic } from 'd3';
import { interpolatePath } from 'd3-interpolate-path';
import { useSpring, animated } from 'react-spring';
import './Marks.css';

const Dot = ({ x, y, fill, transition, onPointerEnter, onPointerLeave }) => {
  const [style, setStyle] = useSpring(() => ({
    config: { duration: transition, easing: easeCubic },
    cx: x,
    cy: y,
    fill: fill ? fill : '#efefef',
  }));

  useEffect(() => {
    setStyle({
      cx: x,
      cy: y,
      fill: fill ? fill : '#efefef',
    });
  }, [setStyle, x, y, fill]);

  return (
    <animated.circle
      {...style}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
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
  setToolTipData,
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
      <path ref={path} stroke={color} />
      {data.map((d, i) => {
        const x = xScale(xValue(d));
        const y = yScale(yValue(d));
        return (
          <Dot
            key={i}
            x={x}
            y={y}
            fill={color}
            transition={transition}
            onPointerEnter={() => setToolTipData({ data: d, x, y, color })}
            onPointerLeave={() => setToolTipData("")}
          />
        );
      })}
    </g>
  );
};
