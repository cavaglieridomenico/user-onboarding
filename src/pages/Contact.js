import React, { useRef } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LinkToModal from '../components/LinkToModal';
import { useGlobalContext } from '../context';

const Contact = () => {
  const { getContact } = useGlobalContext();
  const fullName = useRef('');
  const phoneNumber = useRef('');
  const phoneCode = useRef('');
  const email = useRef('');
  const country = useRef('');

  const handleSubmitContact = event => {
    getContact(
      fullName.current.value,
      phoneNumber.current.value,
      phoneCode.current.value,
      email.current.value,
      country.current.value
    );
  };

  return (
    <div className='onboarding-outerbox'>
      <Sidebar
        text={`We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete`}
        author={'William Mac'}
        role={'CO-FOUNDER, INVESTOR'}
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
            <form id='form-contact'>
              <div className='form-container'>
                <div className='name-box'>
                  <label htmlFor='full-name'>Full name</label>
                  <input type='text' id='full-name' ref={fullName} />
                </div>
                <div className='phone-box'>
                  <label htmlFor='phone'>Phone</label>
                  <select name='country-flag' id='country-flag' ref={phoneCode}>
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
                  <input type='text' id='phone' ref={phoneNumber} />
                </div>
                <div className='email-box'>
                  <label htmlFor='email'>E-mail address</label>
                  <input type='text' id='email' ref={email} />
                </div>
                <div className='country-box'>
                  <label htmlFor='country'>Country</label>
                  <select type='text' id='country' ref={country}>
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
            <LinkToModal text={'Expand privacy policy'} />
          </div>
        </section>
        <Footer
          homePage={'/'}
          nextPage={'/plans'}
          textRightButton={'Next step'}
          handleSubmit={handleSubmitContact}
        />
      </div>
    </div>
  );
};

export default Contact;
