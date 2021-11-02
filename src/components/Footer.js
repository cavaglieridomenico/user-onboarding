import React from 'react';
import { Link } from 'react-router-dom';
import arrow_left from '../assets/images/arrow_left.svg';
import arrow_right_W from '../assets/images/arrow_right_w.svg';
const Footer = ({ homePage, nextPage }) => {
  return (
    <footer>
      <Link className='link-to-page' to={homePage}>
        <div className='arrow-container'>
          <img src={arrow_left} alt='arrow-icon' />
        </div>
        <p>Back to the homepage</p>
      </Link>
      <div className='btn-container'>
        <Link to={nextPage}>
          <button className='btn btn-primary50'>Skip for now</button>
        </Link>

        <button className='btn btn-primary'>
          Next step
          <img src={arrow_right_W} alt='arrow-icon' />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
