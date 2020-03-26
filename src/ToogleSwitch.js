import React, { useState } from 'react';
import styled from 'styled-components';

const TextLabel = styled.label`
  color: black;
  font-size: 0.9rem;
  font-weight: ${d => d.active ? 400 : 300};
  // font-weight: ${d => d.active ? 500 : 400};
  opacity: ${d => d.active ? 1 : 0.5};
  margin-left: ${d => (d.right ? 0.25 : 0)}rem;
  margin-right: ${d => (d.left ? 0.25 : 0)}rem;
  transition: 0.2s;
`;

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: ${d => d.width}rem;
  height: ${d => d.height}rem;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  border-radius: 1rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${d => d.inactiveColor};
  -webkit-transition: 0.2s;
  transition: 0.2s;

  &:before {
    position: absolute;
    content: '';
    border-radius: 50%;
    height: ${d => d.ballSize}rem;
    width: ${d => d.ballSize}rem;
    left: ${d => d.ballMargin}rem;
    bottom: ${d => d.ballMargin}rem;
    background-color: white;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }

  input:checked + & {
    background-color: ${d => d.activeColor};
  }

  input:focus + & {
    box-shadow: 0 0 1px ${d => d.activeColor};
  }

  input:checked + &:before {
    -webkit-transform: translateX(${d => d.move}rem);
    -ms-transform: translateX(${d => d.move}rem);
    transform: translateX(${d => d.move}rem);
  }
`;

export const ToogleSwitch = ({
  value,
  preLabel,
  label,
  width = 3.5,
  height = 1.5,
  ballMargin = 0.2,
  activeColor = '#007bff',
  inactiveColor = '#ccc',
  onChange = () => {},
}) => {
  const ballSize = height - ballMargin * 2;

  return (
    <div>
      {preLabel && <TextLabel left active={!value}>{preLabel}</TextLabel>}
      <SwitchLabel width={width} height={height}>
        <input type="checkbox" checked={value} onChange={onChange} />
        <Slider
          ballSize={ballSize}
          move={width - ballSize - ballMargin * 2}
          ballMargin={ballMargin}
          activeColor={activeColor}
          inactiveColor={inactiveColor}
        />
      </SwitchLabel>
      {label && <TextLabel right active={value}>{label}</TextLabel>}
    </div>
  );
};
