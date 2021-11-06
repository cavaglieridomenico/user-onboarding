import React, { useContext, useReducer } from 'react';
import reducer from './reducer';

const AppContext = React.createContext();

const defaultState = {
  fullName: '',
  phoneCode: '',
  phoneNumber: '',
  email: '',
  country: '',
  planFrom: '',
  planTo: '',
  accredited: '',
  preferences: [],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const getContact = (fullName, phoneNumber, phoneCode, email, country) => {
    dispatch({
      type: 'CONTACT_VALUES',
      payload: {
        fullName: fullName,
        phoneNumber: phoneNumber,
        phoneCode: phoneCode,
        email: email,
        country: country,
      },
    });
  };

  const getPlans = (planFrom, planTo, accredited) => {
    dispatch({
      type: 'PLAN_VALUES',
      payload: {
        planFrom: planFrom,
        planTo: planTo,
        accredited: accredited,
      },
    });
  };

  const getPreferences = preferences => {
    dispatch({
      type: 'PREFERENCES_VALUES',
      payload: { preferences },
    });
  };

  return (
    <AppContext.Provider
      value={{ ...state, getContact, getPlans, getPreferences }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
