import React, {Component} from 'react';
import NavigationBar from './navigationBar/NavigationBar';

export default class App extends Component {

    render() {
        return (
            <div className="container">
                <NavigationBar/> {this.props.children}
            </div>
        )
    }
}
