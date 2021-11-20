import React from 'react';
import Logo from './Logo';
import Progress from './Progress';

const Sidebar = ({ text, author, role }) => {
  return (
    <aside>
      <Logo logoDisplay='logo-desktop' />
      <Progress progressDisplay={progressDisplay} />
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
