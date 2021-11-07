import React from 'react';
import { GrClose } from 'react-icons/gr';
import { useGlobalContext } from '../context';

const Modal = ({ title, text }) => {
  const { response } = useGlobalContext();
  return (
    <div className='modal-outerbox'>
      <div className='modal-innerbox'>
        <button className='modal-close'>
          <GrClose />
        </button>
        <h1>{title}</h1>
        <section>
          <p>{text}</p>
          <div className='response-container'></div>
        </section>
      </div>
    </div>
  );
};

export default Modal;
