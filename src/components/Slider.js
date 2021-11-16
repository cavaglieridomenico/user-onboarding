import React, { useRef, useState, useEffect } from 'react';

const Slider = ({ fromValue, toValue, handleFromValue, handleToValue }) => {
  const slider = useRef(null);
  const cursor1 = useRef(null);
  const cursor2 = useRef(null);

  const [shiftX1, setShiftX1] = useState(0);
  const [shiftX2, setShiftX2] = useState(0);

  const [cursorOn1, setCursorOn1] = useState(false);
  const [cursorOn2, setCursorOn2] = useState(false);

  useEffect(() => {
    cursor1.current.style.left = fromValue + 'px';
    cursor2.current.style.left = toValue + 'px';

    const slideStart = slider.current.getBoundingClientRect().left;
    const slideEnd = slider.current.offsetWidth - cursor1.current.offsetWidth;

    const handleMouseMove1 = event => {
      let newLeft = event.clientX - shiftX1 - slideStart;
      if (newLeft < 0) {
        newLeft = 0;
      }

      if (newLeft > slideEnd) {
        newLeft = slideEnd;
      }

      handleFromValue(newLeft);
      cursor1.current.style.left = newLeft + 'px';
    };

    const handleMouseMove2 = event => {
      let newLeft = event.clientX - shiftX2 - slideStart;
      if (newLeft < 0) {
        newLeft = 0;
      }

      if (newLeft > slideEnd) {
        newLeft = slideEnd;
      }
      handleToValue(newLeft);
      cursor2.current.style.left = newLeft + 'px';
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
    fromValue,
    toValue,
    cursorOn1,
    handleFromValue,
    cursorOn2,
    handleToValue,
    shiftX1,
    shiftX2,
  ]);

  const handleMousedown1 = event => {
    event.preventDefault();
    setShiftX1(event.clientX - cursor1.current.getBoundingClientRect().left);
    setCursorOn1(true);
  };

  const handleMousedown2 = event => {
    event.preventDefault();
    setShiftX2(event.clientX - cursor2.current.getBoundingClientRect().left);
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
          onDragStart={() => false}
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
