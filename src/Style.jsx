import { useState } from 'react';
import styled from 'styled-components';

export const Button = ({ size, color, text }) => {
  console.log({ size, color, text });
  const small = { width: '100px', height: '40px' };
  const medium = { width: '130px', height: '45px' };
  const large = { width: '200px', height: '50px' };

  const getSize = (size) => {
    switch (size) {
      case 'small':
        return small;
      case 'medium':
        return medium;
      case 'large':
        return large;
      default:
        return null;
    }
  };

  const pink = 'rgb(250, 177, 160)';
  const green = 'rgb(85, 239, 196)';

  const getColor = (color) => {
    switch (color) {
      case 'green':
        return green;
      case 'pink':
        return pink;
      default:
        return 'black';
    }
  };
  const Button = styled.button`
    background-color: ${getSize(size) !== large ? getColor(color) : 'white'};
    width: ${getSize(size).width};
    height: ${getSize(size).height};
    border: ${getSize(size) === large ? `3px solid ${getColor(color)}` : 'none'};
    font-weight: ${getSize(size) === large && '600'};
    color: ${getColor(color) === pink && 'rgb(214, 48, 49)'};

    cursor: pointer;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
  `;
  return <Button>{text}</Button>;
};

export const Input = ({ text, isText }) => {
  const [state, setState] = useState('');
  return (
    <>
      <label htmlFor={text}>{text}</label>
      <input
        type="text"
        name={text}
        value={state}
        onChange={(e) => setState(() => e.target.value)}
      />
    </>
  );
};
