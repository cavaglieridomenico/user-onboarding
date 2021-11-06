import React, { useEffect, useContext, useReducer, useCallback } from 'react';
import reducer from './reducer';

const AppContext = React.createContext();

const defaultState = {
  fetchPostUrl: 'https://60b21f9562ab150017ae1b08.mockapi.io/maxServer/user',
  loading: false,
  dataReady: false,
  response: {},
  newUser: {
    fullName: '',
    phoneCode: '',
    phoneNumber: '',
    email: '',
    country: '',
    planFrom: '',
    planTo: '',
    accredited: '',
    preferences: [],
  },
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const fetchPost = useCallback(() => {
    fetch(state.fetchPostUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(state.newUser),
    })
      .then(response => response.json())
      .then(data => getResponse(data));
  }, [state.fetchPostUrl, state.newUser]);

  useEffect(() => {
    if (state.dataReady) {
      fetchPost();
      setDataReady(false);
    }
  }, [state.dataReady, fetchPost]);

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

  const setDataReady = value => {
    dispatch({
      type: 'DATA_READY',
      payload: value,
    });
  };

  const getResponse = data => {
    dispatch({ type: 'GET_RESPONSE', payload: data });
  };

  return (
    <AppContext.Provider
      value={{ ...state, getContact, getPlans, getPreferences, setDataReady }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
