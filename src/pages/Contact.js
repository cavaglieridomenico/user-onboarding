import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LinkToModal from '../components/LinkToModal';

const Contact = () => {
  return (
    <div className='onboarding-outerbox'>
      <Sidebar />
      <div className='onboarding-innerbox'>
        <Header number={1} />
        <section className='contact'>
          <h1>Сontact details</h1>
          <article>
            <p className='welcome'>
              Welcome to United Properties, we are glad to see you! Let’s get
              started by letting us know a little bit about you
            </p>
          </article>
          <form id='form-contact'>
            <div className='form-container'>
              <div className='name-box'>
                <label htmlFor='fullName'>Full name</label>
                <input type='text' id='fullname' placeholder='John Doe' />
              </div>
              <div className='phone-box'>
                <label htmlFor='phone'>Phone</label>
                <input type='text' id='phone' />
              </div>
              <div className='email-box'>
                <label htmlFor='email'>E-mail address</label>
                <input type='text' id='email' />
              </div>
              <div className='country-box'>
                <label htmlFor='country'>Country</label>
                <input type='text' id='country' />
              </div>
            </div>
          </form>

          <article>
            <h2 className='privacy'>Privacy policy</h2>
            <p className='privacy'>
              We know you care about how your personal information is used and
              shared, so we take your privacy seriously
            </p>
          </article>
          <div className='contact-link-conteiner'>
            <LinkToModal text={'Expand privacy policy'} />
          </div>
        </section>
        <Footer page={'/plan'} textLink='Back to the homepage' />
      </div>
    </div>
  );
};

export default Contact;
