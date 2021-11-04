import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Preferences = () => {
  return (
    <div className='onboarding-outerbox'>
      <Sidebar
        text={
          'United Properties is about fast & easy searching, buying, selling and investing ever — online, with an expert by our side'
        }
        author={'Ollie Mcmahon'}
        role={'MANAGING DIRECTOR'}
      />
      <div className='onboarding-innerbox'>
        <Header />
        <section className='pref'>
          <h1>Investment preferences</h1>
          <article>
            <p>
              This will help us figure out what your investment options are so
              that we can show you only possibly intresting for you deals
            </p>
          </article>
          <article>
            <h2>What kind of real estate are you interested in?</h2>
            <div id='form-pref'>
              <div className='form-container'>
                <div className='check-box selected'>
                  <input type='checkbox' id='single' />
                  <label htmlFor='single'>Single family</label>
                </div>
                <div className='check-box'>
                  <input type='checkbox' id='residential' />
                  <label htmlFor='residential'>Residential multifamily</label>
                </div>
                <div className='check-box'>
                  <input type='checkbox' id='retail' />
                  <label htmlFor='retail'>Commercial retail</label>
                </div>
                <div className='check-box'>
                  <input type='checkbox' id='industrial' />
                  <label htmlFor='industrial'>Commercial industrial</label>
                </div>
                <div className='check-box'>
                  <input type='checkbox' id='hospitality' />
                  <label htmlFor='hospitality'>Commercial hospitality</label>
                </div>
                <div className='check-box'>
                  <input type='checkbox' id='warehousing' />
                  <label htmlFor='warehousing'>Commercial warehousing</label>
                </div>
                <div className='check-box'>
                  <input type='checkbox' id='office' />
                  <label htmlFor='office'>Commercial office</label>
                </div>
                <div className='check-box'>
                  <input type='checkbox' id='other' />
                  <label htmlFor='other'>Other</label>
                </div>
              </div>
            </div>
          </article>
        </section>
        <Footer homePage={'/'} nextPage={'/'} textRightButton={'Finish'} />
      </div>
    </div>
  );
};

export default Preferences;
