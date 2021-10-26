import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Preferences = () => {
  return (
    <div className='container'>
      <Sidebar />
      <section>
        <Header />
        <h1>Preferences</h1>
        <Footer page={'/'} />
      </section>
    </div>
  );
};

export default Preferences;
