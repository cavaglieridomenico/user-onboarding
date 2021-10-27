import React from 'react';
import LinkToModal from './LinkToModal';

const header = ({ number }) => {
  return (
    <header>
      <div className='text-container'>
        <p className='header__step'>step {number} of 3</p>
        <div className='header__help-container'>
        <LinkToModal text={'Get help'} />
      </div>
    </header>
  );
};

export default header;
