import { useState } from 'react';
import styled from 'styled-components';

const Input = ({ text, isText, name, setState }) => {
  const handleNumber = (e) => {
    const { name, value } = e.target;
    isText
      ? setState((prev) => ({ ...prev, [name]: value }))
      : setState((prev) => ({
          ...prev,
          [name]: value
            .replace(/[^0-9]/g, '')
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        }));
  };

  return (
    <>
      <label htmlFor={text}>{text}</label>
      <InputTag type="text" name={text} value={name} onChange={handleNumber} />
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
