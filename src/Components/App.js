import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../config/theme.config';

import SignIn from '../pages/SignIn'; 
import SignUp from '../pages/SignUp';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path='/'>
            <SignIn />
          </Route>
          <Route exact path='/signup'>
            <SignUp />
          </Route>
          <Route exact path='/dashboard'>
            Dashboard
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
