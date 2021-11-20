import React from 'react';
import logo from '../assets/images/logo.svg';

const Logo = ({ logoDisplay }) => {
  return (
    <div className={`logo-container ${logoDisplay}`}>
      <img src={logo} alt='logo' className='logo-img' />
    </div>
  );
};

export default Logo;
