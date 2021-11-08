import React, { useRef } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useGlobalContext } from '../context';

const Plans = () => {
  const { getPlans } = useGlobalContext();
  const planFrom = useRef('');
  const planTo = useRef('');
  const accredited = useRef('');

  const handleSubmitPlans = () => {
    getPlans(
      planFrom.current.value,
      planTo.current.value,
      accredited.current.elements.accredited.value
    );
  };

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
          <h1>Investment plans</h1>
          <article>
            <p className='planning-text'>
              Let us know about your investment plans. This will help us get you
              to the right expert who will help you further
            </p>
          </article>
          <article>
            <h2 className='planning-text'>
              How much are you planning to invest in this year?
            </h2>
            <form id='form-plans'>
              <div className='form-container'>
                <div className='from-box'>
                  <label htmlFor='plans-from'>From</label>
                  <input type='text' id='plans-from' ref={planFrom} />
                </div>
                <div className='to-box'>
                  <label htmlFor='plans-to'>To</label>
                  <input type='text' id='plans-to' ref={planTo} />
                </div>
                <div className='slider'></div>
              </div>
            </form>
          </article>
          <article>
            <h2>Are you an accredited investor?</h2>
            <form id='form-investor' ref={accredited}>
              <div className='form-container'>
                <div className='radio-investor-box selected'>
                  <input
                    type='radio'
                    id='accedited-yes'
                    name='accredited'
                    value='yes'
                  />
                  <label htmlFor='accedited-yes' className='selected'>
                    Yes
                  </label>
                </div>
                <div className='radio-investor-box'>
                  <input
                    type='radio'
                    id='accedited-no'
                    name='accredited'
                    value='no'
                  />
                  <label htmlFor='accedited-no'>No</label>
                </div>
              </div>
            </form>
          </article>
        </section>
        <Footer
          homePage={'/'}
          nextPage={'/preferences'}
          textRightButton={'Next step'}
          handleSubmit={handleSubmitPlans}
        />
      </div>
    </div>
  );
};

export default Plans;
