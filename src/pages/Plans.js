import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Plans = () => {
  return (
    <div className='container'>
      <Sidebar />
      <section>
        <Header />
        <h1>Plans</h1>
        <Footer page={'/preferences'} />
      </section>
    </div>
  );
};

export default Plans;
