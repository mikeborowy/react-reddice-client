import React from 'react';

class HelloWorld extends React.Component {

    render() {
        let {message} = this.props;
        return (
            <div className="jumbotron">
                <h1>Hello World!</h1>
            </div>
        );
    }
}

HelloWorld.propTypes = {
    message: React.PropTypes.string
};

export default HelloWorld;
