//CSS
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/styles.scss';
//Babel
import 'babel-polyfill';
//React
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
//Redux
import {Provider} from 'react-redux';
import initStore from './store';
import setHeaderAuthToken from './components/login/helpers/setHeaderAuthToken';
//App
import routes from './routes';
//Actions
import {OnSetCurrentUser} from './components/login/_login.Actions';

const store = initStore();

if (localStorage.accessToken) {
  setHeaderAuthToken(localStorage.accessToken);
  store.dispatch(OnSetCurrentUser(JSON.parse(localStorage.user)));
}

render(
  <Provider store={store}>
  <Router routes={routes} history={browserHistory}/>
</Provider>, document.getElementById('app'));
