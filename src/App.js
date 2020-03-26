import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useData } from './useData';
import { LineChart } from './LineChart';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const chartConfig = {
  // title: {
  //   label: 'Testing',
  //   dx: 0,
  //   dy: -20,
  // },
  dimensions: {
    marginTop: 10,
    marginRight: 35,
    marginBottom: 30,
    marginLeft: 75,
  },
  xAxis: {
    tickSize: 6,
    tickOffset: 15,
    tickWidth: 130,
  },
  yAxis: {
    label: 'Cases',
    labelOffset: 50,
    tickSize: 6,
    tickOffset: 10,
    tickHeight: 100,
  },
  xValues: d => d.date,
  transitions: {
    lines: 500,
  },
  defaultLocations: ['Peru', 'Australia', 'Iran', 'Italy'],
};

function App() {
  const data = useData();
  const [charts, setCharts] = useState([0]);

  return (
    <Container className="app-container">
      <header>
        <h1 className="mt-4 mb-4">Covid 2019</h1>
      </header>

      <main className="app-main">
        <Row>
          <Col>
            <p>
              Plots of coronavirus data (
              <a
                href="https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data"
                target="_black"
              >
                source
              </a>
              ).
            </p>
          </Col>
        </Row>

        <Row>
          {charts.map(i => (
            <Col key={i} md={12} xl={charts.length > 1 ? 6 : 12}>
              <LineChart
                data={data}
                onClose={() =>
                  setCharts(d => {
                    const idx = d.indexOf(i);
                    const out = d.slice();
                    out.splice(idx, 1);
                    return out;
                  })
                }
                {...chartConfig}
              />
            </Col>
          ))}
        </Row>
        <Row className="mt-2">
          <Col className="text-right">
            <Button
              onClick={() =>
                setCharts(d => {
                  const idx = d.length === 0 ? 0 : d[d.length - 1] + 1;
                  return d.concat(idx);
                })
              }
            >
              Add Chart
            </Button>
          </Col>
        </Row>
      </main>

      <footer>
        <Row>
          <Col className="mt-4 text-right">
            <a href="https://github.com/renato145/covid2019" target="_black">
              Source code
            </a>
          </Col>
        </Row>
      </footer>
    </Container>
  );
}

export default App;
