import React, { useEffect, useContext, useReducer, useCallback } from 'react';
import reducer from './reducer';
import {
  areThereAnyEmptyString,
  isItAnInvalidEmail,
  isTheNameTooShort,
  isAnEmptyArray,
  isItAnInvalidRange,
} from './assets/scripts/form_utility';

const AppContext = React.createContext();

/**Retrieve data from localStorage, if any.*/
const getLocalStorage = () => {
  const userData = localStorage.getItem('localUser');
  if (userData) {
    return JSON.parse(localStorage.getItem('localUser'));
  } else {
    return {
      fullName: '',
      phoneCode: '+39',
      phoneNumber: '',
      email: '',
      country: 'italy',
      planFrom: '10000',
      planTo: '200000',
      accredited: '',
      preferences: [],
    };
  }
};

const defaultState = {
  fetchPostUrl: 'https://60b21f9562ab150017ae1b08.mockapi.io/maxServer/user',
  stepStatus1: false,
  stepStatus2: false,
  stepStatus3: false,
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
  fromLocalUser: getLocalStorage(),
  showModal: false,
  modalTitle: '',
  modalText: '',
  modalResponse: false,
  loading: false,
  debouncing: false,
  showNarrowModal: false,
  narrowModalType: '',
  narrowModalText: '',
  narrowModalText2: '',
  errorPage: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  /**The localStorage data is updated with the value of
   *the fromLocalStorage property*/
  useEffect(() => {
    window.localStorage.setItem(
      'localUser',
      JSON.stringify(state.fromLocalUser)
    );
  }, [state.fromLocalUser]);

  /**Set the fromLocalUser property*/
  const setLocalUser = (property, value) => {
    dispatch({ type: 'SET_LOCAL_USER', payload: { property, value } });
  };

  /**Fetch*/
  const fetchPost = useCallback(async () => {
    setLoader(true);
    try {
      const fetchResponse = await fetch(state.fetchPostUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(state.newUser),
      });
      if (fetchResponse.ok) {
        const data = await fetchResponse.json();
        dispatch({ type: 'GET_RESPONSE', payload: data });
        setLoader(false);
        setModalOpen('registration');
      } else {
        throw new Error('Sorry, network error... please try again later.');
      }
    } catch (error) {
      setLoader(false);
      setNarrowModalOpen('danger', error.message);
    }
  }, [state.fetchPostUrl, state.newUser]);

  useEffect(() => {
    if (state.dataReady) {
      fetchPost();
      setDataReady(false);
    }
  }, [state.dataReady, fetchPost]);

  useEffect(() => {
    setTimeout(() => {
      setStepStatus1(false);
      setStepStatus2(false);
      setStepStatus3(false);
    }, 5000);
  }, [state.dataReady]);

  /*Set the validation progress*/
  const setStepStatus1 = value => {
    dispatch({ type: 'SET_STEP_STATUS_1', payload: value });
  };

  const setStepStatus2 = value => {
    dispatch({ type: 'SET_STEP_STATUS_2', payload: value });
  };

  const setStepStatus3 = value => {
    dispatch({ type: 'SET_STEP_STATUS_3', payload: value });
  };

  const setDataReady = value => {
    dispatch({ type: 'SET_DATA_READY', payload: value });
  };

  /*Get data from forms on each page*/
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

  /*Set Loader and Debouncer*/
  const setLoader = value => {
    dispatch({ type: 'SET_LOADER', payload: value });
  };

  const setDebouncer = value => {
    dispatch({ type: 'SET_DEBOUNCER', payload: value });
  };

  /*Set Modal*/
  const setModalOpen = topic => {
    dispatch({ type: 'SET_MODAL_OPEN', payload: topic });
  };

  const setModalClose = () => {
    dispatch({ type: 'SET_MODAL_CLOSE' });
  };

  /*Set Narrow Modal*/
  const setNarrowModalOpen = (type, text, text2) => {
    dispatch({
      type: 'SET_NARROW_MODAL_OPEN',
      payload: { type, text, text2 },
    });
  };

  const setNarrowModalClosed = () => {
    dispatch({ type: 'SET_NARROW_MODAL_CLOSED' });
  };

  /*Check form validation*/
  const areContactDataValidated = (fullName, phoneNumber, email) => {
    if (areThereAnyEmptyString(fullName, phoneNumber, email)) {
      setNarrowModalOpen('danger', 'Sorry, all fields must be filled in.');
      return false;
    }
    if (isTheNameTooShort(fullName)) {
      setNarrowModalOpen(
        'danger',
        'Sorry, the name requires at least 3 characters.'
      );
      return false;
    }
    if (isItAnInvalidEmail(email)) {
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
      setNarrowModalOpen('danger', 'Sorry, all fields must be filled in.');
      return false;
    }
    if (isItAnInvalidRange(parseInt(planFrom), parseInt(planTo))) {
      setNarrowModalOpen('danger', 'Sorry, the selected range is invalid.');
      return false;
    }
    return true;
  };

  const arePreferencesDataValidated = checkedPref => {
    if (isAnEmptyArray(checkedPref)) {
      setNarrowModalOpen(
        'danger',
        'Sorry, at least one option must be selected.'
      );

      return false;
    }
    return true;
  };

  /*Set Error Page*/
  const setErrorPage = useCallback(value => {
    dispatch({ type: 'SET_ERROR_PAGE', payload: value });
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        getContactData,
        getPlansData,
        getPreferencesData,
        setStepStatus1,
        setStepStatus2,
        setStepStatus3,
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
        setErrorPage,
        setLocalUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
