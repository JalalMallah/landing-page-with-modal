import AppProvider from 'context';

import Sidebar from 'components/Sidebar/Sidebar';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';

import './App.scss';

const App = () => {
  return (
    <AppProvider>
      <Sidebar />
      <Header />
      <Main />
    </AppProvider>
  );
};

export default App;
