import React, { useMemo, useState } from 'react';
import { scaleTime, extent, scaleLinear, scaleLog } from 'd3';
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

  const [selection, setSelection] = useState([defaultLocation]);

  const selectedData = useMemo(() => {
    if (data) return selection.map(d => data[`$${d}`]);
    // if (data) return data[`$${selection}`];
  }, [data, selection]);

  const xScale = useMemo(() => {
    if (!selectedData) return;
    const domain = extent(selectedData.map(d => d.map(xValues)).flat());
    return scaleTime()
      .domain(domain)
      .range([0, boundedWidth])
      .nice();
  }, [selectedData, xValues, boundedWidth]);

  const yScale = useMemo(() => {
    if (!selectedData) return;
    const domain = extent(selectedData.map(d => d.map(yValues)).flat());
    return scaleLinear()
      .domain(domain)
      .range([boundedHeight, 0])
      .nice();
  }, [selectedData, yValues, boundedHeight]);

  return (
    <div className="chart">
      <Row className="justify-content-center">
        <Col md={11}>
          <SelectLocation
            locations={data ? data.keys() : [selection]}
            defaultLocation={defaultLocation}
            onChange={(e, d) => setSelection(d)}
          />
        </Col>
        <Col md={1}>
          <Button
            variant="outline-danger close-button"
            size="sm"
            onClick={onClose}
          >
            <span>x</span>
          </Button>
        </Col>
      </Row>
      <div className="chart-container" ref={ref}>
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
                {selectedData.map((d,i) => (
                  <Marks
                    key={i}
                    data={d}
                    xScale={xScale}
                    yScale={yScale}
                    xValue={xValues}
                    yValue={yValues}
                    transition={transitions.lines}
                    radius={markRadius}
                  />
                ))}
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
