import React from 'react';
import {connect} from 'react-redux';
import {OnCreateEvent} from './_event.Actions';
import TextFieldGroup from '../common/TextFieldGroup';

class EventForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            errors: {},
            isLoading: false
        };

        this.onChange = this
            .onChange
            .bind(this);
        this.onSubmit = this
            .onSubmit
            .bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();


        console.log(this.state.title)

        this
            .props
            .OnCreateEvent(this.state.title);
    }

    render() {
        const {title, errors, isLoading} = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Create New Game Event</h1>

                <TextFieldGroup
                    field="title"
                    label="Event Title"
                    fieldName="title"
                    value={title}
                    onChange={this.onChange}
                    error={errors.title}/>

                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        );
    }
}

EventForm.propTypes = {
    OnCreateEvent: React.PropTypes.func.isRequired
};

export default connect(null, {OnCreateEvent})(EventForm);