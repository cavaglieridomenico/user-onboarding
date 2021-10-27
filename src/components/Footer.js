import React from 'react';
import LinkToPage from './LlnkToPage';

const Footer = ({ textLink, page }) => {
  return (
    <footer>
      <LinkToPage textLink={textLink} page={page} />
    </footer>
  );
};

export default Footer;
