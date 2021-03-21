import AppProvider from 'context';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from 'components/Main/Main';
import Portfolio from 'components/Pages/Portfolio/Portfolio';
import Blog from 'components/Pages/Blog/Blog';
import Contact from 'components/Pages/Contact/Contact';

import Sidebar from 'components/Sidebar/Sidebar';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Modal from 'components/Modal/Modal';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppProvider>
        <Sidebar />
        <Header />
        <Route path='/' exact component={Main} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/blog' component={Blog} />
        <Route path='/contact' component={Contact} />
        <Footer />
        <Modal />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
