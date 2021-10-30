import React from 'react';
import logo from '../assets/images/logo.svg';

const Logo = ({ view }) => {
  return (
    <div className={`logo ${view}`}>
      <img src={logo} alt='logo' />
    </div>
  );
};

export default Logo;
