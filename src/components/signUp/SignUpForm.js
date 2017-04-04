import React from 'react';
import {map} from 'lodash';
import timezone from '../../data/timezone';
import TextFieldGroup from '../common/TextFieldGroup';
import signupValidation from '../../helpers/signupValidation';

class SignUpForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            errors: {},
            isLoading: false
        };

        this.OnChange = this
            .OnChange
            .bind(this);
        this.OnSubmit = this
            .OnSubmit
            .bind(this);
    }

    OnChange(evt) {
        this.setState({
            [evt.currentTarget.name]: evt.currentTarget.value
        });
    }

    OnSubmit(evt) {
        evt.preventDefault();

        if (this.formIsValid()) {
            this.setState({errors: {}, isLoading: true});

            this
                .props
                .OnSignUpRequest(this.state)
                .then(() => {}, (error) => this.setState({errors: error.data, isLoading: false}));
        }
    }

    formIsValid() {
        const {errors, isValid} = signupValidation(this.state);

        if (!isValid) {
            this.setState({errors});
        }

        return isValid;
    }

    render() {

        const options = map(timezone, (val, key) => {
            return (
                <option key={val} value={val}>{key}</option>
            );
        });

        const {errors} = this.state;

        return (
            <form onSubmit={this.OnSubmit}>
                <h1>Join Our Community</h1>

                <TextFieldGroup
                    fieldName="username"
                    label="User Name"
                    value={this.state.username}
                    onChange={this.OnChange}
                    error={errors.username}/>
                <TextFieldGroup
                    fieldName="email"
                    label="Email"
                    value={this.state.email}
                    onChange={this.OnChange}
                    error={errors.email}/>
                <TextFieldGroup
                    fieldName="password"
                    label="Password"
                    value={this.state.password}
                    onChange={this.OnChange}
                    error={errors.password}/>
                <TextFieldGroup
                    fieldName="passwordConfirmation"
                    label="Password Confirmation"
                    value={this.state.passwordConfirmation}
                    onChange={this.OnChange}
                    error={errors.passwordConfirmation}/>
                <TextFieldGroup
                    fieldName="timezone"
                    label="Timezone"
                    value={this.state.timezone}
                    onChange={this.OnChange}
                    error={errors.timezone}/>

                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Sign Up</button>
                </div>
            </form>
        );
    }
}

SignUpForm.defaultTypes = {
    OnSignUpRequest: () => {}
};

SignUpForm.propTypes = {
    OnSignUpRequest: React.PropTypes.func.isRequired
};

export default SignUpForm;