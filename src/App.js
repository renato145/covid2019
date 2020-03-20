import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useData } from './useData';
import { LineChart } from './LineChart';

const SOURCE = 'https://covid.ourworldindata.org/data/full_data.csv';
const chartConfig = {
  title: {
    label: 'Testing',
    dx: 0,
    dy: -20
  },
  xAxis: {
    tickSize: 6,
    tickOffset: 10
  },
  yAxis: {
    label: 'Cases',
    labelOffset: 50,
    tickSize: 6,
    tickOffset: 10
  },
  dimensions: {
    marginTop: 40,
    marginRight: 35,
    marginBottom: 25,
    marginLeft: 75,
  },
};

function App() {
  const data = useData({ url: SOURCE });

  return (
    <Container>
      <header>
        <h1 className="mt-4 mb-4">Covid 2019</h1>
      </header>

      <LineChart data={data} {...chartConfig} />

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
