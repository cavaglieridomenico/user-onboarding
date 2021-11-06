import React, { useRef } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useGlobalContext } from '../context';

const Preferences = () => {
  const { getPreferences, setDataReady } = useGlobalContext();
  const preferences = useRef('');

  const handleSubmitPreferences = () => {
    const allPrefs = preferences.current.elements.preferences;
    const checkedPrefs = [];
    for (let pref of allPrefs) {
      if (pref.checked) {
        checkedPrefs.push(pref.value);
      }
    }
    getPreferences(checkedPrefs);
    setDataReady(true);
  };

  return (
    <div className='onboarding-outerbox pref'>
      <Sidebar
        text={
          'United Properties is about fast & easy searching, buying, selling and investing ever — online, with an expert by our side'
        }
        author={'Ollie Mcmahon'}
        role={'MANAGING DIRECTOR'}
      />
      <div className='onboarding-innerbox pref'>
        <Header number={3} />
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
            <form id='form-pref' ref={preferences}>
              <div className='form-container'>
                <div className='check-box selected'>
                  <input
                    type='checkbox'
                    id='single-family'
                    value='single-family'
                    name='preferences'
                  />
                  <label htmlFor='single-family'>Single family</label>
                </div>
                <div className='check-box'>
                  <input
                    type='checkbox'
                    id='residential'
                    value='residential-multifamily'
                    name='preferences'
                  />
                  <label htmlFor='residential'>Residential multifamily</label>
                </div>
                <div className='check-box'>
                  <input
                    type='checkbox'
                    id='retail'
                    value='commercial-retail'
                    name='preferences'
                  />
                  <label htmlFor='retail'>Commercial retail</label>
                </div>
                <div className='check-box'>
                  <input
                    type='checkbox'
                    id='industrial'
                    value='commercial-industrial'
                    name='preferences'
                  />
                  <label htmlFor='industrial'>Commercial industrial</label>
                </div>
                <div className='check-box'>
                  <input
                    type='checkbox'
                    id='hospitality'
                    value='commercial-hospitality'
                    name='preferences'
                  />
                  <label htmlFor='hospitality'>Commercial hospitality</label>
                </div>
                <div className='check-box'>
                  <input
                    type='checkbox'
                    id='warehousing'
                    value='commercial-warehousing'
                    name='preferences'
                  />
                  <label htmlFor='warehousing'>Commercial warehousing</label>
                </div>
                <div className='check-box'>
                  <input
                    type='checkbox'
                    id='office'
                    value='commercial-office'
                    name='preferences'
                  />
                  <label htmlFor='office'>Commercial office</label>
                </div>
                <div className='check-box'>
                  <input
                    type='checkbox'
                    id='other'
                    value='other'
                    name='preferences'
                  />
                  <label htmlFor='other'>Other</label>
                </div>
              </div>
            </form>
          </article>
        </section>
        <Footer
          homePage={'/'}
          nextPage={'/'}
          textRightButton={'Finish'}
          handleSubmit={handleSubmitPreferences}
        />
      </div>
    </div>
  );
};

export default Preferences;
