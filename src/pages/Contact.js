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
          <form></form>
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
