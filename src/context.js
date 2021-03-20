import { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleSidebarVisibility = () => setIsSidebarVisible(prev => !prev);
  const toggleModalVisibility = () => setIsModalVisible(prev => !prev);

  const contextValues = {
    isSidebarVisible,
    isModalVisible,
    toggleSidebarVisibility,
    toggleModalVisibility,
  };

  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

export default AppProvider;
