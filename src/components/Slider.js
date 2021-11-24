import React, { useRef, useState, useEffect } from 'react';
import {
  containInvalidRange,
  onlyInRange,
} from '../assets/scripts/form_utility';

const Slider = ({ handleFromValue, handleToValue, fromValue, toValue }) => {
  const slider = useRef(null);
  const cursor1 = useRef(null);
  const cursor2 = useRef(null);
  const notchContainer = useRef(null);
  const sliderNumberContainer = useRef(null);

  const [sliderStart, setSliderStart] = useState(0);
  const [sliderEnd, setSliderEnd] = useState(0);
  const [cursor1Width, setCursor1Width] = useState(0);
  const [cursor2Width, setCursor2Width] = useState(0);
  /*Positioning of the Slider cursors based on the inputs selected by the user
  and setting of its active classes*/
  useEffect(() => {
    handleFromValueChange(fromValue);
    handleToValueChange(toValue);
    setToActive(toValue);
    setFromActive(fromValue);
    if (containInvalidRange(parseInt(fromValue), parseInt(toValue))) {
      slider.current.classList.add('slider-error');
      notchContainer.current.childNodes.forEach(element =>
        element.classList.add('slider-notch-error')
      );
      sliderNumberContainer.current.childNodes.forEach(element =>
        element.classList.add('slider-amount-error')
      );
    } else {
      slider.current.classList.remove('slider-error');
      notchContainer.current.childNodes.forEach(element =>
        element.classList.remove('slider-notch-error')
      );
      sliderNumberContainer.current.childNodes.forEach(element =>
        element.classList.remove('slider-amount-error')
      );
    }
  }, [fromValue, toValue]);

  /*Calculation of the dimensions of the Slider container*/
  useEffect(() => {
    setSliderStart(slider.current.getBoundingClientRect().left);
    setSliderEnd(slider.current.offsetWidth);
    setCursor1Width(cursor1.current.getBoundingClientRect().width);
    setCursor2Width(cursor2.current.getBoundingClientRect().width);
  }, []);

  /**
   *
   * @param {*} userFromValue
   */
  const handleFromValueChange = userFromValue => {
    switch (userFromValue) {
      case '10000':
        cursor1.current.style.left = 0 + 'px';
        break;
      case '50000':
        cursor1.current.style.left = 108 + 'px';
        break;
      case '100000':
        cursor1.current.style.left = 228 + 'px';
        break;
      case '200000':
        cursor1.current.style.left = 350 + 'px';
        break;
      case '500000':
        cursor1.current.style.left = 472 + 'px';
        break;
      case '1000000':
        cursor1.current.style.left = 593 + 'px';
        break;
      default:
        cursor1.current.style.left = 0 + 'px';
    }
  };

  /**
   *
   * @param {*} userToValue
   */
  const handleToValueChange = userToValue => {
    switch (userToValue) {
      case '10000':
        cursor2.current.style.left = 0 + 'px';
        break;
      case '50000':
        cursor2.current.style.left = 108 + 'px';
        break;
      case '100000':
        cursor2.current.style.left = 229 + 'px';
        break;
      case '200000':
        cursor2.current.style.left = 350 + 'px';
        break;
      case '500000':
        cursor2.current.style.left = 471 + 'px';
        break;
      case '1000000':
        cursor2.current.style.left = 593 + 'px';
        break;
      default:
        cursor2.current.style.left = 0 + 'px';
    }
  };

  /*Insertion and deactivation of active classes based on the variation of the input To*/
  const setToActive = toValue => {
    sliderNumberContainer.current.childNodes.forEach(element => {
      element.classList.remove('slider-number-active');
      if (parseInt(element.getAttribute('number')) <= parseInt(toValue)) {
        element.classList.add('slider-number-active');
      }
    });
    notchContainer.current.childNodes.forEach(element => {
      element.classList.remove('notch-active');
      if (parseInt(element.getAttribute('number')) <= parseInt(toValue)) {
        element.classList.add('notch-active');
      }
    });
  };
  /*Insertion and deactivation of active classes based on the variation of the input From*/
  const setFromActive = fromValue => {
    sliderNumberContainer.current.childNodes.forEach(element => {
      if (parseInt(element.getAttribute('number')) < parseInt(fromValue)) {
        element.classList.remove('slider-number-active');
      }
      if (parseInt(element.getAttribute('number')) === parseInt(fromValue)) {
        element.classList.add('slider-number-active');
      }
    });

    notchContainer.current.childNodes.forEach(element => {
      if (parseInt(element.getAttribute('number')) < parseInt(fromValue)) {
        element.classList.remove('notch-active');
      }
      if (parseInt(element.getAttribute('number')) === parseInt(fromValue)) {
        element.classList.add('notch-active');
      }
    });
  };

  /*Cursor 1 logic when operated by the user*/
  const handleMousedownFrom = event => {
    event.preventDefault();

    const shiftX1 =
      event.clientX - cursor1.current.getBoundingClientRect().left;

    const handleMouseMoveFrom = event => {
      let cursor1Position = event.clientX - shiftX1 - sliderStart;

      cursor1.current.style.left =
        onlyInRange(cursor1Position, 0, sliderEnd - cursor1Width) + 'px';

      if (cursor1Position < 60) {
        cursor1.current.style.left = 0 + 'px';
        handleFromValue('10000');
      }
      if (cursor1Position > 60 && cursor1Position < 180) {
        cursor1.current.style.left = 108 + 'px';
        handleFromValue('50000');
      }
      if (cursor1Position > 180 && cursor1Position < 300) {
        cursor1.current.style.left = 228 + 'px';
        handleFromValue('100000');
      }
      if (cursor1Position > 300 && cursor1Position < 420) {
        cursor1.current.style.left = 350 + 'px';
        handleFromValue('200000');
      }
      if (cursor1Position > 420 && cursor1Position < 540) {
        cursor1.current.style.left = 472 + 'px';
        handleFromValue('500000');
      }
      if (cursor1Position > 540) {
        cursor1.current.style.left = 593 + 'px';
        handleFromValue('1000000');
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
      let cursor2Position = event.clientX - shiftX2 - sliderStart;

      cursor2.current.style.left =
        onlyInRange(
          cursor2Position,
          0,
          sliderEnd - cursor2Width - cursor1Width
        ) + 'px';

      if (cursor2Position < 60) {
        cursor2.current.style.left = 0 + 'px';

        handleToValue('10000');
      }
      if (cursor2Position > 60 && cursor2Position < 180) {
        cursor2.current.style.left = 108 + 'px';

        handleToValue('50000');
      }
      if (cursor2Position > 180 && cursor2Position < 300) {
        cursor2.current.style.left = 229 + 'px';

        handleToValue('100000');
      }
      if (cursor2Position > 300 && cursor2Position < 420) {
        cursor2.current.style.left = 350 + 'px';

        handleToValue('200000');
      }
      if (cursor2Position > 420 && cursor2Position < 540) {
        cursor2.current.style.left = 471 + 'px';

        handleToValue('500000');
      }
      if (cursor2Position > 540) {
        cursor2.current.style.left = 593 + 'px';
        handleToValue('1000000');
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
      <div className='slider-amount-container' ref={sliderNumberContainer}>
        <p className='slider-amount' number={'10000'}>
          $10,000
        </p>
        <p className='slider-amount' number={'50000'}>
          $50,000
        </p>
        <p className='slider-amount' number={'100000'}>
          $100,000
        </p>
        <p className='slider-amount' number={'200000'}>
          $200,000
        </p>
        <p className='slider-amount' number={'500000'}>
          $500,000
        </p>
        <p className='slider-amount' number={'1000000'}>
          $1,000,000 +
        </p>
      </div>
    </div>
  );
};

export default Slider;
