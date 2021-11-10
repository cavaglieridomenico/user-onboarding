import React, { useEffect, useContext, useReducer, useCallback } from 'react';
import reducer from './reducer';
import {
  areThereAnyEmptyString,
  isItAnInvalidEmail,
  isTheNameTooShort,
  isAnEmptyArray,
} from './assets/scripts/form_utility';

const AppContext = React.createContext();

const defaultState = {
  fetchPostUrl: 'https://60b21f9562ab150017ae1b08.mockapi.io/maxServer/user',
  stepStatus1: false,
  stepStatus2: false,
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

  /**Fetch */
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
      setStepStatus1(false);
      setStepStatus2(false);
    }
  }, [state.dataReady, fetchPost]);

  /**Set the validation progress */
  const setStepStatus1 = value => {
    dispatch({ type: 'SET_STEP_STATUS_1', payload: value });
  };

  const setStepStatus2 = value => {
    dispatch({ type: 'SET_STEP_STATUS_2', payload: value });
  };

  const setDataReady = value => {
    dispatch({ type: 'SET_DATA_READY', payload: value });
  };

  /**Get data from forms on each page */
  const getContactData = (fullName, phoneNumber, phoneCode, email, country) => {
    dispatch({
      type: 'GET_CONTACT_VALUES',
      payload: {
        fullName: fullName,
        phoneNumber: phoneNumber,
        phoneCode: phoneCode,
        email: email,
        country: country,
      },
    });
  };

  const getPlansData = (planFrom, planTo, accredited) => {
    dispatch({
      type: 'GET_PLAN_VALUES',
      payload: {
        planFrom: planFrom,
        planTo: planTo,
        accredited: accredited,
      },
    });
  };

  const getPreferencesData = preferences => {
    dispatch({
      type: 'GET_PREFERENCES_VALUES',
      payload: { preferences },
    });
  };

  /**Set Loader and Debouncer */
  const setLoader = value => {
    dispatch({ type: 'SET_LOADER', payload: value });
  };

  const setDebouncer = value => {
    dispatch({ type: 'SET_DEBOUNCER', payload: value });
  };

  /**Set Large Modal */
  const showResponse = data => {
    dispatch({ type: 'SHOW_RESPONSE', payload: data });
  };

  const setShowModal = topic => {
    dispatch({ type: 'SHOW_MODAL', payload: topic });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  /**Check Validation */
  const areContactDataValidated = (fullName, phoneNumber, email) => {
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

  const arePlansDataValidated = (planFrom, planTo, accredited) => {
    if (areThereAnyEmptyString(planFrom, planTo, accredited)) {
      dispatch({ type: 'ERROR_EMPTY_FIELDS' });
      return false;
    }
    return true;
  };

  const arePreferencesDataValidated = checkedPref => {
    if (isAnEmptyArray(checkedPref)) {
      dispatch({ type: 'ERROR_NO_CHECKBOX_SELECTED' });
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
        getContactData,
        getPlansData,
        getPreferencesData,
        setStepStatus1,
        setStepStatus2,
        setDataReady,
        setShowModal,
        closeModal,
        setLoader,
        setDebouncer,
        areContactDataValidated,
        arePlansDataValidated,
        arePreferencesDataValidated,
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
