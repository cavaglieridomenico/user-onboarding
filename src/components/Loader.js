import React from 'react';
import { useGlobalContext } from '../context';

const Loader = () => {
  const { loading } = useGlobalContext();
  return (
    <div className={`loader-overlay ${loading && 'show-loader'}`}>
      <div className='loader'></div>
    </div>
  );
};

export default Loader;
