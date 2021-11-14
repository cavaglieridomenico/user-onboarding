import React, { useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useGlobalContext } from '../context';

const Plans = () => {
  const history = useHistory();

  const {
    arePlansDataValidated,
    getPlansData,
    setNarrowModalOpen,
    setStepStatus2,
    stepStatus1,
  } = useGlobalContext();

  const planFrom = useRef('');
  const planTo = useRef('');
  const accredited = useRef('');

  /**
   * Check the status of the previous step and, if it has not yet been updated,
   * directly open the corresponding page,
   * with an alert for the user.
   */
  const goToTheRightPageFromPlans = useCallback(() => {
    if (!stepStatus1) {
      history.push('./');
      setNarrowModalOpen('danger', 'Please enter personal data first.');
    }
  }, [history, stepStatus1, setNarrowModalOpen]);

  /**
   * Handle click on form
   */
  const handleClickPlansForms = () => {
    goToTheRightPageFromPlans();
  };

  /**
   * Update the properties of the newUser object, if the form data is validated.
   * Update the progress of data acquisition across the entire application.
   * Notify the user of the correct data acquisition.
   * Directly opens the next page.
   */
  const handleSubmitPlansForms = useCallback(() => {
    goToTheRightPageFromPlans();
    if (stepStatus1) {
      if (
        arePlansDataValidated(
          planFrom.current.value,
          planTo.current.value,
          accredited.current.elements.accredited.value
        )
      ) {
        getPlansData(
          planFrom.current.value,
          planTo.current.value,
          accredited.current.elements.accredited.value
        );
        setStepStatus2(true);
        setNarrowModalOpen(
          'success',
          'Investment plan data acquired.',
          'Please enter your preferences.'
        );
        history.push('./preferences');
      }
    }
  }, [
    goToTheRightPageFromPlans,
    stepStatus1,
    arePlansDataValidated,
    getPlansData,
    setStepStatus2,
    setNarrowModalOpen,
    history,
  ]);

  return (
    <div className='onboarding-outerbox'>
      <Sidebar
        page={'plans'}
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
            <form id='form-plans' onClick={handleClickPlansForms}>
              <div className='form-container'>
                <div className='from-box'>
                  <label htmlFor='plans-from'>From</label>
                  <input type='number' id='plans-from' ref={planFrom} />
                </div>
                <div className='to-box'>
                  <label htmlFor='plans-to'>To</label>
                  <input type='number' id='plans-to' ref={planTo} />
                </div>
                <div className='slider-container'>
                  <div className='notch-container'>
                    <div className='notch'></div>
                    <div className='notch'></div>
                    <div className='notch'></div>
                    <div className='notch'></div>
                    <div className='notch'></div>
                    <div className='notch'></div>
                  </div>
                  <div className='slider'>
                    <div className='cursor' id='cursor-1'></div>
                    <div className='cursor' id='cursor-2'></div>
                  </div>
                </div>
              </div>
            </form>
          </article>
          <article>
            <h2>Are you an accredited investor?</h2>
            <form
              id='form-investor'
              ref={accredited}
              onClick={handleClickPlansForms}
            >
              <div className='form-container'>
                <div className='radio-investor-box'>
                  <input
                    type='radio'
                    id='accedited-yes'
                    name='accredited'
                    value='yes'
                  />
                  <label htmlFor='accedited-yes'>Yes</label>
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
          skipStep={'/preferences'}
          textRightButton={'Next step'}
          handleSubmit={handleSubmitPlansForms}
        />
      </div>
    </div>
  );
};

export default Plans;
