import AppProvider from 'context';

import Sidebar from 'components/Sidebar/Sidebar';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import Footer from 'components/Footer/Footer';
import Modal from 'components/Modal/Modal';

import './App.scss';

const App = () => {
  return (
    <AppProvider>
      <Sidebar />
      <Header />
      <Main />
      <Footer />
      <Modal />
    </AppProvider>
  );
};

export default App;
