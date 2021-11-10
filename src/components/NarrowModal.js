import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../context';

const NarrowModal = () => {
  const {
    showNarrowModal,
    narrowModalText,
    narrowModalType,
    closeNarrowModal,
  } = useGlobalContext();
  return (
    <div
      className={`narrow-modal-overlay ${
        showNarrowModal ? 'show-narrow-modal' : undefined
      }`}
    >
      <div
        className={`narrow-modal-container 
        ${showNarrowModal ? 'show-narrow-modal-container' : undefined}
        narrow-modal-${narrowModalType}
        `}
      >
        <button onClick={closeNarrowModal}>
          <AiOutlineClose
            className={`narrow-modal-${narrowModalType}
        `}
          />
        </button>
        <div className='narrow-modal_text-container'>{narrowModalText}</div>
      </div>
    </div>
  );
};

export default NarrowModal;
