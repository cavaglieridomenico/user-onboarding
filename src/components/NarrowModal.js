import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../context';

const NarrowModal = () => {
  const {
    showNarrowModal,
    narrowModalType,
    narrowModalText,
    narrowModalText2,
    setNarrowModalClosed,
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
        <button onClick={setNarrowModalClosed}>
          <AiOutlineClose
            className={`narrow-modal-${narrowModalType}
        `}
          />
        </button>
        <div className='narrow-modal_text-container'>
          <p>{narrowModalText}</p>
          <br />
          <p>{narrowModalText2}</p>
        </div>
      </div>
    </div>
  );
};

export default NarrowModal;
