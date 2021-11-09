import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../context';

const ErrorMessage = () => {
  const { showErrorMessage, errorMessageText, closeErrorMessage } =
    useGlobalContext();
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
          <AiOutlineClose />
        </button>
        <div className='error-message_text-container'>{errorMessageText}</div>
      </div>
    </div>
  );
};

export default ErrorMessage;
