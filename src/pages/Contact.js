import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LinkToModal from '../components/LinkToModal';
import { useGlobalContext } from '../context';
import { contactList } from '../assets/scripts/lists';
import {
  isValidFullName,
  isValidPhoneNumber,
  isValidEmail,
} from '../assets/scripts/utils/form/form_utility';
import { isFull } from '../assets/scripts/utils/list/list_utility';

const Contact = () => {
  const history = useHistory();

  const {
    setModalOpen,
    setNarrowModalOpen,
    handleFocusInput,
    setErrorPage,
    localUser,
    setLocalUser,
  } = useGlobalContext();

  const formContact = useRef(null);
  const { fullName, phoneCode, phoneNumber, email, country } = localUser;
  const [errorFullName, setErrorFullName] = useState(false);
  const [onChangeFullName, setOnChangeFullName] = useState(false);
  const [errorPhoneNumber, setErrorPhoneNumber] = useState(false);
  const [onChangeNumber, setOnChangeNumber] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [onChangeEmail, setOnChangeEmail] = useState(false);

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
    if (!isFull(fullName)) {
      setErrorFullName(true);
      setNarrowModalOpen('danger', 'Sorry, name and surname', 'are required.');
    } else if (!isValidFullName(fullName)) {
      setErrorFullName(true);
      setNarrowModalOpen(
        'danger',
        'Please enter your first',
        'and last name correctly.'
      );
    } else if (!isFull(phoneNumber)) {
      setErrorPhoneNumber(true);
      setNarrowModalOpen('danger', 'Sorry, phone number is required.');
    } else if (!isValidPhoneNumber(phoneNumber)) {
      setErrorPhoneNumber(true);
      setNarrowModalOpen(
        'danger',
        'Please enter your phone number',
        'correctly.'
      );
    } else if (!isFull(email)) {
      setErrorEmail(true);
      setNarrowModalOpen('danger', 'Sorry, email address is required.');
    } else if (!isValidEmail(email)) {
      setErrorEmail(true);
      setNarrowModalOpen(
        'danger',
        'Please enter your email address correctly.'
      );
    } else {
      history.push('./plans');
    }
  }, [fullName, phoneNumber, email, setNarrowModalOpen, history]);

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
                <div
                  className={`name-box ${
                    errorFullName ? 'box-error' : undefined
                  }`}
                >
                  <label htmlFor='full-name'>Full name</label>
                  <input
                    type='text'
                    id='full-name'
                    className={`input ${
                      errorFullName ? 'input-error' : undefined
                    }`}
                    value={fullName}
                    onChange={event => {
                      setLocalUser('fullName', event.target.value);
                      isValidFullName(event.target.value) &&
                        setOnChangeFullName(true);
                      onChangeFullName && !isValidFullName(event.target.value)
                        ? setErrorFullName(true)
                        : setErrorFullName(false);
                    }}
                    onFocus={() => setErrorFullName(false)}
                    onBlur={() => {
                      isValidFullName(fullName)
                        ? setErrorFullName(false)
                        : setErrorFullName(true);
                    }}
                  />
                </div>
                <div
                  className={`phone-box ${
                    errorPhoneNumber ? 'box-error' : undefined
                  }`}
                >
                  <label htmlFor='phone'>Phone</label>
                  <select
                    name='country-flag'
                    id='country-flag'
                    value={phoneCode}
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
                    type='text'
                    id='phone'
                    className={`input ${
                      errorPhoneNumber ? 'input-error' : undefined
                    }`}
                    value={phoneNumber}
                    onChange={event => {
                      setLocalUser('phoneNumber', event.target.value);
                      isValidPhoneNumber(event.target.value) &&
                        setOnChangeNumber(true);
                      onChangeNumber && !isValidPhoneNumber(event.target.value)
                        ? setErrorPhoneNumber(true)
                        : setErrorPhoneNumber(false);
                    }}
                    onFocus={() => setErrorPhoneNumber(false)}
                    onBlur={() => {
                      !isValidPhoneNumber(phoneNumber)
                        ? setErrorPhoneNumber(true)
                        : setErrorPhoneNumber(false);
                    }}
                  />
                </div>
                <div
                  className={`email-box ${
                    errorEmail ? 'box-error' : undefined
                  }`}
                >
                  <label htmlFor='email'>E-mail address</label>
                  <input
                    type='text'
                    id='email'
                    className={`input ${
                      errorEmail ? 'input-error' : undefined
                    }`}
                    value={email}
                    onChange={event => {
                      setLocalUser('email', event.target.value);
                      isValidEmail(event.target.value) &&
                        setOnChangeEmail(true);
                      onChangeEmail && !isValidEmail(event.target.value)
                        ? setErrorEmail(true)
                        : setErrorEmail(false);
                    }}
                    onFocus={() => setErrorEmail(false)}
                    onBlur={() => {
                      !isValidEmail(email)
                        ? setErrorEmail(true)
                        : setErrorEmail(false);
                    }}
                  />
                </div>
                <div className='country-box'>
                  <label htmlFor='country'>Country</label>
                  <select
                    type='text'
                    id='country'
                    value={country}
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
