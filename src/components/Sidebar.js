import React from 'react';
import Logo from './Logo';
import Progress from './Progress';

const Sidebar = ({ text, author, role }) => {
  return (
    <aside>
      <Logo view='logo-desktop' />
      <Progress />
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
