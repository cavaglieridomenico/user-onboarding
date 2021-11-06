const reducer = (state, action) => {
  if (action.type === 'CONTACT_VALUES') {
    const { fullName, phoneCode, phoneNumber, email, country } = action.payload;
    console.log(fullName, phoneNumber);
    return {
      ...state,
      fullName: fullName,
      phoneCode: phoneCode,
      phoneNumber: phoneNumber,
      email: email,
      country: country,
    };
  }
  if (action.type === 'PLAN_VALUES') {
    const { planFrom, planTo, accredited } = action.payload;
    return {
      ...state,
      planFrom: planFrom,
      planTo: planTo,
      accredited: accredited,
    };
  }
};

export default reducer;
