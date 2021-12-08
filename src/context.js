import React, { useEffect, useContext, useReducer, useCallback } from 'react';
import reducer from './reducer';
import {
  containEmptyString,
  containInvalidEmail,
  containNameTooShort,
  containEmptyArray,
} from './assets/scripts/contact_utility';
import { containInvalidRange } from './assets/scripts/plans_utility';

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
  localUser: getLocalStorage(),
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

  /**The Local Storage is updated with the value of
   *the localUser property*/
  useEffect(() => {
    window.localStorage.setItem('localUser', JSON.stringify(state.localUser));
  }, [state.localUser]);

  /**Set the localUser property*/
  const setLocalUser = (property, value) => {
    dispatch({ type: 'SET_LOCAL_USER', payload: { property, value } });
  };

  /*Check form validation*/
  const areContactDataValidated = useCallback(
    (fullName, phoneNumber, email, alert) => {
      if (containEmptyString(fullName, phoneNumber, email)) {
        if (alert === 'alert') {
          setNarrowModalOpen('danger', 'Sorry, all fields must be filled in.');
        }
        return false;
      }
      if (containNameTooShort(fullName)) {
        if (alert === 'alert') {
          setNarrowModalOpen(
            'danger',
            'Sorry, the name requires at least 3 characters.'
          );
        }
        return false;
      }
      if (containInvalidEmail(email)) {
        if (alert === 'alert') {
          setNarrowModalOpen(
            'danger',
            'Sorry, the format of the email is not valid.'
          );
        }
        return false;
      }
      return true;
    },
    []
  );

  const arePlansDataValidated = useCallback(
    (planFrom, planTo, accredited, alert) => {
      if (containEmptyString(planFrom, planTo, accredited)) {
        if (alert === 'alert') {
          setNarrowModalOpen('danger', 'Sorry, all fields must be filled in.');
        }
        return false;
      }
      if (containInvalidRange(parseInt(planFrom), parseInt(planTo))) {
        if (alert === 'alert') {
          setNarrowModalOpen('danger', 'Sorry, the selected range is invalid.');
        }
        return false;
      }
      return true;
    },
    []
  );

  const arePreferencesDataValidated = useCallback((checkedPref, alert) => {
    if (containEmptyArray(checkedPref)) {
      if (alert === 'alert') {
        setNarrowModalOpen(
          'danger',
          'Sorry, at least one option must be selected.'
        );
      }
      return false;
    }
    return true;
  }, []);

  /*Set the validation progress*/
  const setStepStatus1 = useCallback(value => {
    dispatch({ type: 'SET_STEP_STATUS_1', payload: value });
  }, []);

  const setStepStatus2 = useCallback(value => {
    dispatch({ type: 'SET_STEP_STATUS_2', payload: value });
  }, []);

  const setStepStatus3 = useCallback(value => {
    dispatch({ type: 'SET_STEP_STATUS_3', payload: value });
  }, []);

  useEffect(() => {
    if (
      areContactDataValidated(
        state.localUser.fullName,
        state.localUser.phoneNumber,
        state.localUser.email
      )
    ) {
      setStepStatus1(true);
    } else {
      setStepStatus1(false);
    }
    if (
      arePlansDataValidated(
        state.localUser.planFrom,
        state.localUser.planTo,
        state.localUser.accredited
      )
    ) {
      setStepStatus2(true);
    } else {
      setStepStatus2(false);
    }
    if (arePreferencesDataValidated(state.localUser.preferences)) {
      setStepStatus3(true);
    } else {
      setStepStatus3(false);
    }
  }, [
    areContactDataValidated,
    state.localUser.fullName,
    state.localUser.phoneNumber,
    state.localUser.email,
    setStepStatus1,
    arePlansDataValidated,
    state.localUser.planFrom,
    state.localUser.planTo,
    state.localUser.accredited,
    setStepStatus2,
    arePreferencesDataValidated,
    state.localUser.preferences,
    setStepStatus3,
  ]);

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
        body: JSON.stringify(state.localUser),
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
  }, [state.fetchPostUrl, state.localUser]);

  useEffect(() => {
    if (state.dataReady) {
      fetchPost();
      setDataReady(false);
    }
  }, [state.dataReady, fetchPost]);

  const setDataReady = value => {
    dispatch({ type: 'SET_DATA_READY', payload: value });
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

  /*Handle input focus and blur*/
  const handleFocusInput = form => {
    for (let element of form.current.elements) {
      element.addEventListener('focus', () =>
        element.parentNode.classList.add('onfocus')
      );
      element.addEventListener('blur', () =>
        element.parentNode.classList.remove('onfocus')
      );
    }
  };

  /*Set Error Page*/
  const setErrorPage = useCallback(value => {
    dispatch({ type: 'SET_ERROR_PAGE', payload: value });
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
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
        handleFocusInput,
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
