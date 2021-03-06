import React from 'react';
import { Link } from 'react-router-dom';
import arrow_left from '../assets/images/arrow_left.svg';
import { useGlobalContext } from '../context';

const Footer = ({
  toPage,
  toPageText,
  skipStep,
  textRightButton,
  handleSubmit,
  buttonContainerDisplay,
}) => {
  const { setDebouncer } = useGlobalContext();

  return (
    <footer>
      <Link className='link-to-page' to={toPage}>
        <div className='arrow-container'>
          <img src={arrow_left} alt='arrow-icon' />
        </div>
        <p>{toPageText}</p>
      </Link>
      <div className={`btn-container ${buttonContainerDisplay}`}>
        <Link to={skipStep}>
          <button
            className='btn btn-primary50'
            onClick={() => setDebouncer(true)}
          >
            Skip for now
          </button>
        </Link>
        <button
          type='submit'
          className={`btn btn-primary ${
            textRightButton === 'Finish' && 'finish-button'
          }`}
          onClick={() => {
            handleSubmit();
            setDebouncer(true);
          }}
        >
          <span>{textRightButton}</span>
          <div
            className={
              textRightButton === 'Next step' ? 'arrow-button' : 'none'
            }
          ></div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
