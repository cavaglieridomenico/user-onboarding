import React from 'react';
import arrow_right from '../assets/images/arrow_right.svg';
const LinkToModal = ({ text, showModal }) => {
  return (
    <div className='link-to-modal' onClick={showModal}>
      <p>{text}</p>
      <div className='arrow-container'>
        <img src={arrow_right} alt='arrow-icon' />
      </div>
    </div>
  );
};

export default LinkToModal;
