import React, {
  useMemo,
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import {
  scaleTime,
  extent,
  max,
  scaleLinear,
  scaleLog,
  schemeTableau10,
} from 'd3';
import { Button, Col, Row } from 'react-bootstrap';
import { AnnotationCalloutCircle } from 'react-annotation';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks, Dot } from './Marks';
import { useChartDimensions } from './useChartDimensions';
import { SelectLocation } from './SelectLocation';
import { ChartToolTip } from './ChartToolTip';
import { ToogleSwitch } from './ToogleSwitch';
import './LineChart.css';
import { clamp } from './utils';
import { Voronoi } from './Voronoi';
import { useD3Zoom } from './useD3Zoom';

export const LineChart = ({
  title,
  data,
  dimensions,
  xAxis,
  yAxis,
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

  const svgInteractionRef = useRef();
  const [selection, setSelection] = useState(defaultLocations);
  const [colors, setColors] = useState({});
  const [toolTipData, setToolTipData] = useState();
  const [switchXValue, setSwitchXValue] = useState(false);
  const [switchXAxis, setSwitchXAxis] = useState(false);
  const zoomProps = useD3Zoom({ ref: svgInteractionRef });

  const xValues = useCallback(
    d =>
      switchXAxis
        ? switchXValue
          ? d['idxDeaths']
          : d['idxConfirmed']
        : d['date'],
    [switchXAxis, switchXValue]
  );

  const yValues = useCallback(
    d => (switchXValue ? d['Deaths'] : d['Confirmed']),
    [switchXValue]
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
    const scaleType = switchXAxis ? scaleLinear : scaleTime;
    return scaleType()
      .domain(domain)
      .range([0, boundedWidth]);
  }, [selectedData, xValues, boundedWidth, switchXAxis]);

  const yScale = useMemo(() => {
    if (!selectedData) return;
    const domain = [1, max(selectedData.map(d => d.map(yValues)).flat())];
    return scaleLog()
      .domain(domain)
      .range([boundedHeight, 0])
      .nice();
  }, [selectedData, yValues, boundedHeight]);

  const xScaleShow = useMemo(() => {
    if (!xScale) return;
    return zoomProps.rescaleX ? zoomProps.rescaleX(xScale) : xScale.copy();
  }, [xScale, zoomProps]);

  const yScaleShow = useMemo(() => {
    if (!yScale) return;
    return zoomProps.rescaleY ? zoomProps.rescaleY(yScale) : yScale.copy();
  }, [yScale, zoomProps]);

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

  const annotations = useMemo(() => {
    if (!selectedData) return;
    let annotations = [];
    selectedData.forEach(d => {
      d.filter(o => o['annotation']).forEach(o => {
        const x = xScale(xValues(o));
        const y = yScale(yValues(o));
        const dx = 30;
        const dy = 20;
        const wrap = 80;
        annotations.push({
          className: 'custom-annotation',
          x,
          y,
          dx: x + dx + marginLeft + wrap >= width - marginRight ? -dx : dx,
          dy,
          note: {
            title: o['Country/Region'],
            label: o['annotation'],
            lineType: null,
            align: 'middle',
            wrap,
            orientation: 'leftRight',
          },
          subject: { radius: 10, radiusPadding: 0 },
        });
      });
    });

    return annotations;
  }, [
    marginLeft,
    marginRight,
    selectedData,
    width,
    xScale,
    xValues,
    yScale,
    yValues,
  ]);

  const marks = useMemo(() => {
    if (selectedData)
      return (
        <>
          {selectedData.map((d, i) => {
            if (d.length === 0) return;
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
              />
            );
          })}
        </>
      );
  }, [
    colors,
    selectedData,
    transitions.lines,
    xScale,
    xValues,
    yScale,
    yValues,
  ]);

  const handleVoronoiMouseEnter = useCallback(
    (loc, day, x, y) => {
      const d = selectedData[loc][day];
      const xShow = xScaleShow(xScale.invert(x));
      const yShow = yScaleShow(yScale.invert(y));
      setToolTipData({
        data: d,
        x: clamp(xShow, marginLeft, boundedWidth - marginRight - 25),
        y: yShow,
        tooltipX: x,
        tooltipY: y,
        up: yShow > boundedHeight / 2,
        color:
          schemeTableau10[colors[d['Country/Region']] % schemeTableau10.length],
      });
    },
    [
      boundedHeight,
      boundedWidth,
      colors,
      marginLeft,
      marginRight,
      selectedData,
      xScale,
      xScaleShow,
      yScale,
      yScaleShow,
    ]
  );

  const handleVoronoiMouseLeave = useCallback(() => setToolTipData(''), []);

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
      <Row className="justify-content-between">
        <Col className="chart-options" sm={12} md={6}>
          <label className="chart-option-label">Show value:</label>
          <ToogleSwitch
            value={switchXValue}
            preLabel="Confirmed"
            label="Deaths"
            width={2.75}
            height={1.3}
            activeColor="#7a9abe"
            inactiveColor="#7a9abe"
            onChange={() => setSwitchXValue(d => !d)}
          />
        </Col>
        <Col className="chart-options" sm={12} md={6}>
          <label className="chart-option-label">x Axis:</label>
          <ToogleSwitch
            value={switchXAxis}
            preLabel="Date"
            label="Days since"
            width={2.75}
            height={1.3}
            activeColor="#7a9abe"
            inactiveColor="#7a9abe"
            onChange={() => setSwitchXAxis(d => !d)}
          />
        </Col>
      </Row>
      <Row className="chart-container" ref={ref}>
        <Col>
          <svg width={width} height={height} style={{ position: 'absolute' }}>
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
                    xScale={xScaleShow}
                    boundedHeight={boundedHeight}
                    boundedWidth={boundedWidth}
                    date={!switchXAxis}
                    {...xAxis}
                  />
                  <AxisLeft
                    yScale={yScaleShow}
                    boundedHeight={boundedHeight}
                    boundedWidth={boundedWidth}
                    {...yAxis}
                  />
                </>
              ) : (
                <text>Loading...</text>
              )}
            </g>
          </svg>
          <svg
            width={width - marginLeft - marginRight}
            height={height - marginTop - marginBottom}
            style={{ position: 'absolute', marginLeft: marginLeft, marginTop: marginTop }}
          >
            <g>
              {selectedData && (
                <g
                  transform={`translate(${zoomProps.x}, ${zoomProps.y}) scale(${zoomProps.k})`}
                >
                  {marks}
                  {toolTipData && (
                    <Dot
                      x={toolTipData.tooltipX}
                      y={toolTipData.tooltipY}
                      r={10}
                      fill={toolTipData.color}
                      transition={transitions.highlight}
                    />
                  )}
                  {annotations.map((props, i) => (
                    <AnnotationCalloutCircle key={i} {...props} />
                  ))}
                </g>
              )}
            </g>
          </svg>
          <ChartToolTip {...toolTipData} />
          <svg
            ref={svgInteractionRef}
            width={width}
            height={height}
            style={{ position: 'absolute' }}
          >
            <g
              transform={`translate(${zoomProps.x + marginLeft}, ${zoomProps.y +
                marginTop}) scale(${zoomProps.k})`}
            >
              {selectedData && (
                <Voronoi
                  data={selectedData}
                  onMouseEnter={handleVoronoiMouseEnter}
                  onMouseLeave={handleVoronoiMouseLeave}
                  {...{
                    xValues,
                    yValues,
                    xScale,
                    yScale,
                    width,
                    height,
                    marginLeft,
                    marginRight,
                    marginBottom,
                    marginTop,
                  }}
                />
              )}
            </g>
          </svg>
        </Col>
      </Row>
    </div>
  );
};
