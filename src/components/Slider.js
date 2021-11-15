import React, { useRef, useEffect, useState } from 'react';

const Slider = () => {
  const [cursor2x, setCursor2x] = useState(0);
  const cursor2 = useRef(null);

  useEffect(() => {
    setCursor2x(cursor2.current.getBoundingClientRect().left);
  });

  const handleMouseDown2 = event => {
    event.preventDefault();
    console.log(cursor2);
    console.log(cursor2.current);
    console.log(cursor2x);
  };

  return (
    <div className='slider-container'>
      <div className='notch-container'>
        <div className='notch'></div>
        <div className='notch'></div>
        <div className='notch'></div>
        <div className='notch'></div>
        <div className='notch'></div>
        <div className='notch'></div>
      </div>
      <div className='slider'>
        <div className='cursor' id='cursor-1'></div>
        <div
          className='cursor'
          id='cursor-2'
          ref={cursor2}
          onMouseDown={handleMouseDown2}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
