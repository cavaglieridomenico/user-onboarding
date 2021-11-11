import React from 'react';
import { useGlobalContext } from '../context';

const Progress = ({ view }) => {
  const { stepStatus1, stepStatus2, stepStatus3 } = useGlobalContext();

  return (
    <div className={`progress-container ${view}`}>
      <div className='progress '>
        <div className='square-text-container'>
          <div
            className={`outer-square ${
              stepStatus1 ? 'outer-active' : undefined
            }`}
          >
            <div
              className={`inner-square ${
                stepStatus1 ? 'inner-active' : undefined
              }`}
            ></div>
          </div>
          <p
            className={`progress-text ${
              stepStatus1 ? 'progress-text-active' : undefined
            }`}
          >
            Contact details
          </p>
        </div>
        <div
          className={`rectangle outer-square ${
            stepStatus1 ? 'rectangle outer-active' : undefined
          }`}
        ></div>
        <div
          className={`rectangle outer-square ${
            stepStatus1 ? 'rectangle outer-active' : undefined
          }`}
        ></div>
      </div>
      <div className='progress'>
        <div className='square-text-container'>
          <div
            className={`outer-square ${
              stepStatus2 ? 'outer-active' : undefined
            }`}
          >
            <div
              className={`inner-square ${
                stepStatus2 ? 'inner-active' : undefined
              }`}
            ></div>
          </div>
          <p
            className={`progress-text ${
              stepStatus2 ? 'progress-text-active' : undefined
            }`}
          >
            Investment plans
          </p>
        </div>
        <div
          className={`rectangle outer-square ${
            stepStatus2 ? 'rectangle outer-active' : undefined
          }`}
        ></div>
        <div
          className={`rectangle outer-square ${
            stepStatus2 ? 'rectangle outer-active' : undefined
          }`}
        ></div>
      </div>
      <div className='progress'>
        <div className='square-text-container'>
          <div
            className={`outer-square ${
              stepStatus3 ? 'outer-active' : undefined
            }`}
          >
            <div
              className={`inner-square ${
                stepStatus3 ? 'inner-active' : undefined
              }`}
            ></div>
          </div>
          <p
            className={`progress-text ${
              stepStatus3 ? 'progress-text-active' : undefined
            }`}
          >
            Investment preferences
          </p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
