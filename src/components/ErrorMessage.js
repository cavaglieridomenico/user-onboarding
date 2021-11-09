import React from 'react';
import { GrClose } from 'react-icons/gr';

import { useGlobalContext } from '../context';

const ErrorMessage = () => {
  const { showErrorMessage, errorText, closeErrorMessage } = useGlobalContext();

  return (
    <div
      className={`error-message-overlay ${
        showErrorMessage ? 'show-error-message' : undefined
      }`}
    >
      <div
        className={`error-message-container ${
          showErrorMessage ? 'show-error-message-container' : undefined
        }`}
      >
        <button onClick={closeErrorMessage}>
          <GrClose />
        </button>
        <div className='error-message_text-container'>{errorText}</div>
      </div>
    </div>
  );
};

export default ErrorMessage;
