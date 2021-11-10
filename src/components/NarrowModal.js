import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../context';

const NarrowModal = () => {
  const { showNarrowModal, narrowModalText, closeNarrowModal } =
    useGlobalContext();
  return (
    <div
      className={`error-message-overlay ${
        showNarrowModal ? 'show-error-message' : undefined
      }`}
    >
      <div
        className={`error-message-container ${
          showNarrowModal ? 'show-error-message-container' : undefined
        }`}
      >
        <button onClick={closeNarrowModal}>
          <AiOutlineClose />
        </button>
        <div className='error-message_text-container'>{narrowModalText}</div>
      </div>
    </div>
  );
};

export default NarrowModal;
