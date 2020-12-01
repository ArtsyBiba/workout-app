import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          Signin
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
