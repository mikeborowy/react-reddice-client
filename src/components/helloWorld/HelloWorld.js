import React, {PropTypes} from 'react';

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
    message: PropTypes.string
};

export default HelloWorld;
