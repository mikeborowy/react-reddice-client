import React from 'react';
import {connect} from 'react-redux';
import FlashMessage from './FlashMessage';
import * as actions from './_flashMessage.Actions';

class FlashMessagesList extends React.Component {
    render() {

        const flashMessageComp = this.props.messages.map( msg => {
            return(
                <FlashMessage key={msg.id} message={msg} onDelete={this.props.onDeleteFlashMessage}/>
            );
        });

        return (
            <div>
                {flashMessageComp}
            </div>
        );
    }
}

FlashMessagesList.propTypes = {
    messages: React.PropTypes.array.isRequired,
    onDeleteFlashMessage: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return ({
        messages: state.flashMessages
    });
};

const mapDispatchToProps = (dispatch) => {
    return {
        // actions: bindActionCreators(actions, dispatch)
       onDeleteFlashMessage: (id) => dispatch(actions.OnDeleteFlashMessage(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessagesList);