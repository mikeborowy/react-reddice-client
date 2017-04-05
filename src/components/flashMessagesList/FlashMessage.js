import React from 'react';
import classnames from 'classnames';

class FlashMessage extends React.Component{

    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick() {
        this.props.onDelete(this.props.message.id);
    }

    render(){

        let {id, type, text} = this.props.message;

        return(
            <div className={classnames('alert', {
                'alert-success': type == 'success',
                'alert-danger': type == 'error'
            })}>
               {text}
                <button onClick={this.onDeleteClick} className="close"><span>&times;</span></button>
            </div>
        )
    }
}

FlashMessage.propTypes = {
    message: React.PropTypes.object.isRequired,
    onDelete: React.PropTypes.func.isRequired
}

export default FlashMessage;