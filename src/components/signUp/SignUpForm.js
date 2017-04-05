import React from 'react';
import {browserHistory} from 'react-router';
//3rd party
import {map} from 'lodash';
import classnames from 'classnames';
//
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

        this.OnChange = this.OnChange.bind(this);
        this.OnSubmit = this.OnSubmit.bind(this);
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

            this.props
                .onSignUpRequest(this.state)
                .then(
                    () => {
                        this.props.onAddFlashMessage({
                            type: 'success',
                            text: 'You signed up successful. Welcome'
                        })
                        // browserHistory.push('/');
                        this.context.router.push('/');
                    },
                    (error) => this.setState({errors: error.data, isLoading: false})
                );
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
                    type="password"
                    fieldName="password"
                    label="Password"
                    value={this.state.password}
                    onChange={this.OnChange}
                    error={errors.password}/>
                <TextFieldGroup
                    type="password"
                    fieldName="passwordConfirmation"
                    label="Password Confirmation"
                    value={this.state.passwordConfirmation}
                    onChange={this.OnChange}
                    error={errors.passwordConfirmation}/>

                 <div className={classnames("form-group", {'has-error': errors.timezone})}>
                    <label htmlFor="timezone" className="control-label">Select Timezone</label>
                    <select
                        className="form-control"
                        name="timezone"
                        value={this.state.timezone}
                        onChange={this.OnChange}>
                            <option value="" disabled>Choose Your Timezone</option>
                            {options}
                        </select>
                    {errors.timezone && <span className="help-block">{errors.timezone}</span>}
                </div>

                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Sign Up</button>
                </div>
            </form>
        );
    }
}

SignUpForm.defaultTypes = {
    onSignUpRequest: () => {}
};

SignUpForm.propTypes = {
    onSignUpRequest: React.PropTypes.func.isRequired,
    onAddFlashMessage: React.PropTypes.func.isRequired
};

SignUpForm.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default SignUpForm;