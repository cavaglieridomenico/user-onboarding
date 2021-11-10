import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../context';

const NarrowModal = () => {
  const {
    showNarrowModal,
    narrowModalText,
    narrowModalType,
    setNarrowModalClose,
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
        <button onClick={setNarrowModalClose}>
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
