/*eslint-disable no-alert, no-console */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; //allows can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. 
import rootReducers from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

/**
 * Create Store, here is where you apply all reducers, inital 
 * state and middleware: thunk, reduxImmutableStateInvariant
 * @param {Object} initialState 
 */
export default function initStore(initialState) {

    return createStore(
        rootReducers, 
        initialState,
        compose(
            applyMiddleware(thunk, consoleMessages, reduxImmutableStateInvariant()),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
}

const consoleMessages = (store) => (next) => (action) => {

    let result;
    result = next(action);
    console.log('store', store.getState()); 

//     console.group()
//     console.log(`dispatching action => ${ action.type }`);
//     console.log(`dispatching course:`, store.getState().course);
//     result = next(action);
//     let {courses} = store.getState();
//     // ski days: ${JSON.stringify(allSkiDays)}
//     console.log(`
//     courses num: ${courses.length}
//     courses:${JSON.stringify(courses, null, "      ")}
//     `)
//     console.groupEnd();

    return result;
};
