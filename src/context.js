import { createContext } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const contextObject = {};

  return <AppContext.Provider value={contextObject}>{children}</AppContext.Provider>;
};

export default AppProvider;
