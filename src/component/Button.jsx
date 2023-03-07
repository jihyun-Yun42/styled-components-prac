import { useState } from 'react';
import styled from 'styled-components';

const Button = ({ size, color, children, func }) => {
  const SMALL = { width: '100px', height: '40px' };
  const MEDIUM = { width: '130px', height: '45px' };
  const LARGE = { width: '200px', height: '50px' };

  const getSize = (size) => {
    switch (size) {
      case 'small':
        return SMALL;
      case 'medium':
        return MEDIUM;
      case 'large':
        return LARGE;
      default:
        return null;
    }
  };

  const PINK = 'rgb(250, 177, 160)';
  const GREEN = 'rgb(85, 239, 196)';

  const getColor = (color) => {
    switch (color) {
      case 'green':
        return GREEN;
      case 'pink':
        return PINK;
      default:
        return 'black';
    }
  };
  const Btn = styled.button`
    background-color: ${getSize(size) !== LARGE ? getColor(color) : 'white'};
    width: ${getSize(size).width};
    height: ${getSize(size).height};
    border: ${getSize(size) === LARGE ? `3px solid ${getColor(color)}` : 'none'};
    font-weight: ${getSize(size) === LARGE && '600'};
    color: ${getColor(color) === PINK && 'rgb(214, 48, 49)'};

    cursor: pointer;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    &:active {
      background-color: ${getSize(size) !== LARGE ? getColor(color) : 'white'};
      filter: brightness(0.7);
    }
  `;
  const onclickFunc = (func) => {
    if (func === 'alert') alert('버튼 만들었어요');
    else if (func === 'prompt') prompt('제가 만든 버튼 어떤가요?');
  };

  return <Btn onClick={() => onclickFunc(func)}>{children}</Btn>;
};

export default Button;
