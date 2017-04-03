//CSS
import './styles/styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//Babel
import 'babel-polyfill';
//React
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
//App
import routes from './routes';

render(
  <Router routes={routes} history={browserHistory}/>, 
  document.getElementById('app')
);
