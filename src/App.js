import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Plans from './pages/Plans';
import Preferences from './pages/Preferences';
import Error from './pages/Error';
import Logo from './components/Logo';
import Modal from './components/Modal';
import Loader from './components/Loader';
import Debouncer from './components/Debouncer';
import NarrowModal from './components/NarrowModal';
import Progress from './components/Progress';
import { useGlobalContext } from './context';

const App = () => {
  const { errorPage } = useGlobalContext();
  return (
    <Router>
      <Loader />
      <NarrowModal />
      <Debouncer />
      <Modal />
      <Logo logoDisplay='logo-mobile' />
      <Progress progressDisplay={!errorPage && 'progress-mobile'} />
      <Switch>
        <Route exact path='/'>
          <Contact />
        </Route>
        <Route path='/plans'>
          <Plans />
        </Route>
        <Route path='/preferences'>
          <Preferences />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
