import {
  Switch,
  Route,
  Router,
  Redirect
} from 'react-router-dom';
import Main from '../main/main';
import Login from '../login/login';
import {createBrowserHistory} from 'history';
import {AppRoute, AuthorizationStatus} from '../../constants';
import {useSelector} from 'react-redux';
import {getAuthStatus} from '../../store/selectors';

const browserHistory = createBrowserHistory();

function App() {

  const authStatus = useSelector(getAuthStatus);

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          {authStatus !== AuthorizationStatus.AUTH ? <Redirect to={AppRoute.LOGIN}/> : <Main/>}
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          {authStatus === AuthorizationStatus.AUTH ? <Redirect to={AppRoute.MAIN}/> : <Login/>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
