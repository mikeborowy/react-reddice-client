import { createStore, applyMiddleware } from 'redux';
import indexOfReducers from './reducers';
import thunk from 'redux-thunk';

/**
 * Create Store, here is where you apply all reducers, inital 
 * state and middleware: thunk
 * @param {Object} initialState 
 */
export default function initStore(initialState) {
    return createStore(
        indexOfReducers, 
        initialState, 
        applyMiddleware(thunk)
        );
}
