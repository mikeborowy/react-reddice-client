import React, {Component} from 'react';
import {connect} from 'react-redux';
import {OnAddFlashMessage} from '../flashMessagesList/_flashMessage.Actions';

export default function (ComposedComponnet) {

    class AuthWrapper extends Component {

        componentWillMount(){

            if (!this.props.isAuthenticated) {

                 this.props.OnAddFlashMessage({
                     type: 'error', 
                     text: 'You need to login first'
                    });
                 this.context.router.push("/login");
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.isAuthenticated){
                this.context.router.push("/");
            }
        }

        render() {
            return (
                <ComposedComponnet {...this.props}/>
            );
        }
    }

    AuthWrapper.propTypes ={
        isAuthenticated: React.PropTypes.bool.isRequired,
        OnAddFlashMessage: React.PropTypes.func.isRequired
    };

    AuthWrapper.contextTypes ={
        router: React.PropTypes.object.isRequired
    }

    const mapStateToProps = (state) =>({
        isAuthenticated: state.login.isAuthenticated
    });

    return connect(mapStateToProps, {OnAddFlashMessage})(AuthWrapper);
}
