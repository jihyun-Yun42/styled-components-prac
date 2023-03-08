import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Modal = ({ children, click, btn, ...rest }) => {
  const [modal, setModal] = useState(true);
  const modalChange = (e) => {
    e && setModal(!modal);
  };
  // const modalBtnChange = () => {
  //   btn && setModal(!modal);
  // };
  return (
    <>
      <Button {...rest} onClick={() => setModal(!modal)} />
      {!modal && (
        <>
          <BackModal onClick={() => modalChange(click)} />
          <CustomModal>
            {children}
            <ModalBtn btn={btn}>
              <Button
                size="small"
                color="pink"
                name="닫기"
                onClick={() => setModal(!modal)}
              />
              <Button size="small" color="green" name="확인" />
            </ModalBtn>
          </CustomModal>
        </>
      )}
    </>
  );
};

const CustomModal = styled.div`
  border-radius: 20px;
  background-color: white;
  width: 500px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 50%);
  padding: 24px;
  box-sizing: border-box;
`;
const BackModal = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  height: 100%;
  background-color: #ddd;
  opacity: 0.7;
  /* &: active; */
`;
const ModalBtn = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: ${({ btn }) => (btn ? 'flex' : 'none')};
  gap: 5px;
`;

export default Modal;
