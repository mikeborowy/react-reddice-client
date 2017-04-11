import validator from 'validator';
import lodash from 'lodash';

export default function loginValidation(data) {

    let errors = {};

    if (validator.isNull(data.identifier)) {
        errors.identifier = 'This field is required';
    }

    if (validator.isNull(data.password)) {
        errors.password = 'This field is required';
    }

    return {
        errors,
        isValid: lodash.isEmpty(errors)
    };
}
