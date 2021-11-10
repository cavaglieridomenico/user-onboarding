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
  showNarrowModal: false,
  narrowModalType: '',
  narrowModalText: '',
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
        getResponse(data);
        setLoader(false);
        setModalOpen('registration');
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

  const getResponse = data => {
    dispatch({ type: 'GET_RESPONSE', payload: data });
  };

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

  /**Set Modal */
  const setModalOpen = topic => {
    dispatch({ type: 'SHOW_MODAL', payload: topic });
  };

  const setModalClose = () => {
    dispatch({ type: 'SET_MODAL_CLOSE' });
  };

  /*Set Narrow Modal*/
  const setNarrowModalOpen = (type, text) => {
    dispatch({
      type: 'SET_NARROW_MODAL_OPEN',
      payload: {
        type,
        text,
      },
    });
  };

  const setNarrowModalClosed = () => {
    dispatch({ type: 'SET_NARROW_MODAL_CLOSED' });
  };

  /*Check Validation*/
  const areContactDataValidated = (fullName, phoneNumber, email) => {
    if (areThereAnyEmptyString(fullName, phoneNumber, email)) {
      setNarrowModalOpen('danger', 'Sorry, all fields must be filled in.');
      return false;
    }
    if (isTheNameTooShort(fullName)) {
      //dispatch({ type: 'ERROR_MINIMUM_3_CHARACTERS' });
      setNarrowModalOpen(
        'danger',
        'Sorry, the name requires at least 3 characters.'
      );
      return false;
    }
    if (isItAnInvalidEmail(email)) {
      //dispatch({ type: 'ERROR_INVALID_MAIL_FORMAT' });
      setNarrowModalOpen(
        'danger',
        'Sorry, the format of the email is not valid.'
      );
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
        setModalOpen,
        setModalClose,
        setNarrowModalOpen,
        setNarrowModalClosed,
        setLoader,
        setDebouncer,
        areContactDataValidated,
        arePlansDataValidated,
        arePreferencesDataValidated,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
