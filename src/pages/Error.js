import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Error = () => {
  return (
    <div className='container'>
      <Sidebar />
      <section className='error'>
        <h1>oops! it's a dead end</h1>
        <Link to='/'>back home</Link>
      </section>
    </div>
  );
};

export default Error;
