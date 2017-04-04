//CSS
import './styles/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//Babel
import 'babel-polyfill';
//React
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
//Redux
import {Provider} from 'react-redux';
import initStore from './store';
//App
import routes from './routes';

const store = initStore();

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>, 
  document.getElementById('app')
);
