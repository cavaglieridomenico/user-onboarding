const reducer = (state, action) => {
  if (action.type === 'NAME_VALUE') {
    return {
      ...state,
      name: action.payload.name,
    };
  }
};

export default reducer;
