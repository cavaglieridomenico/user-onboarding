import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Plan from './pages/Plan';
import Preferences from './pages/Preferences';
import Error from './pages/Error';
import Logo from './components/Logo';

function App() {
  return (
    <Router>
      <Logo view='logo-mobile' />
      <Switch>
        <Route exact path='/'>
          <Contact />
        </Route>
        <Route path='/plan'>
          <Plan />
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
