import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import ajaxCallsInProgress from './ajaxCallReducer';
import flashMessages from './flashMessages';

const rootReducer = combineReducers({
    // routing: routerReducer,
    ajaxCallsInProgress, //shorthand property name accesible in store
    flashMessages
});

export default rootReducer;