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
};

export default reducer;
