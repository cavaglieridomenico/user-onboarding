import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useGlobalContext } from '../context';
import { preferencesList } from '../assets/scripts/lists';
import {
  getCheckedList,
  isFull,
} from '../assets/scripts/utils/list/list_utility';

const Preferences = () => {
  const history = useHistory();

  const {
    setNarrowModalOpen,
    setDataReady,
    stepStatus1,
    stepStatus2,
    setErrorPage,
    localUser,
    setLocalUser,
  } = useGlobalContext();

  /**
   * The current page is not an error page
   */
  useEffect(() => {
    setErrorPage(false);
  }, [setErrorPage]);

  /**
   * Check the status of the previous steps and, if someone has not yet been updated,
   * directly opens the corresponding page in progressive order,
   * with an alert for the user.
   */
  const goToTheRightPageFromPreferences = useCallback(() => {
    if (!stepStatus1) {
      history.push('./');
      setNarrowModalOpen(
        'danger',
        'Please enter your personal data correctly first.'
      );
    }
    if (stepStatus1 && !stepStatus2) {
      history.push('./plans');
      setNarrowModalOpen(
        'danger',
        'Please enter an investment plan correctly first.'
      );
    }
  }, [history, stepStatus1, stepStatus2, setNarrowModalOpen]);

  /**
   * If all validations are true:
   * Declares that the localUser object is ready for submission.
   * Directly opens the Contact page
   */
  const handleSubmitPreferencesForm = useCallback(() => {
    goToTheRightPageFromPreferences();
    if (stepStatus1 && stepStatus2) {
      if (!isFull(localUser.preferences)) {
        setNarrowModalOpen(
          'danger',
          'Sorry, at least one option',
          'must be selected.'
        );
      } else {
        setDataReady(true);
      }
    }
  }, [
    goToTheRightPageFromPreferences,
    stepStatus1,
    stepStatus2,
    setNarrowModalOpen,
    setDataReady,
    localUser.preferences,
  ]);

  return (
    <div className='onboarding-outerbox pref'>
      <Sidebar
        progressDisplay={'progress-desktop'}
        quoteDisplay={'quote-visible'}
        quoteText={
          'United Properties is about fast & easy searching, buying, selling and investing ever ??? online, with an expert by our side'
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
            <form id='form-pref' value={localUser.preferences}>
              <div className='form-container'>
                {preferencesList.map((prefItem, index) => {
                  const isChecked = () => {
                    return localUser.preferences.includes(prefItem);
                  };
                  return (
                    <div
                      className={`check-box ${isChecked() && 'selected'}`}
                      key={index}
                    >
                      <input
                        type='checkbox'
                        id={`preferences-${index + 1}`}
                        name={prefItem}
                        value={prefItem}
                        checked={isChecked()}
                        onChange={event => {
                          setLocalUser(
                            'preferences',
                            getCheckedList(
                              localUser.preferences,
                              event.target.value
                            )
                          );
                        }}
                      />
                      <label htmlFor={`preferences-${index + 1}`}>
                        {prefItem}
                      </label>
                      <div
                        className='placeholder'
                        onClick={() => {
                          setLocalUser(
                            'preferences',
                            getCheckedList(localUser.preferences, prefItem)
                          );
                        }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </form>
          </article>
        </section>
        <Footer
          toPage={'plans'}
          toPageText={'Back to the previous step'}
          skipStep={'/'}
          textRightButton={'Finish'}
          handleSubmit={handleSubmitPreferencesForm}
        />
      </div>
    </div>
  );
};

export default Preferences;
