import React from 'react';
import {map} from 'lodash';
import timezone from '../../data/timezone';

class SignUpForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email:'',
            password:'',
            passwordConfimation:'',
            timezone:''
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
        this.props.OnSignUpRequest(this.state);
    }

    render() {

        const options = map( timezone, (val, key) => {
            return (
                <option key={val} value={val}>{key}</option>
            );
        });

        return (
            <form onSubmit={this.OnSubmit}>
                <h1>Join Our Community</h1>
                <div className="form-group">
                    <label htmlFor="username" className="control-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={this.OnChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="control-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={this.OnChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="control-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={this.OnChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="passwordConfimation" className="control-label">Password Confimation</label>
                    <input
                        type="password"
                        className="form-control"
                        name="passwordConfimation"
                        value={this.state.passwordConfimation}
                        onChange={this.OnChange}/>
                </div>

                 <div className="form-group">
                    <label htmlFor="timezone" className="control-label">Select Timezone</label>
                    <select
                        className="form-control"
                        name="timezone"
                        value={this.state.timezone}
                        onChange={this.OnChange}>
                            <option value="" disabled>Choose Your Timezone</option>
                            {options}
                        </select>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">Sign Up</button>
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
}

export default SignUpForm;