import React from 'react';
import {connect} from 'react-redux';
import SignUpForm from './SignUpForm';
import {OnSignUpRequest} from '../../store/actions/signUpActions';

class SignUp extends React.Component {

    render() {

        const {OnSignUpRequest} = this.props;

        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignUpForm OnSignUpRequest={OnSignUpRequest}/>
                </div>
            </div>
        );
    }
}

SignUp.defaultTypes = {
    OnSignUpRequest: () => {}
};

SignUp.propTypes = {
    OnSignUpRequest: React.PropTypes.func.isRequired
};

export default connect ( null, { OnSignUpRequest } )(SignUp);