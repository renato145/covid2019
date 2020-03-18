import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <Container>
      <header>
        <h1 className="mt-4 mb-4">Covid 2019</h1>
      </header>

      <p>aasdasd</p>

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
