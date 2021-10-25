import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Plan from './pages/Plan';
import Preferences from './pages/Preferences';

function App() {
  return (
    <Router>
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
      </Switch>
    </Router>
  );
}

export default App;
