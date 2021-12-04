import React, { useRef, useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import { containInvalidRange } from '../assets/scripts/plans_utility';
import { useGlobalContext } from '../context';
import { plansList } from '../assets/scripts/lists';

const Plans = () => {
  const history = useHistory();
  const [accreditedYes, setAccreditedYes] = useState(false);
  const [accreditedNo, setAccreditedNo] = useState(false);

  const {
    arePlansDataValidated,
    getPlansData,
    setNarrowModalOpen,
    setStepStatus2,
    stepStatus1,
    setErrorPage,
    localUser,
    setLocalUser,
  } = useGlobalContext();

  const planFrom = useRef('');
  const planTo = useRef('');
  const accredited = useRef('');

  /**
   * The current page is not an error page
   */
  useEffect(() => {
    setErrorPage(false);
  }, [setErrorPage]);

  const handleRadioChecked = useCallback(() => {
    if (localUser.accredited === 'yes') {
      setAccreditedYes(true);
      setAccreditedNo(false);
    }
    if (localUser.accredited === 'no') {
      setAccreditedYes(false);
      setAccreditedNo(true);
    }
  }, [localUser.accredited]);

  useEffect(() => {
    handleRadioChecked();
  }, [localUser.accredited, handleRadioChecked]);

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
        progressDisplay={'progress-desktop'}
        quoteDisplay={'quote-visible'}
        quoteText={
          'Save from thousands to millions on your deal. Secure the best possible. And get independent, unbiased advice for free'
        }
        quoteAuthor={'Jodie Sears'}
        quoteAuthorRole={'UNITEDPROPERTIES’ AGENT'}
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
                    className={`select-amount ${
                      containInvalidRange(
                        parseInt(localUser.planFrom),
                        parseInt(localUser.planTo)
                      ) && 'form-plans-error'
                    }`}
                    value={localUser.planFrom}
                    onChange={event => {
                      setLocalUser('planFrom', event.target.value);
                    }}
                  >
                    {plansList.map((amountValue, index) => {
                      const { label, value } = amountValue;
                      return (
                        <option key={index} value={value}>
                          {label}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className='to-box'>
                  <label htmlFor='plans-to'>To</label>
                  <select
                    type='text'
                    id='plans-to'
                    ref={planTo}
                    className={`select-amount ${
                      containInvalidRange(
                        parseInt(localUser.planFrom),
                        parseInt(localUser.planTo)
                      ) && 'form-plans-error'
                    }`}
                    value={localUser.planTo}
                    onChange={event => {
                      setLocalUser('planTo', event.target.value);
                    }}
                  >
                    {plansList.map((amountValue, index) => {
                      const { label, value } = amountValue;
                      return (
                        <option key={index} value={value}>
                          {label}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <Slider />
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
                  onClick={() => setLocalUser('accredited', 'yes')}
                >
                  <input
                    type='radio'
                    id='accedited-yes'
                    name='accredited'
                    value='yes'
                    checked={localUser.accredited === 'yes'}
                    onChange={event =>
                      setLocalUser('accredited', event.target.value)
                    }
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
                  onClick={() => setLocalUser('accredited', 'no')}
                >
                  <input
                    type='radio'
                    id='accedited-no'
                    name='accredited'
                    value='no'
                    checked={localUser.accredited === 'no'}
                    onChange={event =>
                      setLocalUser('accredited', event.target.value)
                    }
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
          toPage={'/'}
          toPageText={'Back to the previous step'}
          skipStep={'/preferences'}
          textRightButton={'Next step'}
          handleSubmit={handleSubmitPlansForms}
        />
      </div>
    </div>
  );
};

export default Plans;
