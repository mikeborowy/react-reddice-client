import React, {Component, PropTypes} from 'react';

export default class HelloWorld extends Component {

    render(){
        let {message} = this.props;
        return(
            <div className="jumbotron">
                <h1>Hello World!</h1>
            </div>
        );
    }

}

HelloWorld.propTypes= {
    message: PropTypes.string
}
