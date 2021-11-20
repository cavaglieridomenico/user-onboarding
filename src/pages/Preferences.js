import React, { useRef, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useGlobalContext } from '../context';

const Preferences = () => {
  const history = useHistory();

  const {
    arePreferencesDataValidated,
    getPreferencesData,
    setNarrowModalOpen,
    setDataReady,
    setStepStatus3,
    stepStatus1,
    stepStatus2,
    setErrorPage,
  } = useGlobalContext();

  const preferences = useRef('');

  /**
   * The current page is not an error page
   */
  useEffect(() => {
    setErrorPage(false);
  }, [setErrorPage]);

  /**
   * Returns an array with the value of the selected checkboxes
   * @returns array
   */
  const getPreferences = () => {
    const allPrefs = preferences.current.elements.preferences;
    const checkedPrefs = [];
    allPrefs.forEach(pref => {
      if (pref.checked) {
        checkedPrefs.push(pref.value);
      }
    });
    return checkedPrefs;
  };

  /**
   * Assign and remove a specific class to the check box
   * that is checked or unchecked
   * @param {html element} element
   */
  const handleCheckboxSelection = element => {
    element.checked && element.parentNode.classList.add('selected');
    !element.checked && element.parentNode.classList.remove('selected');
  };

  /**
   * Check the status of the previous steps and, if someone has not yet been updated,
   * directly opens the corresponding page in progressive order,
   * with an alert for the user.
   */
  const goToTheRightPageFromPreferences = useCallback(() => {
    if (!stepStatus1) {
      history.push('./');
      setNarrowModalOpen('danger', 'Please enter personal data first.');
    }
    if (stepStatus1 && !stepStatus2) {
      history.push('./plans');
      setNarrowModalOpen('danger', 'Please enter an investment plan first.');
    }
  }, [history, stepStatus1, stepStatus2, setNarrowModalOpen]);

  /**
   * Handle click on form
   */
  const handleClickPreferencesForm = () => {
    goToTheRightPageFromPreferences();
  };

  /**
   * Update the properties of the newUser object, if the form data is validated.
   * Updates the progress of data acquisition across the entire application.
   * Declares that the newUser object is ready for submission.
   * directly opens the Contact page
   */
  const handleSubmitPreferencesForm = useCallback(() => {
    goToTheRightPageFromPreferences();
    if (stepStatus1 && stepStatus2) {
      if (arePreferencesDataValidated(getPreferences())) {
        getPreferencesData(getPreferences());
        setStepStatus3(true);
        setDataReady(true);
        history.push('./');
      }
    }
  }, [
    goToTheRightPageFromPreferences,
    stepStatus1,
    stepStatus2,
    arePreferencesDataValidated,
    getPreferencesData,
    setStepStatus3,
    setDataReady,
    history,
  ]);

  return (
    <div className='onboarding-outerbox pref'>
      <Sidebar
        progressDisplay={'progress-desktop'}
        quoteDisplay={'quote-visible'}
        quoteText={
          'United Properties is about fast & easy searching, buying, selling and investing ever — online, with an expert by our side'
        }
        quoteAuthor={'Ollie Mcmahon'}
        quoteAuthorRole={'MANAGING DIRECTOR'}
      />
      <div className='onboarding-innerbox pref'>
        <Header number={3} />
        <section className='pref'>
          <h1>Investment preferences</h1>
          <article>
            <p className='pref-text'>
              This will help us figure out what your investment options are so
              that we can show you only possibly intresting for you deals
            </p>
          </article>
          <article>
            <h2 className='pref-title2'>
              What kind of real estate are you interested in?
            </h2>
            <form
              id='form-pref'
              ref={preferences}
              onClick={handleClickPreferencesForm}
              onChange={event => handleCheckboxSelection(event.target)}
            >
              <div className='form-container'>
                <div className='check-box'>
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
          skipStep={'/'}
          textRightButton={'Finish'}
          handleSubmit={handleSubmitPreferencesForm}
        />
      </div>
    </div>
  );
};

export default Preferences;
