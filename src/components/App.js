import React, {Component} from 'react';
import NavigationBar from './navigationBar/NavigationBar';
import FlashMessagesList from './flashMessagesList/FlashMessagesList';

export default class App extends Component {

    render() {
        return (
            <div className="container">
                <NavigationBar/> 
                <FlashMessagesList/>
                {this.props.children}
            </div>
        )
    }
}
