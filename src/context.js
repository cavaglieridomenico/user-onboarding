import React, { useEffect, useContext, useReducer, useCallback } from 'react';
import reducer from './reducer';
import {
  areThereAnyEmptyString,
  isItAnInvalidEmail,
  isTheNameTooShort,
} from './assets/scripts/form_utility';

const AppContext = React.createContext();

const defaultState = {
  fetchPostUrl: 'https://60b21f9562ab150017ae1b08.mockapi.io/maxServer/user',
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
  showModal: false,
  modalTitle: '',
  modalText: '',
  modalResponse: false,
  loading: false,
  debouncing: false,
  showErrorMessage: false,
  errorMessageText: '',
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const fetchPost = useCallback(() => {
    setLoader(true);
    fetch(state.fetchPostUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(state.newUser),
    })
      .then(response => response.json())
      .then(data => {
        setLoader(false);
        showResponse(data);
      });
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
    dispatch({ type: 'DATA_READY', payload: value });
  };

  const showResponse = data => {
    dispatch({ type: 'SHOW_RESPONSE', payload: data });
  };

  const setShowModal = topic => {
    dispatch({ type: 'SHOW_MODAL', payload: topic });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const setLoader = value => {
    dispatch({ type: 'SET_LOADER', payload: value });
  };

  const setDebouncer = value => {
    dispatch({ type: 'SET_DEBOUNCER', payload: value });
  };

  const contactValidation = (fullName, phoneNumber, email) => {
    if (areThereAnyEmptyString(fullName, phoneNumber, email)) {
      dispatch({ type: 'ERROR_EMPTY_FIELDS' });
      return false;
    }
    if (isTheNameTooShort(fullName)) {
      dispatch({ type: 'ERROR_MINIMUM_3_CHARACTERS' });
      return false;
    }
    if (isItAnInvalidEmail(email)) {
      dispatch({ type: 'ERROR_INVALID_MAIL_FORMAT' });
      return false;
    }
    return true;
  };

  const closeErrorMessage = () => {
    dispatch({ type: 'CLOSE_ERROR_MESSAGE' });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getContact,
        getPlans,
        getPreferences,
        setDataReady,
        setShowModal,
        closeModal,
        setLoader,
        setDebouncer,
        contactValidation,
        closeErrorMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
