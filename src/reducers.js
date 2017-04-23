import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import ajaxCallsInProgress from './components/preloader/_preloader.Reducer';
import flashMessages from './components/flashMessagesList/_flashMessages.Reducer';
import login from './components/login/_login.Reducer';

const rootReducer = combineReducers({
    // routing: routerReducer,
    ajaxCallsInProgress, //shorthand property name accesible in store
    flashMessages,
    login
});

export default rootReducer;