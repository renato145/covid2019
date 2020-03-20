import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useData } from './useData';
import { LineChart } from './LineChart';
import { SelectLocation } from './SelectLocation';

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
  transitions: {
    lines: 1000,
  },
};

function App() {
  const data = useData({ url: SOURCE });
  const [selection, setSelection] = useState('Peru');

  return (
    <Container>
      <header>
        <h1 className="mt-4 mb-4">Covid 2019</h1>
      </header>

      <SelectLocation
        locations={data ? data.keys() : [selection]}
        selection={selection}
        setSelection={setSelection}
      />
      <LineChart data={data} selection={selection} {...chartConfig} />

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
