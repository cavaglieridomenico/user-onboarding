import React, { useRef, useState, useEffect } from 'react';

const Slider = ({ fromValue, toValue, handleFromValue, handleToValue }) => {
  const [cursorOn1, setCursorOn1] = useState(false);
  const [cursorOn2, setCursorOn2] = useState(false);

  const slider = useRef(null);
  const cursor1 = useRef(null);
  const cursor2 = useRef(null);

  useEffect(() => {
    const sliderLeft = slider.current.getBoundingClientRect().left;
    cursor1.current.style.left = fromValue + 'px';
    cursor2.current.style.left = toValue + 'px';
    const handleMouseMove1 = event => {
      const newLeft = event.clientX - 16 - sliderLeft;
      handleFromValue(newLeft);
      cursor1.current.style.left = newLeft + 'px';
      console.log(newLeft);
    };
    const handleMouseMove2 = event => {
      const newLeft = event.clientX - 16 - sliderLeft;
      handleToValue(newLeft);
      cursor2.current.style.left = newLeft + 'px';
      console.log(newLeft);
    };
    if (cursorOn1) {
      window.addEventListener('mousemove', handleMouseMove1);
      window.addEventListener('mouseup', () => {
        setCursorOn1(false);
        window.removeEventListener('mousemove', handleMouseMove1);
      });
    }
    if (cursorOn2) {
      window.addEventListener('mousemove', handleMouseMove2);
      window.addEventListener('mouseup', () => {
        setCursorOn2(false);
        window.removeEventListener('mousemove', handleMouseMove2);
      });
    }
  }, [
    cursorOn1,
    handleFromValue,
    cursorOn2,
    fromValue,
    toValue,
    handleToValue,
  ]);

  const handleMousedown1 = event => {
    event.preventDefault();
    setCursorOn1(true);
  };

  const handleMousedown2 = event => {
    event.preventDefault();
    setCursorOn2(true);
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
        <div
          className='cursor'
          id='cursor-1'
          ref={cursor1}
          onMouseDown={handleMousedown1}
        ></div>
        <div
          className='cursor'
          id='cursor-2'
          ref={cursor2}
          onMouseDown={handleMousedown2}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
