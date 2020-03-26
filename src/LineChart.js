import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { scaleTime, extent, max, scaleLog, schemeTableau10 } from 'd3';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';
import { useChartDimensions } from './useChartDimensions';
import { SelectLocation } from './SelectLocation';
import { ChartToolTip } from './ChartToolTip';
import { ToogleSwitch } from './ToogleSwitch';
import { Button, Col, Row } from 'react-bootstrap';
import './LineChart.css';

export const LineChart = ({
  title,
  data,
  dimensions,
  xAxis,
  yAxis,
  xValues,
  transitions,
  defaultLocations,
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

  const [selection, setSelection] = useState(defaultLocations);
  const [colors, setColors] = useState({});
  const [toolTipData, setToolTipData] = useState();
  const [switchValue, setSwitchValue] = useState(false);

  const yValues = useCallback(
    d => (switchValue ? d['Deaths'] : d['Confirmed']),
    [switchValue]
  );

  const selectedData = useMemo(() => {
    if (data)
      return selection
        .map(d => data[`$${d}`])
        .map(d => d.filter(o => yValues(o) >= 1));
  }, [data, selection, yValues]);

  const xScale = useMemo(() => {
    if (!selectedData) return;
    const domain = extent(selectedData.map(d => d.map(xValues)).flat());
    return scaleTime()
      .domain(domain)
      .range([0, boundedWidth]);
  }, [selectedData, xValues, boundedWidth]);

  const yScale = useMemo(() => {
    if (!selectedData) return;
    const domain = [0.1, max(selectedData.map(d => d.map(yValues)).flat())];
    return scaleLog()
      .domain(domain)
      .range([boundedHeight, 0])
      .nice();
  }, [selectedData, yValues, boundedHeight]);

  useEffect(() => {
    if (!data) return;
    setColors(current => {
      const currentKeys = Object.keys(current);
      if (currentKeys.length === 0) {
        let newColors = {};
        selection.forEach((d, i) => (newColors[d] = i));
        return newColors;
      }
      const currentColors = Object.values(current);
      let newColors = Object.assign({}, current);
      // Adding locations
      selection
        .filter(d => !currentKeys.includes(d))
        .forEach(d => {
          let idx = 0;
          while (currentColors.includes(idx)) {
            idx++;
          }
          newColors[d] = idx;
        });
      // Removing a location
      currentKeys
        .filter(d => !selection.includes(d))
        .forEach(d => {
          delete newColors[d];
        });
      return newColors;
    });
  }, [data, selection]);

  const marks = useMemo(() => {
    if (selectedData)
      return (
        <>
          {selectedData.map((d, i) => {
            const location = d[0]['Country/Region'];
            const color =
              schemeTableau10[colors[location] % schemeTableau10.length];

            return (
              <Marks
                key={location}
                data={d}
                xScale={xScale}
                yScale={yScale}
                xValue={xValues}
                yValue={yValues}
                transition={transitions.lines}
                color={color}
                setToolTipData={setToolTipData}
                marginRight={marginRight}
                marginLeft={marginLeft}
                boundedWidth={boundedWidth}
                boundedHeight={boundedHeight}
              />
            );
          })}
        </>
      );
  }, [
    boundedWidth,
    boundedHeight,
    colors,
    marginLeft,
    marginRight,
    selectedData,
    transitions.lines,
    xScale,
    xValues,
    yScale,
    yValues,
  ]);

  return (
    <div className="chart">
      <Row className="chart-selector justify-content-center">
        <Col className="select-location">
          <SelectLocation
            locations={data ? data.keys() : defaultLocations}
            values={selection}
            colors={colors}
            colorScheme={schemeTableau10}
            onChange={(e, d) => setSelection(d)}
            onDelete={(e, d) =>
              setSelection(current => {
                const idx = current.indexOf(d);
                const newSelection = current.slice();
                newSelection.splice(idx, 1);
                return newSelection;
              })
            }
          />
        </Col>
        <Col className="close-wrapper">
          <Button
            variant="outline-danger close-button"
            size="sm"
            onClick={onClose}
          >
            <span>x</span>
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-between" >
        <Col className="chart-options" sm={12} md={4}>
          <label className="chart-option-label">Show value:</label>
          <ToogleSwitch
            value={switchValue}
            preLabel="Confirmed"
            label="Deaths"
            width={2.75}
            height={1.3}
            activeColor="#7a9abe"
            inactiveColor="#7a9abe"
            onChange={() => setSwitchValue(d => !d)}
          />
        </Col>
        {/* <Col className="chart-options" sm={12} md={4}>
          <label className="chart-option-label">x Axis:</label>
          <ToogleSwitch
            value={switchValue}
            preLabel="Date"
            label="Days since"
            width={2.75}
            height={1.3}
            activeColor="#7a9abe"
            inactiveColor="#7a9abe"
            // onChange={() => setSwitchValue(d => !d)}
          />
        </Col> */}
      </Row>
      <Row className="chart-container" ref={ref}>
        <Col>
          <ChartToolTip {...toolTipData} />
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
                  {marks}
                </>
              ) : (
                <text>Loading...</text>
              )}
            </g>
          </svg>
        </Col>
      </Row>
    </div>
  );
};
