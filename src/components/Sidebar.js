import React from 'react';
import Logo from './Logo';

const Sidebar = ({ page, text, author, role }) => {
  return (
    <aside>
      <Logo view='logo-desktop' />
      <div className='progress-container '>
        <div className='progress'>
          <div className='square-text-container'>
            <div className='outer-square outer-active'>
              <div className='inner-square inner-active'></div>
            </div>
            <p className='text-active'>Contact details</p>
          </div>
          <div className='rectangle outer-active'></div>
          <div className='rectangle outer-active'></div>
        </div>
        <div className='progress'>
          <div className='square-text-container'>
            <div
              className={`outer-square ${
                page !== 'contact' ? 'outer-active' : undefined
              }`}
            >
              <div
                className={`inner-square ${
                  page !== 'contact' ? 'inner-active' : undefined
                }`}
              ></div>
            </div>
            <p className={page !== 'contact' ? 'text-active' : undefined}>
              Investment plans
            </p>
          </div>
          <div
            className={`rectangle ${
              page !== 'contact' ? 'outer-active' : undefined
            }`}
          ></div>
          <div
            className={`rectangle ${
              page !== 'contact' ? 'outer-active' : undefined
            }`}
          ></div>
        </div>
        <div className='progress'>
          <div className='square-text-container'>
            <div
              className={`outer-square ${
                page === 'preferences' ? 'outer-active' : undefined
              }`}
            >
              <div
                className={`inner-square ${
                  page === 'preferences' ? 'inner-active' : undefined
                }`}
              ></div>
            </div>
            <p className={page === 'preferences' ? 'text-active' : undefined}>
              Investment preferences
            </p>
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
