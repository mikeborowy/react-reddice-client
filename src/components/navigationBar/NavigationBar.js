import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {OnLogOut} from '../login/_login.Actions';
import {OnClearFlashMessages} from '../flashMessagesList/_flashMessage.Actions';

class NavigationBar extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.onLogoutFn = this.onLogoutFn.bind(this);
    }

    onLogoutFn(evt) {
        evt.preventDefault();
        this.props.OnLogOut();
        this.props.OnClearFlashMessages();
    }

    render() {

        const {isAuthenticated} = this.props.login;

        const userLinks = (
            <ul className="nav navbar-nav navbar-right">
              <li>
                    <Link to="new-event">New Event</Link>
                </li>
                <li>
                    <a href="#" onClick={this.onLogoutFn}>Log Out</a>
                </li>
            </ul>
        )
        const guestLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <Link to="login">Login</Link>
                </li>
                <li>
                    <Link to="signup">Sign Up</Link>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">Red Dice</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        {isAuthenticated
                            ? userLinks
                            : guestLinks}
                    </div>
                </div>
            </nav>
        );
    }
}

NavigationBar.propTypes = {
    login: React.PropTypes.object.isRequired,
    OnLogOut: React.PropTypes.func.isRequired,
    OnClearFlashMessages: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({login: state.login});

// const mapDispatchToProps = (dispatch) => ({     onLogOut: () => dispatch(
// loginActions.OnLogOut()), });

export default connect(mapStateToProps, {OnLogOut, OnClearFlashMessages})(NavigationBar);