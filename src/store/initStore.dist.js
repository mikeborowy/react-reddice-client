import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers';
import thunk from 'redux-thunk';

/**
 * Create Store, here is where you apply all reducers, inital 
 * state and middleware: thunk
 * @param {Object} initialState 
 */
export default function initStore(initialState) {
    return createStore(
        rootReducers, 
        initialState, 
        applyMiddleware(thunk)
        );
}
