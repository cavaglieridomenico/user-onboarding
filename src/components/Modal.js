import React from 'react';
import { GrClose } from 'react-icons/gr';
import { useGlobalContext } from '../context';

const Modal = () => {
  const { modalType, response, showModal, closeModal } = useGlobalContext();

  if (modalType === 'registration' && response.preferences) {
    return (
      <div className={`modal-outerbox ${showModal ? 'show-modal' : ''}`}>
        <div className='modal-innerbox'>
          <button className='modal-close' onClick={closeModal}>
            <GrClose />
          </button>
          <h1 className='modal-title'>Registered user</h1>
          <section>
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
          </section>
        </div>
      </div>
    );
  }
  if (modalType === 'help') {
    return (
      <div className={`modal-outerbox ${showModal ? 'show-modal' : ''}`}>
        <div className='modal-innerbox'>
          <button className='modal-close' onClick={closeModal}>
            <GrClose />
          </button>
          <h1 className='modal-title'>Lost or have trouble?</h1>
          <section>
            <div className='modal_text-container'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                iste voluptatum similique. Maiores, ratione ipsum fuga impedit
                similique velit quos. Optio, perspiciatis? Tempora, sed.
                Voluptates facere accusamus distinctio sequi ipsam. similique
                velit quos. Optio, perspiciatis? Tempora, sed. Voluptates facere
                accusamus distinctio sequi ipsam.
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default Modal;
