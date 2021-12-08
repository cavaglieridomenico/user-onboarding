import React, { useRef, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LinkToModal from '../components/LinkToModal';
import { useGlobalContext } from '../context';
import { contactList } from '../assets/scripts/lists';

const Contact = () => {
  const history = useHistory();

  const {
    setModalOpen,
    areContactDataValidated,
    handleFocusInput,
    setNarrowModalOpen,
    setStepStatus1,
    setErrorPage,
    localUser,
    setLocalUser,
  } = useGlobalContext();

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
   * Directly opens the next page if validation is true.
   */
  const handleSubmitContact = useCallback(() => {
    if (
      areContactDataValidated(
        localUser.fullName,
        localUser.phoneNumber,
        localUser.email,
        'alert'
      )
    ) {
      history.push('./plans');
    }
  }, [
    localUser.fullName,
    localUser.phoneNumber,
    localUser.email,
    areContactDataValidated,
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
                    value={localUser.phoneCode}
                    onChange={event => {
                      setLocalUser('phoneCode', event.target.value);
                    }}
                  >
                    {contactList.map((countryItem, index) => {
                      const { label, value, country } = countryItem;
                      return (
                        <option
                          key={index}
                          id={`${country}-flag`}
                          value={value}
                        >
                          {label}
                        </option>
                      );
                    })}
                  </select>
                  <input
                    type='number'
                    id='phone'
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
                    value={localUser.country}
                    onChange={event => {
                      setLocalUser('country', event.target.value);
                    }}
                  >
                    {contactList.map((countryItem, index) => {
                      const { country } = countryItem;
                      return (
                        <option key={index} id={country} value={country}>
                          {country}
                        </option>
                      );
                    })}
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
