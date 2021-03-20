import AppProvider from 'context';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from 'components/Sidebar/Sidebar';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import Footer from 'components/Footer/Footer';
import Modal from 'components/Modal/Modal';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Sidebar />
        <Header />
        <Main />
        <Footer />
        <Modal />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
