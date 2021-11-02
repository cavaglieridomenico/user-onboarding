import React from 'react';
import { Link } from 'react-router-dom';
import arrow_left from '../assets/images/arrow_left.svg';
import arrow_right_W from '../assets/images/arrow_right_w.svg';
const Footer = ({ textLink, page }) => {
  return (
    <footer>
      <Link className='link to-page' to={page}>
        <div className='arrow-container to-page'>
          <img src={arrow_left} alt='arrow-icon' />
        </div>
        <p>{textLink}</p>
      </Link>
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
