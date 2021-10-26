import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ page }) => {
  return (
    <footer>
      <h1>Footer</h1>
      <div>
        <Link to={page}>Skip for now</Link>
      </div>
    </footer>
  );
};

export default Footer;
