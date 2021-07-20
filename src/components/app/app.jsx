import {
  Switch,
  Route,
  Router
} from 'react-router-dom';
import Main from '../main/main';
import Login from '../login/login';
import {createBrowserHistory} from 'history';
import {AppRoute} from '../../constants';

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
