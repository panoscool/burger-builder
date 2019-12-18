import React, { Fragment, memo } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

function Modal({ show, modalClosed, children }) {
  return (
    <Fragment>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className="Modal"
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
        }}
      >
        {children}
      </div>
    </Fragment>
  );
}

export default memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
