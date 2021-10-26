import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className='container'>
      <Sidebar />
      <section>
        <Header number={1} />
        <h1>Contact</h1>
        <Footer page={'/plan'} />
      </section>
    </div>
  );
};

export default Contact;
