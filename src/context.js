import React, { useContext, useReducer } from 'react';
import reducer from './reducer';

const AppContext = React.createContext();

const defaultState = {
  fullName: '',
  phoneCode: '',
  phoneNumber: '',
  email: '',
  country: '',
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const getContact = (fullName, phoneNumber, phoneCode, email, country) => {
    dispatch({
      type: 'NAME_VALUE',
      payload: {
        fullName: fullName,
        phoneNumber: phoneNumber,
        phoneCode: phoneCode,
        email: email,
        country: country,
      },
    });
  };
  return (
    <AppContext.Provider value={{ ...state, getContact }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
