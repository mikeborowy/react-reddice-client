import React, {Component} from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import loginValidation from './helpers/loginValidation';
import {connect} from 'react-redux';
import {OnLoginRequest} from './_login.Actions';
import {OnAddFlashMessage} from '../flashMessagesList/_flashMessage.Actions';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false
        };

        this.onSubmit = this
            .onSubmit
            .bind(this);
        this.onChange = this
            .onChange
            .bind(this);
    }

    onSubmit(evt) {

        evt.preventDefault();

        if (this.formIsValid()) {
            this.setState({errors: {}, isLoading: true});

            this
                .props
                .OnLoginRequest(this.state)
                .then((resposne) => {

                    console.log("resposne", resposne);
                    console.log("this.state", this.state);

                    this.props.OnAddFlashMessage({type: 'success', text: `Welcome ${this.state.identifier}`});

                    this.context.router.push('/');

                }, 
                (error) => {

                    console.log("error", error)

                    this.setState({errors: error.data, isLoading: false});


                });
        }
    }

    formIsValid() {
        const {errors, isValid} = loginValidation(this.state);

        if (!isValid) {
            this.setState({errors});
        }

        return isValid;
    }

    onChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render() {

        const {identifier, password, errors, isLoading} = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Login</h1>
                {errors.loginForm && <div className="alert alert-danger">{errors.loginForm}</div>}
                <TextFieldGroup
                    label="Username / Email"
                    fieldName="identifier"
                    value={identifier}
                    error={errors.identifier}
                    onChange={this.onChange}/>
                <TextFieldGroup
                    label="Password"
                    type="password"
                    fieldName="password"
                    value={password}
                    error={errors.password}
                    onChange={this.onChange}/>

                <div className="form-group">
                    <button disabled={isLoading} className="btn btn-primary btn-lg">Login</button>
                </div>
            </form>
        );
    }
}

LoginForm.contextTypes = {
    router: React.PropTypes.object.isRequired
};

LoginForm.propTypes = {
    OnLoginRequest: React.PropTypes.func.isRequired,
    OnAddFlashMessage: React.PropTypes.func.isRequired
};

export default connect(null, {OnLoginRequest, OnAddFlashMessage})(LoginForm);