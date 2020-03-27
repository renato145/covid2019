import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from 'react';
import { schemeTableau10, format, scaleLog } from 'd3';
import moment from 'moment';
import ResponsiveXYFrame from 'semiotic/lib/ResponsiveXYFrame';
import { Row, Col, Button } from 'react-bootstrap';
import { SelectLocation } from './SelectLocation';
import { ToogleSwitch } from './ToogleSwitch';
import './LineChart.css';
import { ResizeObserver } from '@juggle/resize-observer';

const formatNumbers = format('.0s');
const formatNumbersTooltip = format(',');

export const LineChart = ({ data, onClose, defaultLocations }) => {
  const ref = useRef();
  const [selection, setSelection] = useState(defaultLocations);
  const [colors, setColors] = useState({});
  const [switchYValue, setSwitchYValue] = useState(false);
  const [switchXAxis, setSwitchXAxis] = useState(false);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const xValues = useCallback(
    d =>
      switchXAxis
        ? switchYValue
          ? d['idxDeaths']
          : d['idxConfirmed']
        : d['date'],
    [switchXAxis, switchYValue]
  );

  const yValues = useCallback(
    d => (switchYValue ? d['Deaths'] : d['Confirmed']),
    [switchYValue]
  );

  const lines = useMemo(() => {
    if (data)
      return selection.map(d => ({
        title: d,
        coordinates: data[`$${d}`].filter(o => yValues(o) >= 1),
      }));
  }, [data, selection, yValues]);

  const annotations = useMemo(() => {
    if (!lines) return;
    let annotations = [];
    lines.forEach(d =>
      d['coordinates']
        .filter(o => o['annotation'])
        .forEach(o => {
          annotations.push({
            type: 'enclose',
            coordinates: [o],
            className: 'custom-annotation',
            note: {
              // title: o['Country/Region'],
              label: o['annotation'],
              orientation: 'leftRight',
              align: 'middle',
              lineType: null,
              wrap: 100,
            },
            dx: 30,
            dy: 10,
            connector: { end: 'none' },
          });
        })
    );

    return annotations;
  }, [lines]);

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

  useEffect(() => {
    const element = ref.current.node;
    const resizeObserver = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      setWidth(width);
      setHeight(height);
    });
    resizeObserver.observe(element);
    return () => resizeObserver.unobserve(element);
  }, []);

  const getColor = d =>
    schemeTableau10[colors[d.title] % schemeTableau10.length];
  const getTooltip = d => (
    <div className="tool-tip">
      <p>
        <b>{d['Country/Region']}</b>
        <br />
        {moment(d['date']).format('L')}
        <br />
        Confirmed: {formatNumbersTooltip(d['Confirmed'])}
        <br />
        Deaths: {formatNumbersTooltip(d['Deaths'])}
        <br />
        Recovered: {formatNumbersTooltip(d['Recovered'])}
      </p>
    </div>
  );

  return (
    <div>
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
            value={switchYValue}
            preLabel="Confirmed"
            label="Deaths"
            width={2.75}
            height={1.3}
            activeColor="#7a9abe"
            inactiveColor="#7a9abe"
            onChange={() => setSwitchYValue(d => !d)}
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
      <div className="chart-container">
        <ResponsiveXYFrame
          ref={ref}
          lines={lines}
          xAccessor={xValues}
          yAccessor={yValues}
          yScaleType={scaleLog}
          lineStyle={d => ({
            stroke: getColor(d),
          })}
          axes={[
            { label: 'Cases' , orient: 'left', tickFormat: formatNumbers, ticks: 3 },
            {
              orient: 'bottom',
              tickFormat: d => (switchXAxis ? d : moment(d).format('Do MMM')),
              ticks: width / 130,
            },
          ]}
          margin={{ left: 60, bottom: 30, right: 10, top: 20 }}
          hoverAnnotation
          tooltipContent={getTooltip}
          annotations={annotations}
          responsiveWidth
          responsiveHeight
        />
      </div>
    </div>
  );
};
