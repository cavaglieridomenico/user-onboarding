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
import ErrorMessage from './components/ErrorMessage';

function App() {
  return (
    <Router>
      <Loader />
      <ErrorMessage />
      <Debouncer />
      <Modal />
      <Logo view='logo-mobile' />
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
}

export default App;
