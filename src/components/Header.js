import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const header = ({ number }) => {
  return (
    <header>
      <div className='text-container'>
        <p className='header__step'>step {number} of 3</p>
        <div className='header__help-container'>
          <span>Lost or have trouble?</span>
          <div className='header__help'>
            <span>Get help</span>
            <BsArrowRight />
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
