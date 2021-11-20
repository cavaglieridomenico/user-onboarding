import React, { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../context';

const Modal = () => {
  const {
    showModal,
    modalTitle,
    modalText,
    modalResponse,
    response,
    setModalClose,
  } = useGlobalContext();

  /**
   * Prevent body scrolling under the modal
   */
  useEffect(() => {
    if (showModal) {
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
    }
  }, [showModal]);

  return (
    <div className={`modal-overlay ${showModal && 'show-modal'}`}>
      <div className='modal-container '>
        <button className='modal-close' onClick={setModalClose}>
          <AiOutlineClose />
        </button>

        <h1 className='modal-title'>{modalTitle}</h1>
        <div className='modal_text-container'>
          {modalText}
          {modalResponse ? (
            <div className='response-container'>
              <ul>
                <li>user number: </li>
                <li>{response.id}</li>
                <li>Full name: </li>
                <li>{response.fullName}</li>
                <li>Phone number:</li>
                <li>
                  {response.phoneCode} {response.phoneNumber}
                </li>
                <li>Email:</li>
                <li>{response.email}</li>
                <li>Country: </li>
                <li>{response.country}</li>
                <li>Investment plan from: </li>
                <li>${response.planFrom}</li>
                <li>Investment plan to: </li>
                <li>${response.planTo}</li>
                <li>Accredited investor: </li>
                <li>{response.accredited}</li>
                <li>Investment preferences: </li>
                <li>
                  {response.preferences.map((item, index) => {
                    return <p key={index}>{item}</p>;
                  })}
                </li>
              </ul>
            </div>
          ) : undefined}
        </div>
      </div>
    </div>
  );
};

export default Modal;
