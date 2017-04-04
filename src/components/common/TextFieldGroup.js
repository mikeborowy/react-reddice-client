import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({fieldName, value, label, error, type, onChange}) => {
    return (
            <div className={classnames("form-group", {'has-error': error})}>
                <label htmlFor={fieldName} className="control-label">{label}</label>
                <input
                    type="text"
                    className="form-control"
                    name={fieldName}
                    value={value}
                    onChange={onChange}/> 
                {error && <span className="help-block">{error}</span>}
        </div>
    );
};

TextFieldGroup.propTypes = {
    fieldName: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    type: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
};

TextFieldGroup.defaultProps ={
    type: 'text'
}

export default TextFieldGroup;