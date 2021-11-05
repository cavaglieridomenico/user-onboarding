import React, { useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const text = 'Benvenuti';
  return <AppContext.Provider value={{ text }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
