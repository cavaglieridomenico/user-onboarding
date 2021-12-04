import React, { useRef, useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import {
  onlyInRange,
  containInvalidRange,
  getRightClass,
} from '../assets/scripts/plans_utility';
import { plansList } from '../assets/scripts/lists';

const Slider = () => {
  const { localUser, setLocalUser } = useGlobalContext();

  const slider = useRef(null);
  const cursor1 = useRef(null);
  const cursor2 = useRef(null);
  const notchContainer = useRef(null);
  const sliderNumberContainer = useRef(null);

  const [sliderStart, setSliderStart] = useState(0);
  const [sliderEnd, setSliderEnd] = useState(0);
  const [cursor1Width, setCursor1Width] = useState(0);
  const [cursor2Width, setCursor2Width] = useState(0);

  /*When the page loads positioning of the Slider cursors based on the inputs selected by the user
  and setting of its active classes*/
  useEffect(() => {
    handleFromValueChange(localUser.planFrom);
    handleToValueChange(localUser.planTo);
  }, [localUser.planFrom, localUser.planTo]);

  /*Calculation of the dimensions of the Slider container*/
  useEffect(() => {
    setSliderStart(slider.current.getBoundingClientRect().left);
    setSliderEnd(slider.current.offsetWidth);
    setCursor1Width(cursor1.current.getBoundingClientRect().width);
    setCursor2Width(cursor2.current.getBoundingClientRect().width);
  }, []);

  /**
   *
   * @param {string} userFromValue
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
   * @param {string} userToValue
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
        setLocalUser('planFrom', '10000');
      }
      if (cursor1Position > 60 && cursor1Position < 180) {
        cursor1.current.style.left = 108 + 'px';
        setLocalUser('planFrom', '50000');
      }
      if (cursor1Position > 180 && cursor1Position < 300) {
        cursor1.current.style.left = 228 + 'px';
        setLocalUser('planFrom', '100000');
      }
      if (cursor1Position > 300 && cursor1Position < 420) {
        cursor1.current.style.left = 350 + 'px';
        setLocalUser('planFrom', '200000');
      }
      if (cursor1Position > 420 && cursor1Position < 540) {
        cursor1.current.style.left = 472 + 'px';
        setLocalUser('planFrom', '500000');
      }
      if (cursor1Position > 540) {
        cursor1.current.style.left = 593 + 'px';
        setLocalUser('planFrom', '1000000');
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

        setLocalUser('planTo', '10000');
      }
      if (cursor2Position > 60 && cursor2Position < 180) {
        cursor2.current.style.left = 108 + 'px';

        setLocalUser('planTo', '50000');
      }
      if (cursor2Position > 180 && cursor2Position < 300) {
        cursor2.current.style.left = 229 + 'px';

        setLocalUser('planTo', '100000');
      }
      if (cursor2Position > 300 && cursor2Position < 420) {
        cursor2.current.style.left = 350 + 'px';

        setLocalUser('planTo', '200000');
      }
      if (cursor2Position > 420 && cursor2Position < 540) {
        cursor2.current.style.left = 471 + 'px';

        setLocalUser('planTo', '500000');
      }
      if (cursor2Position > 540) {
        cursor2.current.style.left = 593 + 'px';
        setLocalUser('planTo', '1000000');
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
        {plansList.map((amountValue, index) => {
          return (
            <div
              key={index}
              className={`notch ${getRightClass(
                amountValue.value,
                parseInt(localUser.planFrom),
                parseInt(localUser.planTo),
                'notch-active',
                'notch-error'
              )}`}
            ></div>
          );
        })}
      </div>
      <div
        className={`slider ${
          containInvalidRange(
            parseInt(localUser.planFrom),
            parseInt(localUser.planTo)
          ) && 'slider-error'
        }`}
        ref={slider}
      >
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
          onDragStart={() => false}
        ></div>
      </div>
      <div className='slider-amount-container' ref={sliderNumberContainer}>
        {plansList.map((amountValue, index) => {
          const { label, value } = amountValue;
          return (
            <p
              key={index}
              className={`slider-amount ${getRightClass(
                value,
                parseInt(localUser.planFrom),
                parseInt(localUser.planTo),
                'slider-number-active',
                'slider-amount-error'
              )}`}
            >
              {label}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
