import React, { useMemo } from 'react';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { useChartDimensions } from './useChartDimensions';
import { scaleTime, extent, scaleLinear } from 'd3';
import './LineChart.css';

const k = 'Peru';

export const LineChart = ({ title, data, dimensions, xAxis, yAxis }) => {
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
  console.log(dms);

  const selectedData = useMemo(() => {
    if (data) return data[`$${k}`];
  }, [data]);

  const xScale = useMemo(() => {
    if (!selectedData) return;
    const domain = extent(selectedData.map(d => d.date));
    return scaleTime()
      .domain(domain)
      .range([0, boundedWidth])
      .nice();
  }, [selectedData, boundedWidth]);

  const yScale = useMemo(() => {
    if (!selectedData) return;
    const domain = [0, 199];
    return scaleLinear()
      .domain(domain)
      .range([boundedHeight, 0])
      .nice();
  }, [selectedData, boundedHeight]);

  // const yScale = d3.scaleLinear()
  //   .domain([0,maxN])
  //   .range([innerHeight, 0])
  //   .nice();

  return (
    <div ref={ref} style={{ minHeight: '300px' }}>
      <svg width={width} height={height}>
        <g transform={`translate(${marginLeft},${marginTop})`}>
          {title && (
            <text
              className="title"
              x={boundedWidth/2 + title.dx}
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
            </>
          ) : (
            <text>Loading...</text>
          )}
          {/* 
          <Marks
            data={filteredData}
            sex="Male"
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
          />
          <Marks
            data={filteredData}
            sex="Female"
            xScale={xScale}
            yScale={yScale}
            xValue={xValue}
            yValue={yValue}
          /> */}
        </g>
      </svg>
    </div>
  );
};
