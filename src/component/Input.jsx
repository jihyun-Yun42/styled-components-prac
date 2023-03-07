import { useState } from 'react';
import styled from 'styled-components';

const Input = ({ text, isText }) => {
  const [state, setState] = useState('');

  const handleNumber = (e) => {
    const num = e.target.value.replace(/[^0-9]/g, '');
    // setState(num.toLocaleString());
    setState(num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  };

  const handleString = (e) => {
    setState(e.target.value);
  };

  return (
    <>
      <label htmlFor={text}>{text}</label>
      <InputTag
        type="text"
        name={text}
        value={state}
        onChange={isText ? handleString : handleNumber}
      />
    </>
  );
};
const InputTag = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;

export default Input;
