import React, { useMemo, useState } from 'react';
import { scaleTime, extent, scaleLinear } from 'd3';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';
import { useChartDimensions } from './useChartDimensions';
import { SelectLocation } from './SelectLocation';
import './LineChart.css';
import { Button, Col, Row } from 'react-bootstrap';

export const LineChart = ({
  title,
  data,
  dimensions,
  xAxis,
  yAxis,
  xValues,
  yValues,
  markRadius,
  transitions,
  defaultLocation,
  onClose,
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

  const [selection, setSelection] = useState(defaultLocation);

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
  }, [selectedData, xValues, boundedWidth]);

  const yScale = useMemo(() => {
    if (!selectedData) return;
    const domain = extent(selectedData.map(yValues));
    return scaleLinear()
      .domain(domain)
      .range([boundedHeight, 0])
      .nice();
  }, [selectedData, yValues, boundedHeight]);

  return (
    <div className="mt-3 mb-3 h-75">
      <Row className="justify-content-center">
        <Col md={11}>
          <SelectLocation
            locations={data ? data.keys() : [selection]}
            selection={selection}
            setSelection={setSelection}
          />
        </Col>
        <Col md={1}>
          <Button variant="outline-danger" size="sm" onClick={onClose}>
            <span>x</span>
          </Button>
        </Col>
      </Row>
      <div className="chart-container h-100" ref={ref}>
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
                  radius={markRadius}
                />
              </>
            ) : (
              <text>Loading...</text>
            )}
          </g>
        </svg>
      </div>
    </div>
  );
};
