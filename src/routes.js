import React from 'react';
import {Route, IndexRoute} from 'react-router';
//Components
import App from './components/App';
import HelloWorld from './components/helloWorld/HelloWorld';
import SignUp from './components/signUp/SignUp';
import Login from './components/login/Login';
import NewEventPage from './components/events/NewEventPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HelloWorld}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>
        <Route path="/new-event" component={NewEventPage}/>
    </Route>
);
