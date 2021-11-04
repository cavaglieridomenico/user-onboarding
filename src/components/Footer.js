import React from 'react';
import { Link } from 'react-router-dom';
import arrow_left from '../assets/images/arrow_left.svg';
const Footer = ({ homePage, nextPage, textRightButton }) => {
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
        <Link to={nextPage}>
          <button className='btn btn-primary'>
            <span>{textRightButton}</span>
            <div
              className={
                textRightButton === 'Next step' ? 'arrow-button' : 'none'
              }
            ></div>
          </button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
