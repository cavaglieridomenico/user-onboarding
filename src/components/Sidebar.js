import React from 'react';
import Logo from './Logo';

const Sidebar = ({ text, author, role }) => {
  return (
    <aside>
      <Logo view='logo-desktop' />
      <div className='progress-container '>
        <div className='progress'>
          <div className='square-text-container'>
            <div className='outer-square'>
              <div className='inner-square'></div>
            </div>
            <p>Contact details</p>
          </div>
          <div className='rectangle'></div>
          <div className='rectangle'></div>
        </div>
        <div className='progress'>
          <div className='square-text-container'>
            <div className='outer-square'>
              <div className='inner-square'></div>
            </div>
            <p>Investment plans</p>
          </div>
          <div className='rectangle'></div>
          <div className='rectangle'></div>
        </div>
        <div className='progress'>
          <div className='square-text-container'>
            <div className='outer-square'>
              <div className='inner-square'></div>
            </div>
            <p>Investment preferences</p>
          </div>
        </div>
      </div>
      <div className='quote-container'>
        <div className='quote-icon'></div>
        <p>{text}</p>
        <p className='author'>{author}</p>
        <p className='role'>{role}</p>
        <div className='logo-icon'></div>
      </div>
    </aside>
  );
};

export default Sidebar;
