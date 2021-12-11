import React, { useEffect, useContext, useReducer, useCallback } from 'react';
import reducer from './reducer';
import { isFull } from './assets/scripts/utils/list/list_utility';
import { isValidRange } from './assets/scripts/utils/range/range_utility';
import {
  isValidFullName,
  isValidPhoneNumber,
  isValidEmail,
} from './assets/scripts/utils/form/form_utility';

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

  /*Set the validation progress*/
  useEffect(() => {
    const {
      fullName,
      phoneNumber,
      email,
      planFrom,
      planTo,
      accredited,
      preferences,
    } = state.localUser;
    isValidFullName(fullName) &&
    isValidPhoneNumber(phoneNumber) &&
    isValidEmail(email)
      ? dispatch({ type: 'SET_STEP_STATUS_1', payload: true })
      : dispatch({ type: 'SET_STEP_STATUS_1', payload: false });

    isFull(planFrom, planTo, accredited) &&
    isValidRange(parseInt(planFrom), parseInt(planTo))
      ? dispatch({ type: 'SET_STEP_STATUS_2', payload: true })
      : dispatch({ type: 'SET_STEP_STATUS_2', payload: false });

    isFull(preferences)
      ? dispatch({ type: 'SET_STEP_STATUS_3', payload: true })
      : dispatch({ type: 'SET_STEP_STATUS_3', payload: false });
  }, [state.localUser]);

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
        setDataReady,
        setModalOpen,
        setModalClose,
        setNarrowModalOpen,
        setNarrowModalClosed,
        setLoader,
        setDebouncer,
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
