import React from 'react';
import { Link } from 'react-router-dom';
import arrow_left from '../assets/images/arrow_left.svg';

function LinkToPage({ textLink, page }) {
  return (
    <Link className='link to-page' to={page}>
      <div className='arrow-container to-page'>
        <img src={arrow_left} alt='arrow-icon' />
      </div>
      <p>{textLink}</p>
    </Link>
  );
}

export default LinkToPage;
