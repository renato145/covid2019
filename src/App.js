import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useData } from './useData';
import { LineChart } from './LineChart';
import { range } from 'd3';

const SOURCE = 'https://covid.ourworldindata.org/data/full_data.csv';
const chartConfig = {
  title: {
    label: 'Testing',
    dx: 0,
    dy: -20,
  },
  dimensions: {
    marginTop: 40,
    marginRight: 35,
    marginBottom: 30,
    marginLeft: 75,
  },
  xAxis: {
    tickSize: 6,
    tickOffset: 15,
  },
  yAxis: {
    label: 'Cases',
    labelOffset: 50,
    tickSize: 6,
    tickOffset: 10,
  },
  xValues: d => d.date,
  yValues: d => d.total_cases,
  markRadius: 9,
  transitions: {
    lines: 1000,
  },
  defaultLocation: 'Peru',
};

function App() {
  const data = useData({ url: SOURCE });
  const [charts, setCharts] = useState([0]);

  return (
    <Container>
      <header>
        <h1 className="mt-4 mb-4">Covid 2019</h1>
      </header>

      <Row>
        {charts.map(i => (
          <Col key={i} md={12}>
            <LineChart data={data} onClose={() => setCharts(d => {
              const idx = d.indexOf(i);
              const out = d.slice();
              out.splice(idx, 1);
              return out;

            })} {...chartConfig} />
          </Col>
        ))}
      </Row>
      <Row className="mt-2">
        <Col>
          <Button
            onClick={() => setCharts(d => d.concat([d[d.length - 1] + 1]))}
          >
            Add Chart
          </Button>
        </Col>
      </Row>

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
