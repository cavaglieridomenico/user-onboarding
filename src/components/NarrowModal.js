import React, { useEffect } from 'react';
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

  /**
   * Prevent body scrolling under the modal
   */
  useEffect(() => {
    if (showNarrowModal) {
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
    }
  }, [showNarrowModal]);

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
