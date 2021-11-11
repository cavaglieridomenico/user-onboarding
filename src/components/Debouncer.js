import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';

const Debouncer = () => {
  const { debouncing, setDebouncer } = useGlobalContext();

  useEffect(() => {
    setTimeout(() => {
      setDebouncer(false);
    }, 1000);
  }, [debouncing, setDebouncer]);

  return <div className={`debouncer ${debouncing && 'show-debouncer'}`}></div>;
};

export default Debouncer;
