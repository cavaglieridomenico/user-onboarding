import React, { useContext, useReducer } from 'react';
import reducer from './reducer';

const AppContext = React.createContext();

const defaultState = {
  name: 'Max',
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleName = inputName => {
    console.log(inputName);
    console.log(state);
    dispatch({ type: 'NAME_VALUE', payload: { name: inputName } });
  };

  return (
    <AppContext.Provider value={{ ...state, handleName }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
