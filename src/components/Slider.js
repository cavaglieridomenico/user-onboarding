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

  /*Calculation of the dimensions of the Slider container*/
  useEffect(() => {
    setSlideStart(slider.current.getBoundingClientRect().left);
    setSlideEnd(slider.current.offsetWidth);
  }, []);

  /*Positioning of the Slider cursors based on the inputs selected by the user
  and setting of its active classes*/

  useEffect(() => {
    cursor1.current.style.left = fromValueSlider + 'px';
    cursor2.current.style.left = toValueSlider + 'px';
    setToActive(toValue);
    setFromActive(fromValue);
  }, [fromValueSlider, toValueSlider, fromValue, toValue]);

  /*Prevents Slider cursors from exiting their container*/
  const getLimitsLeftRight = left => {
    if (left < 0) {
      left = 0;
    }
    if (left > slideEnd) {
      left = slideEnd;
    }
  };

  /*Insertion and deactivation of active classes based on the variation of the input To*/
  const setToActive = toValue => {
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
  /*Insertion and deactivation of active classes based on the variation of the input From*/
  const setFromActive = fromValue => {
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

  /*Cursor 1 logic when operated by the user*/
  const handleMousedownFrom = event => {
    event.preventDefault();
    const shiftX1 =
      event.clientX - cursor1.current.getBoundingClientRect().left;

    const handleMouseMoveFrom = event => {
      let newLeft = event.clientX - shiftX1 - slideStart;

      getLimitsLeftRight(newLeft);

      cursor1.current.style.left = newLeft + 'px';

      if (newLeft < 60) {
        handleFromValue('10000');
        cursor1.current.style.left = -16 + 'px';
      }
      if (newLeft > 60 && newLeft < 180) {
        handleFromValue('50000');
        cursor1.current.style.left = 103 + 'px';
      }
      if (newLeft > 180 && newLeft < 300) {
        handleFromValue('100000');
        cursor1.current.style.left = 224 + 'px';
      }
      if (newLeft > 300 && newLeft < 420) {
        handleFromValue('200000');
        cursor1.current.style.left = 348 + 'px';
      }
      if (newLeft > 420 && newLeft < 540) {
        handleFromValue('500000');
        cursor1.current.style.left = 470 + 'px';
      }
      if (newLeft > 540) {
        handleFromValue('1000000');
        cursor1.current.style.left = 591 + 'px';
      }
    };

    const handleMouseUpFrom = () => {
      window.removeEventListener('mousemove', handleMouseMoveFrom);
      window.removeEventListener('mouseup', handleMouseUpFrom);
    };

    window.addEventListener('mousemove', handleMouseMoveFrom);
    window.addEventListener('mouseup', handleMouseUpFrom);
  };

  /*Cursor 2 logic when operated by the user*/
  const handleMousedownTo = event => {
    event.preventDefault();

    const shiftX2 =
      event.clientX - cursor2.current.getBoundingClientRect().left;

    const handleMouseMoveTo = event => {
      let newLeft = event.clientX - shiftX2 - slideStart;
      getLimitsLeftRight(newLeft);

      cursor2.current.style.left = newLeft + 'px';

      if (newLeft < 60) {
        handleToValue('10000');
        cursor2.current.style.left = -13 + 'px';
      }
      if (newLeft > 60 && newLeft < 180) {
        handleToValue('50000');
        cursor2.current.style.left = 111 + 'px';
      }
      if (newLeft > 180 && newLeft < 300) {
        handleToValue('100000');
        cursor2.current.style.left = 233 + 'px';
      }
      if (newLeft > 300 && newLeft < 420) {
        handleToValue('200000');
        cursor2.current.style.left = 354 + 'px';
      }
      if (newLeft > 420 && newLeft < 540) {
        handleToValue('500000');
        cursor2.current.style.left = 475 + 'px';
      }
      if (newLeft > 540) {
        handleToValue('1000000');
        cursor2.current.style.left = 597 + 'px';
      }
    };

    const handleMouseUpTo = () => {
      window.removeEventListener('mousemove', handleMouseMoveTo);
      window.removeEventListener('mouseup', handleMouseUpTo);
    };

    window.addEventListener('mousemove', handleMouseMoveTo);
    window.addEventListener('mouseup', handleMouseUpTo);
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
          onMouseDown={handleMousedownFrom}
          onDragStart={() => false}
        ></div>
        <div
          className='cursor'
          id='cursor-2'
          ref={cursor2}
          onMouseDown={handleMousedownTo}
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
