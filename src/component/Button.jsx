import styled, { css } from 'styled-components';

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
const SMALL = css`
  width: 100px;
  height: 40px;
  border: none;
  background-color: ${(props) => getColor(props.color)};
`;
const MEDIUM = css`
  width: 130px;
  height: 45px;
  border: none;
  background-color: ${(props) => getColor(props.color)};
`;
const LARGE = css`
  width: 200px;
  height: 50px;
  font-weight: 800;
  background-color: white;
  border: ${(props) => `3px solid ${getColor(props.color)}`};
`;

const Btn = styled.button`
  ${(props) => {
    switch (props.size) {
      case 'medium':
        return MEDIUM;
      case 'large':
        return LARGE;
      default:
        return SMALL;
    }
  }};
  color: ${(props) => getColor(props.color) === PINK && 'rgb(214, 48, 49)'};
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  &:active {
    filter: brightness(0.7);
  }
`;

function Button({ name, emoji, ...rest }) {
  return (
    <Btn {...rest}>
      {name}
      {emoji}
    </Btn>
  );
}
export default Button;
