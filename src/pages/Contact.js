import React, { useRef, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LinkToModal from '../components/LinkToModal';
import { useGlobalContext } from '../context';

const Contact = () => {
  const history = useHistory();

  const {
    setModalOpen,
    areContactDataValidated,
    getContactData,
    handleFocusInput,
    setNarrowModalOpen,
    setStepStatus1,
    setErrorPage,
    localUser,
    setLocalUser,
  } = useGlobalContext();

  const fullName = useRef('');
  const phoneNumber = useRef('');
  const phoneCode = useRef('');
  const email = useRef('');
  const country = useRef('');
  const formContact = useRef(null);

  /**
   * The current page is not an error page
   */
  useEffect(() => {
    setErrorPage(false);
  }, [setErrorPage]);

  /**
   * Handle input focus and blur
   */
  useEffect(() => {
    handleFocusInput(formContact);
  }, [handleFocusInput]);

  /**
   * Update the properties of the newUser object, if the form data is validated.
   * Update the progress of data acquisition across the entire application.
   * Notify the user of the correct data acquisition.
   * Directly opens the next page.
   */
  const handleSubmitContact = useCallback(() => {
    if (
      areContactDataValidated(
        fullName.current.value,
        phoneNumber.current.value,
        email.current.value
      )
    ) {
      getContactData(
        fullName.current.value,
        phoneNumber.current.value,
        phoneCode.current.value,
        email.current.value,
        country.current.value
      );
      setStepStatus1(true);
      setNarrowModalOpen(
        'success',
        'Personal data acquired.',
        'Please enter an investment plan.'
      );
      history.push('./plans');
    }
  }, [
    areContactDataValidated,
    getContactData,
    setStepStatus1,
    setNarrowModalOpen,
    history,
  ]);

  return (
    <div className='onboarding-outerbox'>
      <Sidebar
        progressDisplay={'progress-desktop'}
        quoteDisplay={'quote-visible'}
        quoteText={`We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete`}
        quoteAuthor={'William Mac'}
        quoteAuthorRole={'CO-FOUNDER, INVESTOR'}
      />
      <div className='onboarding-innerbox'>
        <Header number={1} />
        <section className='contact'>
          <h1>Сontact details</h1>
          <article>
            <p className='welcome'>
              Welcome to United Properties, we are glad to see you! Let’s get
              started by letting us know a little bit about you
            </p>
            <form id='form-contact' ref={formContact}>
              <div className='form-container'>
                <div className='name-box'>
                  <label htmlFor='full-name'>Full name</label>
                  <input
                    type='text'
                    id='full-name'
                    ref={fullName}
                    value={localUser.fullName}
                    onChange={event =>
                      setLocalUser('fullName', event.target.value)
                    }
                  />
                </div>
                <div className='phone-box'>
                  <label htmlFor='phone'>Phone</label>
                  <select
                    name='country-flag'
                    id='country-flag'
                    ref={phoneCode}
                    value={localUser.phoneCode}
                    onChange={event => {
                      setLocalUser('phoneCode', event.target.value);
                    }}
                  >
                    <option id='italy-flag' value='+39'>
                      🇮🇹
                    </option>
                    <option id='spain-flag' value='+34'>
                      🇪🇸
                    </option>
                    <option id='france-flag' value='+33'>
                      🇫🇷
                    </option>
                    <option id='germany-flag' value='+49'>
                      🇩🇪
                    </option>
                  </select>
                  <input
                    type='number'
                    id='phone'
                    ref={phoneNumber}
                    value={localUser.phoneNumber}
                    onChange={event =>
                      setLocalUser('phoneNumber', event.target.value)
                    }
                  />
                </div>
                <div className='email-box'>
                  <label htmlFor='email'>E-mail address</label>
                  <input
                    type='text'
                    id='email'
                    ref={email}
                    value={localUser.email}
                    onChange={event => {
                      setLocalUser('email', event.target.value);
                    }}
                  />
                </div>
                <div className='country-box'>
                  <label htmlFor='country'>Country</label>
                  <select
                    type='text'
                    id='country'
                    ref={country}
                    value={localUser.country}
                    onChange={event => {
                      setLocalUser('country', event.target.value);
                    }}
                  >
                    <option id='italy' value='italy'>
                      italy
                    </option>
                    <option id='spain' value='spain'>
                      spain
                    </option>
                    <option id='france' value='france'>
                      france
                    </option>
                    <option id='germany' value='germany'>
                      germany
                    </option>
                  </select>
                </div>
              </div>
            </form>
          </article>
          <article>
            <h2 className='privacy'>Privacy policy</h2>
            <p className='privacy'>
              We know you care about how your personal information is used and
              shared, so we take your privacy seriously
            </p>
          </article>
          <div className='contact-link-container'>
            <LinkToModal
              text={'Expand privacy policy'}
              showModal={setModalOpen}
              modalTopic={'privacy'}
            />
          </div>
        </section>
        <Footer
          toPage={'/'}
          toPageText={'Back to the homepage'}
          skipStep={'/plans'}
          textRightButton={'Next step'}
          handleSubmit={handleSubmitContact}
        />
      </div>
    </div>
  );
};

export default Contact;
