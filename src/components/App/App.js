import AppProvider from 'context';

import Sidebar from 'components/Sidebar/Sidebar';
import Header from 'components/Header/Header';

import './App.scss';

const App = () => {
  return (
    <AppProvider>
      <Sidebar />
      <Header />
    </AppProvider>
  );
};

export default App;
