import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LinkToModal from '../components/LinkToModal';

const Contact = () => {
  return (
    <div className='outer-container'>
      <Sidebar />
      <div className='inner-container'>
        <Header number={1} />
        <section>
          <h1>Сontact details</h1>
          <article>
            <p>
              Welcome to United Properties, we are glad to see you! Let’s get
              started by letting us know a little bit about you
            </p>
          </article>
          <div className='form-container'>
            <form>
              <div className='name-number-container'>
                <div className='name-container'>
                  <label htmlFor='fullName'>Full name</label>
                  <input type='text' id='fullname' />
                </div>
                <div className='phone-container'>
                  <label htmlFor='phone-number'>Phone</label>
                  <input type='text' id='phone-number' />
                </div>
              </div>
              <label htmlFor='email'>E-mail address</label>
              <input type='text' id='email' />
              <label htmlFor='country'>Country</label>
              <input type='text' id='country' />
            </form>
          </div>
          <article>
            <h2>Privacy policy</h2>
            <p>
              We know you care about how your personal information is used and
              shared, so we take your privacy seriously
            </p>
          </article>

          <LinkToModal text={'Expand privacy policy'} />
        </section>
        <Footer page={'/plan'} textLink='Back to the homepage' />
      </div>
    </div>
  );
};

export default Contact;
