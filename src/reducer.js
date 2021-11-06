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
  if (action.type === 'GET_RESPONSE') {
    return {
      ...state,
      response: action.payload,
    };
  }
};

export default reducer;
