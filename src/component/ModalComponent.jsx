import React, { useState } from 'react';
import Button from './Button';
import Modal from './Modal';

export const ModalComponent = () => {
  // console.log({ size, color, children });
  // const modalChange = () => {
  //   click === 'on' && setModal(!modal);
  // };

  return (
    <>
      <Modal size="small" color="green" name="open modal" btn={true} click={false}>
        닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
      </Modal>
      <Modal size="large" color="pink" name="open modal" click={true}>
        닫기 버튼이 1개가 있고 외부 영역을 누르면 모달이 닫혀요.
      </Modal>
    </>
  );
};
