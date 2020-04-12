import React from 'react';
import { Nav } from 'react-bootstrap';

export const Footer = ({ url }) => {
  const mail = 'renato.hermoza@pucp.edu.pe';
  const social = 'renato145';

  return (
    <footer style={{ width: '100%' }} className="mt-5">
      <p style={{ color: '#6c757d', paddingLeft: '1rem', marginBottom: '0rem', fontSize: '0.9rem' }}>
        Made by: Renato Hermoza, check the{' '}
        <a href={`https://github.com/renato145/${url}`} target="_black">
          source code
        </a>
        .
      </p>
      <hr className="mt-2" />
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link href={`mailto:${mail}`}>{mail}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={`https://twitter.com/${social}`} target="_black">
            Twitter
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={`https://github.com/${social}`} target="_black">
            GitHub
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={`https://${social}.github.io`} target="_black">
            Blog
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </footer>
  );
};
