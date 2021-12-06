import { modalHelp, modalPrivacy } from './assets/scripts/modal_content';
const reducer = (state, action) => {
  /*Local storage*/
  if (action.type === 'SET_LOCAL_USER') {
    const { property, value } = action.payload;
    return {
      ...state,
      localUser: {
        ...state.localUser,
        [property]: value,
      },
    };
  }

  /*Fetch*/
  if (action.type === 'GET_RESPONSE') {
    return {
      ...state,
      response: action.payload,
    };
  }
  /*Set the validation progress*/
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

  if (action.type === 'SET_STEP_STATUS_3') {
    return {
      ...state,
      stepStatus3: action.payload,
    };
  }

  if (action.type === 'SET_DATA_READY') {
    return {
      ...state,
      dataReady: action.payload,
    };
  }

  /*Set Loader and Debouncer*/
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

  /*Set Modal*/
  if (action.type === 'SET_MODAL_OPEN') {
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

  /*Set Narrow Modal*/
  if (action.type === 'SET_NARROW_MODAL_OPEN') {
    const { type, text, text2 } = action.payload;
    return {
      ...state,
      showNarrowModal: true,
      narrowModalType: type,
      narrowModalText: text,
      narrowModalText2: text2,
    };
  }

  if (action.type === 'SET_NARROW_MODAL_CLOSED') {
    return {
      ...state,
      showNarrowModal: false,
      narrowModalType: '',
      narrowModalText: '',
      narrowModalText2: '',
    };
  }

  /*Set Error Page*/
  if (action.type === 'SET_ERROR_PAGE') {
    return {
      ...state,
      errorPage: action.payload,
    };
  }
  throw new Error('Attention, no action with that name.');
};

export default reducer;
