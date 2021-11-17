import React, { useRef, useState, useEffect } from 'react';

const Slider = ({ fromValue, toValue, handleFromValue, handleToValue }) => {
  const slider = useRef(null);
  const cursor1 = useRef(null);
  const cursor2 = useRef(null);

  const [shiftX1, setShiftX1] = useState(0);
  const [shiftX2, setShiftX2] = useState(0);

  useEffect(() => {
    const setCursorsValue = setTimeout(() => {
      cursor1.current.style.left = fromValue + 'px';
      cursor2.current.style.left = toValue + 'px';
    }, 0);
    return () => clearTimeout(setCursorsValue);
  }, [fromValue, toValue]);

  const handleMousedown1 = event => {
    event.preventDefault();
    setShiftX1(event.clientX - cursor1.current.getBoundingClientRect().left);
    const slideStart = slider.current.getBoundingClientRect().left;
    const slideEnd = slider.current.offsetWidth;
    console.log(cursor1.current.getBoundingClientRect().left - slideStart);

    const handleMouseMove1 = event => {
      let newLeft = event.clientX - shiftX1 - slideStart;
      if (newLeft < 0) {
        newLeft = 0;
      }
      if (newLeft > slideEnd) {
        newLeft = slideEnd;
      }
      cursor1.current.style.left = newLeft + 'px';
      if (newLeft < 60) {
        handleFromValue('10000');
        cursor1.current.style.left = -16 + 'px';
      }
      if (newLeft > 60 && newLeft < 180) {
        handleFromValue('50000');
        cursor1.current.style.left = 105 + 'px';
      }
      if (newLeft > 180 && newLeft < 300) {
        handleFromValue('100000');
        cursor1.current.style.left = 227 + 'px';
      }
      if (newLeft > 300 && newLeft < 420) {
        handleFromValue('200000');
        cursor1.current.style.left = 348 + 'px';
      }
      if (newLeft > 420 && newLeft < 540) {
        handleFromValue('500000');
        cursor1.current.style.left = 470 + 'px';
      }
      if (newLeft > 590) {
        handleFromValue('1000000');
        cursor1.current.style.left = 591 + 'px';
      }
    };

    const handleMouseUp1 = () => {
      window.removeEventListener('mousemove', handleMouseMove1);
      window.removeEventListener('mouseup', handleMouseUp1);
    };
    window.addEventListener('mousemove', handleMouseMove1);
    window.addEventListener('mouseup', handleMouseUp1);
  };

  const handleMousedown2 = event => {
    event.preventDefault();
    setShiftX2(event.clientX - cursor2.current.getBoundingClientRect().left);
    const slideStart = slider.current.getBoundingClientRect().left;
    const slideEnd = slider.current.offsetWidth;
    console.log(cursor2.current.getBoundingClientRect().left - slideStart);
    const handleMouseMove2 = event => {
      let newLeft = event.clientX - shiftX2 - slideStart;
      if (newLeft < 0) {
        newLeft = 0;
      }
      if (newLeft > slideEnd) {
        newLeft = slideEnd;
      }
      cursor2.current.style.left = newLeft + 'px';
      if (newLeft < 60) {
        handleToValue('10000');
        cursor2.current.style.left = -13 + 'px';
      }
      if (newLeft > 60 && newLeft < 180) {
        handleToValue('50000');
        cursor2.current.style.left = 108 + 'px';
      }
      if (newLeft > 180 && newLeft < 300) {
        handleToValue('100000');
        cursor2.current.style.left = 230 + 'px';
      }
      if (newLeft > 300 && newLeft < 420) {
        handleToValue('200000');
        cursor2.current.style.left = 351 + 'px';
      }
      if (newLeft > 420 && newLeft < 540) {
        handleToValue('500000');
        cursor2.current.style.left = 473 + 'px';
      }
      if (newLeft > 590) {
        handleToValue('1000000');
        cursor2.current.style.left = 594 + 'px';
      }
    };

    const handleMouseUp2 = () => {
      window.removeEventListener('mousemove', handleMouseMove2);
      window.removeEventListener('mouseup', handleMouseUp2);
    };
    window.addEventListener('mousemove', handleMouseMove2);
    window.addEventListener('mouseup', handleMouseUp2);
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
          onDragStart={() => false}
        ></div>
        <div
          className='cursor'
          id='cursor-2'
          ref={cursor2}
          onMouseDown={handleMousedown2}
        ></div>
      </div>
      <div className='slider-text-container'>
        <p className='slider-number'>$10,000</p>
        <p className='slider-number'>$50,000</p>
        <p className='slider-number'>$100,000</p>
        <p className='slider-number'>$200,000</p>
        <p className='slider-number'>$500,000</p>
        <p className='slider-number'>$1,000,000 +</p>
      </div>
    </div>
  );
};

export default Slider;
