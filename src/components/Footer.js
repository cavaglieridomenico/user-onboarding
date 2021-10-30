import React from 'react';
import LinkToPage from './LlnkToPage';
import arrow_right_W from '../assets/images/arrow_right_w.svg';
const Footer = ({ textLink, page }) => {
  return (
    <footer>
      <LinkToPage textLink={textLink} page={page} />
      <div className='btn-container'>
        <button className='btn btn-primary50'>Skip for now</button>
        <button className='btn btn-primary'>
          Next step
          <img src={arrow_right_W} alt='arrow-icon' />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
