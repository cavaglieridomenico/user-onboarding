import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Error = () => {
  return (
    <div className='onboarding-outerbox'>
      <Sidebar progressDisplay={'hidden'} quoteDisplay={'hidden'} />
      <div className='onboarding-innerbox error'>
        <h1>Page not found.</h1>
        <Footer
          homePage={'/'}
          skipStep={'/'}
          textRightButton={'Next Step'}
          buttonContainerDisplay={'btn-container-none'}
        />
      </div>
    </div>
  );
};

export default Error;
