import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn'; 

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <SignIn />
        </Route>
        <Route exact path='/signup'>
          Signup
        </Route>
        <Route exact path='/dashboard'>
          Dashboard
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
