import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Error = () => {
  const { setErrorPage } = useGlobalContext();

  /**
   * The current page is an error page
   */
  useEffect(() => {
    setErrorPage(true);
  }, [setErrorPage]);

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
