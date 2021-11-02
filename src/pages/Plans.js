import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Plans = () => {
  return (
    <div className='onboarding-outerbox'>
      <Sidebar
        text={
          'Save from thousands to millions on your deal. Secure the best possible. And get independent, unbiased advice for free'
        }
        author={'Jodie Sears'}
        role={'UNITEDPROPERTIES’ AGENT'}
      />
      <div className='onboarding-innerbox'>
        <Header number={2} />
        <section className='plans'>
          <h1>Investiment Plans</h1>
          <article>
            <p>
              Let us know about your investment plans. This will help us get you
              to the right expert who will help you further
            </p>
          </article>
          <article>
            <h2>How much are you planning to invest in this year?</h2>
            <form id='form-plans'>
              <div className='form-container'>
                <div className='from-box'>
                  <label htmlFor='plans-from'>From</label>
                  <input type='text' id='plans-from' />
                </div>
                <div className='to-box'>
                  <label htmlFor='plans-to'>To</label>
                  <input type='text' id='plans-to' />
                </div>
                <div className='slider'></div>
              </div>
            </form>
            <article>
              <h2>Are you an accredited investor?</h2>
              <form action='' id='form-investor'>
                <div className='form-container'>
                  <div className='radio-investor-box selected'>
                    <input type='radio' name='accredited' value='yes' />
                    <label htmlFor='yes' className='selected'>
                      Yes
                    </label>
                  </div>
                  <div className='radio-investor-box'>
                    <input type='radio' name='accredited' value='no' />
                    <label htmlFor='no'>No</label>
                  </div>
                </div>
              </form>
            </article>
          </article>
        </section>
        <Footer nextPage={'/preferences'} homePage={'/'} />
      </div>
    </div>
  );
};

export default Plans;
