import React from 'react';
import { useGlobalContext } from '../context';

const Debouncer = () => {
  const { debouncing } = useGlobalContext();
  return <div className={`debouncer ${debouncing && 'show-debouncer'}`}></div>;
};

export default Debouncer;
