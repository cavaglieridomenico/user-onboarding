const reducer = (state, action) => {
  if (action.type === 'NAME_VALUE') {
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
};

export default reducer;
