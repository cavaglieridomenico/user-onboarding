import React from 'react';
import Logo from './Logo';

const Sidebar = () => {
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
        <p>
          We care about your time, that's why we created a 3-stage onboarding
          that will not take more than 5 minutes to complete
        </p>
        <p className='author'>William Mac</p>
        <p>CO-FOUNDER, INVESTOR</p>
        <div className='logo-icon'></div>
      </div>
    </aside>
  );
};

export default Sidebar;
