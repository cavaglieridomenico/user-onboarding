import React, { useRef, useState, useEffect } from 'react';

const Slider = ({
  fromValueSlider,
  toValueSlider,
  handleFromValue,
  handleToValue,
  fromValue,
  toValue,
}) => {
  const slider = useRef(null);
  const cursor1 = useRef(null);
  const cursor2 = useRef(null);
  const notchContainer = useRef(null);
  const sliderNumberContainer = useRef(null);

  const [slideStart, setSlideStart] = useState(0);
  const [slideEnd, setSlideEnd] = useState(0);

  useEffect(() => {
    setSlideStart(slider.current.getBoundingClientRect().left);
    setSlideEnd(slider.current.offsetWidth);
  }, []);

  useEffect(() => {
    const setCursorsValue = setTimeout(() => {
      cursor1.current.style.left = fromValueSlider + 'px';
      cursor2.current.style.left = toValueSlider + 'px';
      setActive(fromValue, toValue);
      setDeActive(fromValue, toValue);
    }, 0);
    return () => clearTimeout(setCursorsValue);
  }, [fromValueSlider, toValueSlider, fromValue, toValue]);

  const getLimitsLeftRight = left => {
    if (left < 0) {
      left = 0;
    }
    if (left > slideEnd) {
      left = slideEnd;
    }
  };

  const setActive = (fromValue, toValue) => {
    for (let element of sliderNumberContainer.current.childNodes) {
      element.classList.remove('slider-number-active');
      if (parseInt(element.getAttribute('number')) <= parseInt(toValue)) {
        element.classList.add('slider-number-active');
      }
    }
    for (let element of notchContainer.current.childNodes) {
      element.classList.remove('notch-active');
      if (parseInt(element.getAttribute('number')) <= parseInt(toValue)) {
        element.classList.add('notch-active');
      }
    }
  };

  const setDeActive = (fromValue, toValue) => {
    for (let element of sliderNumberContainer.current.childNodes) {
      if (parseInt(element.getAttribute('number')) < parseInt(fromValue)) {
        element.classList.remove('slider-number-active');
      }
      if (parseInt(element.getAttribute('number')) === parseInt(fromValue)) {
        element.classList.add('slider-number-active');
      }
    }
    for (let element of notchContainer.current.childNodes) {
      if (parseInt(element.getAttribute('number')) < parseInt(fromValue)) {
        element.classList.remove('notch-active');
      }
      if (parseInt(element.getAttribute('number')) === parseInt(fromValue)) {
        element.classList.add('notch-active');
      }
    }
  };

  const handleMousedown1 = event => {
    event.preventDefault();
    const shiftX1 =
      event.clientX - cursor1.current.getBoundingClientRect().left;

    const handleMouseMove1 = event => {
      let newLeft = event.clientX - shiftX1 - slideStart;

      getLimitsLeftRight(newLeft);

      cursor1.current.style.left = newLeft + 'px';

      if (newLeft < 60) {
        handleFromValue('10000');
        cursor1.current.style.left = -16 + 'px';
        //setDeActive('10000');
      }
      if (newLeft > 60 && newLeft < 180) {
        handleFromValue('50000');
        cursor1.current.style.left = 105 + 'px';
        //setDeActive('50000');
      }
      if (newLeft > 180 && newLeft < 300) {
        handleFromValue('100000');
        cursor1.current.style.left = 227 + 'px';
        //setDeActive('100000');
      }
      if (newLeft > 300 && newLeft < 420) {
        handleFromValue('200000');
        cursor1.current.style.left = 348 + 'px';
        //setDeActive('200000');
      }
      if (newLeft > 420 && newLeft < 540) {
        handleFromValue('500000');
        cursor1.current.style.left = 470 + 'px';
        //setDeActive('500000');
      }
      if (newLeft > 540) {
        handleFromValue('1000000');
        cursor1.current.style.left = 591 + 'px';
        //setDeActive('1000000');
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
    const shiftX2 =
      event.clientX - cursor2.current.getBoundingClientRect().left;

    const handleMouseMove2 = event => {
      let newLeft = event.clientX - shiftX2 - slideStart;
      getLimitsLeftRight(newLeft);

      cursor2.current.style.left = newLeft + 'px';

      if (newLeft < 60) {
        handleToValue('10000');
        cursor2.current.style.left = -13 + 'px';
        //setActive('10000');
      }
      if (newLeft > 60 && newLeft < 180) {
        handleToValue('50000');
        cursor2.current.style.left = 108 + 'px';
        //setActive('50000');
      }
      if (newLeft > 180 && newLeft < 300) {
        handleToValue('100000');
        cursor2.current.style.left = 230 + 'px';
        //setActive('100000');
      }
      if (newLeft > 300 && newLeft < 420) {
        handleToValue('200000');
        cursor2.current.style.left = 351 + 'px';
        //setActive('200000');
      }
      if (newLeft > 420 && newLeft < 540) {
        handleToValue('500000');
        cursor2.current.style.left = 473 + 'px';
        //setActive('500000');
      }
      if (newLeft > 540) {
        handleToValue('1000000');
        cursor2.current.style.left = 594 + 'px';
        //setActive('1000000');
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
      <div className='notch-container' ref={notchContainer}>
        <div className='notch' number={'10000'}></div>
        <div className='notch' number={'50000'}></div>
        <div className='notch' number={'100000'}></div>
        <div className='notch' number={'200000'}></div>
        <div className='notch' number={'500000'}></div>
        <div className='notch' number={'1000000'}></div>
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
      <div className='slider-text-container' ref={sliderNumberContainer}>
        <p className='slider-number' number={'10000'}>
          $10,000
        </p>
        <p className='slider-number' number={'50000'}>
          $50,000
        </p>
        <p className='slider-number' number={'100000'}>
          $100,000
        </p>
        <p className='slider-number' number={'200000'}>
          $200,000
        </p>
        <p className='slider-number' number={'500000'}>
          $500,000
        </p>
        <p className='slider-number' number={'1000000'}>
          $1,000,000 +
        </p>
      </div>
    </div>
  );
};

export default Slider;
