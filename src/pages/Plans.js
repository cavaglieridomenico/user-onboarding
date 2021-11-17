import React, { useRef, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import { useGlobalContext } from '../context';

const Plans = () => {
  const history = useHistory();
  const [fromValue, setFromValue] = useState('10000');
  const [toValue, setToValue] = useState('200000');
  const [fromValueSlider, setFromValueSlider] = useState(-17);
  const [toValueSlider, setToValueSlider] = useState(354);

  const {
    arePlansDataValidated,
    getPlansData,
    setNarrowModalOpen,
    setStepStatus2,
    stepStatus1,
  } = useGlobalContext();

  const planFrom = useRef('');
  const planTo = useRef('');
  const accredited = useRef('');

  /**
   * The value chosen by the user of the select input is used to modify its useState and to send the      corresponding measure of the left position to the Slider cursors.
   * @param {*} userFromValue
   */
  const handleFromValueChange = userFromValue => {
    setFromValue(userFromValue);
    switch (userFromValue) {
      case '10000':
        setFromValueSlider(-16);
        break;
      case '50000':
        setFromValueSlider(103);
        break;
      case '100000':
        setFromValueSlider(224);
        break;
      case '200000':
        setFromValueSlider(348);
        break;
      case '500000':
        setFromValueSlider(470);
        break;
      case '1000000':
        setFromValueSlider(591);
        break;
      default:
        setFromValueSlider(0);
        break;
    }
  };

  /**
   * The value chosen by the user of the select input is used to modify its useState and to send the corresponding measure of the left position to the Slider cursors.
   * @param {*} userToValue
   */
  const handleToValueChange = userToValue => {
    setToValue(userToValue);
    switch (userToValue) {
      case '10000':
        setToValueSlider(-13);
        break;
      case '50000':
        setToValueSlider(111);
        break;
      case '100000':
        setToValueSlider(233);
        break;
      case '200000':
        setToValueSlider(354);
        break;
      case '500000':
        setToValueSlider(475);
        break;
      case '1000000':
        setToValueSlider(597);
        break;
      default:
        setToValueSlider(0);
        break;
    }
  };

  /**
   * Check the status of the previous step and, if it has not yet been updated,
   * directly open the corresponding page,
   * with an alert for the user.
   */
  const goToTheRightPageFromPlans = useCallback(() => {
    if (!stepStatus1) {
      history.push('./');
      setNarrowModalOpen('danger', 'Please enter personal data first.');
    }
  }, [history, stepStatus1, setNarrowModalOpen]);

  /**
   * Handle click on form
   */
  const handleClickPlansForms = () => {
    goToTheRightPageFromPlans();
  };

  /**
   * Update the properties of the newUser object, if the form data is validated.
   * Update the progress of data acquisition across the entire application.
   * Notify the user of the correct data acquisition.
   * Directly opens the next page.
   */
  const handleSubmitPlansForms = useCallback(() => {
    console.log(planFrom.current.value);
    goToTheRightPageFromPlans();
    if (stepStatus1) {
      if (
        arePlansDataValidated(
          planFrom.current.value,
          planTo.current.value,
          accredited.current.elements.accredited.value
        )
      ) {
        getPlansData(
          planFrom.current.value,
          planTo.current.value,
          accredited.current.elements.accredited.value
        );
        setStepStatus2(true);
        setNarrowModalOpen(
          'success',
          'Investment plan data acquired.',
          'Please enter your preferences.'
        );
        history.push('./preferences');
      }
    }
  }, [
    goToTheRightPageFromPlans,
    stepStatus1,
    arePlansDataValidated,
    getPlansData,
    setStepStatus2,
    setNarrowModalOpen,
    history,
  ]);

  return (
    <div className='onboarding-outerbox'>
      <Sidebar
        page={'plans'}
        text={
          'Save from thousands to millions on your deal. Secure the best possible. And get independent, unbiased advice for free'
        }
        author={'Jodie Sears'}
        role={'UNITEDPROPERTIES’ AGENT'}
      />
      <div className='onboarding-innerbox'>
        <Header number={2} />
        <section className='plans'>
          <h1>Investment plans</h1>
          <article>
            <p className='planning-text'>
              Let us know about your investment plans. This will help us get you
              to the right expert who will help you further
            </p>
          </article>
          <article>
            <h2 className='planning-text'>
              How much are you planning to invest in this year?
            </h2>
            <form id='form-plans' onClick={handleClickPlansForms}>
              <div className='form-container'>
                <div className='from-box'>
                  <label htmlFor='plans-from'>From</label>
                  <select
                    type='text'
                    id='plans-from'
                    ref={planFrom}
                    value={fromValue}
                    onChange={event =>
                      handleFromValueChange(event.target.value)
                    }
                    //onClick={handleClickFromValue}
                  >
                    <option id='10000' value='10000'>
                      $10,000
                    </option>
                    <option id='50000' value='50000'>
                      $50,000
                    </option>
                    <option id='100000' value='100000'>
                      $100,000
                    </option>
                    <option id='200000' value='200000'>
                      $200,000
                    </option>
                    <option id='500000' value='500000'>
                      $500,000
                    </option>
                    <option id='1000000' value='1000000'>
                      $1,000,000 +
                    </option>
                  </select>
                </div>
                <div className='to-box'>
                  <label htmlFor='plans-to'>To</label>
                  <select
                    type='text'
                    id='plans-to'
                    ref={planTo}
                    value={toValue}
                    onChange={event => handleToValueChange(event.target.value)}
                    //onClick={handleClickToValue}
                  >
                    <option id='10000' value='10000'>
                      $10,000
                    </option>
                    <option id='50000' value='50000'>
                      $50,000
                    </option>
                    <option id='100000' value='100000'>
                      $100,000
                    </option>
                    <option id='200000' value='200000'>
                      $200,000
                    </option>
                    <option id='500000' value='500000'>
                      $500,000
                    </option>
                    <option id='1000000' value='1000000'>
                      $1,000,000 +
                    </option>
                  </select>
                  {/* <input
                    type='text'
                    id='plans-to'
                    ref={planTo}
                    value={toValue}
                    onChange={event => handleChangeToValue(event.target.value)}
                  /> */}
                </div>
              </div>
            </form>
            <Slider
              fromValueSlider={fromValueSlider}
              toValueSlider={toValueSlider}
              handleFromValue={setFromValue}
              handleToValue={setToValue}
              fromValue={fromValue}
              toValue={toValue}
            />
          </article>
          <article>
            <h2>Are you an accredited investor?</h2>
            <form
              id='form-investor'
              ref={accredited}
              onClick={handleClickPlansForms}
            >
              <div className='form-container'>
                <div className='radio-investor-box'>
                  <input
                    type='radio'
                    id='accedited-yes'
                    name='accredited'
                    value='yes'
                  />
                  <label htmlFor='accedited-yes'>Yes</label>
                </div>
                <div className='radio-investor-box'>
                  <input
                    type='radio'
                    id='accedited-no'
                    name='accredited'
                    value='no'
                  />
                  <label htmlFor='accedited-no'>No</label>
                </div>
              </div>
            </form>
          </article>
        </section>
        <Footer
          homePage={'/'}
          skipStep={'/preferences'}
          textRightButton={'Next step'}
          handleSubmit={handleSubmitPlansForms}
        />
      </div>
    </div>
  );
};

export default Plans;
