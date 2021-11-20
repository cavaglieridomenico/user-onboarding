import React from 'react';
import Logo from './Logo';
import Progress from './Progress';

const Sidebar = ({
  progressDisplay,
  quoteDisplay,
  quoteText,
  quoteAuthor,
  quoteAuthorRole,
}) => {
  return (
    <aside>
      <Logo logoDisplay='logo-desktop' />
      <Progress progressDisplay={progressDisplay} />
      <div className={`quote-container ${quoteDisplay}`}>
        <div className='quote-icon'></div>
        <p>{quoteText}</p>
        <p className='author'>{quoteAuthor}</p>
        <p className='role'>{quoteAuthorRole}</p>
        <div className='logo-icon'></div>
      </div>
    </aside>
  );
};

export default Sidebar;
