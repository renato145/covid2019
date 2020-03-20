import React, { useMemo } from 'react';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';
import { useChartDimensions } from './useChartDimensions';
import { scaleTime, extent, scaleLinear } from 'd3';
import './LineChart.css';

export const LineChart = ({
  title,
  data,
  selection,
  dimensions,
  xAxis,
  yAxis,
  xValues,
  yValues,
  transitions,
}) => {
  const [ref, dms] = useChartDimensions(dimensions);
  const {
    width,
    height,
    marginLeft,
    marginTop,
    marginBottom,
    marginRight,
    boundedHeight,
    boundedWidth,
  } = dms;

  const selectedData = useMemo(() => {
    if (data) return data[`$${selection}`];
  }, [data, selection]);

  const xScale = useMemo(() => {
    if (!selectedData) return;
    const domain = extent(selectedData.map(xValues));
    return scaleTime()
      .domain(domain)
      .range([0, boundedWidth])
      .nice();
  }, [selectedData, boundedWidth]);

  const yScale = useMemo(() => {
    if (!selectedData) return;
    const domain = extent(selectedData.map(yValues));
    return scaleLinear()
      .domain(domain)
      .range([boundedHeight, 0])
      .nice();
  }, [selectedData, boundedHeight]);

  return (
    <div className='chart-container' ref={ref}>
      <svg width={width} height={height}>
        <g transform={`translate(${marginLeft},${marginTop})`}>
          {title && (
            <text
              className="title"
              x={boundedWidth / 2 + title.dx}
              y={title.dy}
              textAnchor="middle"
            >
              {title.label}
            </text>
          )}
          {selectedData ? (
            <>
              <AxisBottom
                xScale={xScale}
                boundedHeight={boundedHeight}
                boundedWidth={boundedWidth}
                {...xAxis}
              />
              <AxisLeft
                yScale={yScale}
                boundedHeight={boundedHeight}
                boundedWidth={boundedWidth}
                {...yAxis}
              />
              <Marks
                data={selectedData}
                xScale={xScale}
                yScale={yScale}
                xValue={xValues}
                yValue={yValues}
                transition={transitions.lines}
              />
            </>
          ) : (
            <text>Loading...</text>
          )}
        </g>
      </svg>
    </div>
  );
};
