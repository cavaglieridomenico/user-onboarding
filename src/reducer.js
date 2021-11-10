import { modalHelp, modalPrivacy } from './assets/scripts/modal_content';
const reducer = (state, action) => {
  /**Fetch */
  if (action.type === 'GET_RESPONSE') {
    return {
      ...state,
      response: action.payload,
    };
  }
  /**Set the validation progress */
  if (action.type === 'SET_STEP_STATUS_1') {
    return {
      ...state,
      stepStatus1: action.payload,
    };
  }

  if (action.type === 'SET_STEP_STATUS_2') {
    return {
      ...state,
      stepStatus2: action.payload,
    };
  }

  if (action.type === 'SET_DATA_READY') {
    return {
      ...state,
      dataReady: action.payload,
    };
  }

  /**Get data from forms on each page */
  if (action.type === 'GET_CONTACT_VALUES') {
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

  if (action.type === 'GET_PLAN_VALUES') {
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

  if (action.type === 'GET_PREFERENCES_VALUES') {
    const { preferences } = action.payload;
    return {
      ...state,
      newUser: {
        ...state.newUser,
        preferences: preferences,
      },
    };
  }

  /**Set Loader and Debouncer */
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

  /**Set Modal */

  if (action.type === 'SHOW_MODAL') {
    if (action.payload === 'help') {
      return {
        ...state,
        showModal: true,
        modalTitle: modalHelp.title,
        modalText: modalHelp.text,
        modalResponse: false,
      };
    }
    if (action.payload === 'privacy') {
      return {
        ...state,
        showModal: true,
        modalTitle: modalPrivacy.title,
        modalText: modalPrivacy.text,
        modalResponse: false,
      };
    }
    if (action.payload === 'registration') {
      return {
        ...state,
        showModal: true,
        modalTitle: 'successful registration',
        modalText: '',
        modalResponse: true,
      };
    }
  }

  if (action.type === 'SET_MODAL_CLOSE') {
    return {
      ...state,
      showModal: false,
      modalTitle: '',
      modalText: '',
      modalResponse: false,
    };
  }

  /**Set Narrow Modal */
  if (action.type === 'SET_NARROW_MODAL_CLOSED') {
    return {
      ...state,
      showNarrowModal: false,
    };
  }

  /**Check Validation */
  if (action.type === 'ERROR_EMPTY_FIELDS') {
    return {
      ...state,
      showNarrowModal: true,
      narrowModalText: 'Sorry, all fields must be filled in.',
    };
  }
  if (action.type === 'ERROR_MINIMUM_3_CHARACTERS') {
    return {
      ...state,
      showNarrowModal: true,
      narrowModalText: 'Sorry, the name requires at least 3 characters.',
    };
  }
  if (action.type === 'ERROR_INVALID_MAIL_FORMAT') {
    return {
      ...state,
      showNarrowModal: true,
      narrowModalText: 'Sorry, the format of the email is not valid.',
    };
  }
  if (action.type === 'ERROR_NO_CHECKBOX_SELECTED') {
    return {
      ...state,
      showNarrowModal: true,
      narrowModalText: 'Sorry, at least one option must be selected.',
    };
  }
};

export default reducer;
