import React, { useRef, useState, useEffect } from 'react';

const Slider = ({ fromValue, toValue, handleFromValue, handleToValue }) => {
  const [cursorOn, setCursorOn] = useState(false);

  const slider = useRef(null);
  const cursor2 = useRef(null);

  useEffect(() => {
    cursor2.current.style.left = toValue + 'px';
    const handleMouseMove = event => {
      const sliderLeft = slider.current.getBoundingClientRect().left;
      const newLeft = event.clientX - 16 - sliderLeft;
      handleToValue(newLeft);
      cursor2.current.style.left = newLeft + 'px';
      console.log(newLeft);
    };
    if (cursorOn) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', () => {
        setCursorOn(false);
        window.removeEventListener('mousemove', handleMouseMove);
      });
    }
  }, [cursorOn, toValue, handleToValue]);

  const handleMousedown = event => {
    event.preventDefault();
    setCursorOn(true);
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
      <div className='slider' ref={slider}>
        <div className='cursor' id='cursor-1'></div>
        <div
          className='cursor'
          id='cursor-2'
          ref={cursor2}
          onMouseDown={handleMousedown}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
