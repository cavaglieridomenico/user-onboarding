import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LinkToModal from '../components/LinkToModal';

const Contact = () => {
  return (
    <div className='page-container'>
      <Sidebar />
      <section>
        <Header number={1} />
        <article>
          <h1>Сontact details</h1>
          <LinkToModal text={'Expand privacy policy'} />
        </article>
        <Footer page={'/plan'} />
      </section>
    </div>
  );
};

export default Contact;
