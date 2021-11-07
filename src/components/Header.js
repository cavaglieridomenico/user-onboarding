import React from 'react';
import LinkToModal from './LinkToModal';
import { useGlobalContext } from '../context';

const Header = ({ number }) => {
  const { showHelp } = useGlobalContext();
  return (
    <header>
      <p className='header__step'>step {number} of 3</p>
      <div className='header__help-container'>
        <p>Lost or have trouble?</p>
        <LinkToModal text={'Get help'} showModal={showHelp} />
      </div>
    </header>
  );
};

export default Header;
