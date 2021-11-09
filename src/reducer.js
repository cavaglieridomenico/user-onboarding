import { modalHelp, modalPrivacy } from './assets/scripts/modal_content';
const reducer = (state, action) => {
  if (action.type === 'CONTACT_VALUES') {
    const { fullName, phoneCode, phoneNumber, email, country } = action.payload;
    return {
      ...state,
      newUser: {
        ...state.newUser,
        fullName: fullName,
        phoneCode: phoneCode,
        phoneNumber: phoneNumber,
        email: email,
        country: country,
      },
    };
  }
  if (action.type === 'PLAN_VALUES') {
    const { planFrom, planTo, accredited } = action.payload;
    return {
      ...state,
      newUser: {
        ...state.newUser,
        planFrom: planFrom,
        planTo: planTo,
        accredited: accredited,
      },
    };
  }
  if (action.type === 'PREFERENCES_VALUES') {
    const { preferences } = action.payload;
    return {
      ...state,
      newUser: {
        ...state.newUser,
        preferences: preferences,
      },
    };
  }
  if (action.type === 'DATA_READY') {
    return {
      ...state,
      dataReady: action.payload,
    };
  }
  if (action.type === 'SHOW_RESPONSE') {
    return {
      ...state,
      response: action.payload,
      modalResponse: true,
      showModal: true,
      modalText: '',
      modalTitle: 'Registration',
    };
  }
  if (action.type === 'SHOW_MODAL') {
    if (action.payload === 'help') {
      return {
        ...state,
        showModal: true,
        modalTitle: modalHelp.title,
        modalText: modalHelp.text,
      };
    }
    if (action.payload === 'privacy') {
      return {
        ...state,
        showModal: true,
        modalTitle: modalPrivacy.title,
        modalText: modalPrivacy.text,
      };
    }
  }
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      showModal: false,
      modalTitle: '',
      modalText: '',
      modalResponse: false,
    };
  }
  if (action.type === 'SET_LOADER') {
    return {
      ...state,
      loading: action.payload,
    };
  }
  if (action.type === 'SET_DEBOUNCER') {
    return {
      ...state,
      debouncing: action.payload,
    };
  }
  if (action.type === 'ERROR_EMPTY_FIELDS') {
    return {
      ...state,
      showErrorMessage: true,
      errorMessageText: 'Sorry, all fields must be filled in.',
    };
  }
  if (action.type === 'ERROR_MINIMUM_3_CHARACTERS') {
    return {
      ...state,
      showErrorMessage: true,
      errorMessageText: 'Sorry, the name requires at least 3 characters.',
    };
  }
  if (action.type === 'ERROR_INVALID_MAIL_FORMAT') {
    return {
      ...state,
      showErrorMessage: true,
      errorMessageText: 'Sorry, the format of the email is not valid.',
    };
  }
  if (action.type === 'CLOSE_ERROR_MESSAGE') {
    return {
      ...state,
      showErrorMessage: false,
    };
  }
};

export default reducer;
