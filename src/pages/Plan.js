import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Plan = () => {
  return (
    <div className='container'>
      <Sidebar />
      <section>
        <Header />
        <h1>Plan</h1>
        <Footer page={'/preferences'} />
      </section>
    </div>
  );
};

export default Plan;
