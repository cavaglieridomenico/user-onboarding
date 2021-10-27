import React from 'react';
import LinkToModal from './LinkToModal';

const header = ({ number }) => {
  return (
    <header>
      <p className='header__step'>step {number} of 3</p>
      <div className='header__help-container'>
        <p>Lost or have trouble?</p>
        <LinkToModal text={'Get help'} />
      </div>
    </header>
  );
};

export default header;
