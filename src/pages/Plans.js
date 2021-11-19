import React, { useRef, useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import { isItAnInvalidRange } from '../assets/scripts/form_utility';
import { useGlobalContext } from '../context';

const Plans = () => {
  const history = useHistory();
  const [fromValue, setFromValue] = useState('10000');
  const [toValue, setToValue] = useState('200000');
  const [accreditedYes, setAccreditedYes] = useState(false);
  const [accreditedNo, setAccreditedNo] = useState(false);

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
   * Validation in the input of the range in real time
   */
  useEffect(() => {
    if (isItAnInvalidRange(parseInt(fromValue), parseInt(toValue))) {
      planFrom.current.classList.add('form-plans-error');
      planTo.current.classList.add('form-plans-error');
    } else {
      planFrom.current.classList.remove('form-plans-error');
      planTo.current.classList.remove('form-plans-error');
    }
  }, [fromValue, toValue]);

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
            <form id='form-plans' onClickCapture={handleClickPlansForms}>
              <div className='form-container'>
                <div className='from-box'>
                  <label htmlFor='plans-from'>From</label>
                  <select
                    type='text'
                    id='plans-from'
                    ref={planFrom}
                    value={fromValue}
                    onChange={event => setFromValue(event.target.value)}
                  >
                    <option id='10000' value='10000'>
                      $10,000
                    </option>
                    <option id='50000' value='50000'>
                      $50,000
                    </option>
                    <option id='100000' value='100000'>
                      $100,000
                    </option>
                    <option id='200000' value='200000'>
                      $200,000
                    </option>
                    <option id='500000' value='500000'>
                      $500,000
                    </option>
                    <option id='1000000' value='1000000'>
                      $1,000,000 +
                    </option>
                  </select>
                </div>
                <div className='to-box'>
                  <label htmlFor='plans-to'>To</label>
                  <select
                    type='text'
                    id='plans-to'
                    ref={planTo}
                    value={toValue}
                    onChange={event => setToValue(event.target.value)}
                  >
                    <option id='10000' value='10000'>
                      $10,000
                    </option>
                    <option id='50000' value='50000'>
                      $50,000
                    </option>
                    <option id='100000' value='100000'>
                      $100,000
                    </option>
                    <option id='200000' value='200000'>
                      $200,000
                    </option>
                    <option id='500000' value='500000'>
                      $500,000
                    </option>
                    <option id='1000000' value='1000000'>
                      $1,000,000 +
                    </option>
                  </select>
                </div>
              </div>
              <Slider
                handleFromValue={setFromValue}
                handleToValue={setToValue}
                fromValue={fromValue}
                toValue={toValue}
              />
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
                <div
                  className={`radio-investor-box  ${
                    accreditedYes && 'selected'
                  }`}
                >
                  <input
                    type='radio'
                    id='accedited-yes'
                    name='accredited'
                    value='yes'
                    onChange={() => {
                      setAccreditedYes(true);
                      setAccreditedNo(false);
                    }}
                  />
                  <label
                    htmlFor='accedited-yes'
                    className={`${accreditedYes ? 'selected' : undefined}`}
                  >
                    Yes
                  </label>
                </div>
                <div
                  className={`radio-investor-box  ${
                    accreditedNo && 'selected'
                  }`}
                >
                  <input
                    type='radio'
                    id='accedited-no'
                    name='accredited'
                    value='no'
                    onChange={() => {
                      setAccreditedYes(false);
                      setAccreditedNo(true);
                    }}
                  />
                  <label
                    htmlFor='accedited-no'
                    className={`${accreditedNo ? 'selected' : undefined}`}
                  >
                    No
                  </label>
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
