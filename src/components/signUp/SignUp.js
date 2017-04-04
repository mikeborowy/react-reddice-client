import React from 'react';
import {connect} from 'react-redux';
import SignUpForm from './SignUpForm';
import {OnSignUpRequest} from '../../actions/signUpActions';
import {OnAddFlashMessage} from '../../actions/flashMessageActions';

class SignUp extends React.Component {

    render() {

        const {OnSignUpRequest, OnAddFlashMessage} = this.props;

        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignUpForm onSignUpRequest={OnSignUpRequest} onAddFlashMessage={OnAddFlashMessage}/>
                </div>
            </div>
        );
    }
}

SignUp.defaultTypes = {
    OnSignUpRequest: () => {},
    onAddFlashMessage: () => {}
};

SignUp.propTypes = {
    OnSignUpRequest: React.PropTypes.func.isRequired,
    OnAddFlashMessage: React.PropTypes.func.isRequired
};

export default connect ( null, { OnSignUpRequest, OnAddFlashMessage } )(SignUp);