import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../config/theme.config';

import SignIn from '../pages/SignIn'; 
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Data from '../pages/Data';

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
            <Dashboard />
          </Route>
          <Route exact path='/data'>
            <Data />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
