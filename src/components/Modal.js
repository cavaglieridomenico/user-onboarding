import React from 'react';
import { GrClose } from 'react-icons/gr';
import { useGlobalContext } from '../context';

const Modal = () => {
  const { modalType, response, showModal, closeModal } = useGlobalContext();

  if (modalType === 'registration') {
    return (
      <div className={`modal-outerbox ${showModal ? 'show-modal' : ''}`}>
        <div className='modal-innerbox'>
          <button className='modal-close' onClick={closeModal}>
            <GrClose />
          </button>
          <h1>Registered user</h1>
          <section>
            <p></p>
            <div className='response-container'></div>
          </section>
        </div>
      </div>
    );
  }
};

export default Modal;
