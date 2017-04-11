import validator from 'validator';
import lodash from 'lodash';

export default function signupValidation (data){

    let errors = {};

    if (validator.isNull(data.username ? data.username: '')) {
        errors.username = 'This field is required';
    }
    if (validator.isNull(data.email ? data.email: '')) {
        errors.email = 'This field is required';
    }
    if (!validator.isEmail(data.email? data.email: '')) {
        errors.email = 'Email is invalid';
    }
    if (validator.isNull(data.password)) {
        errors.password = 'This field is required';
    }
    if (validator.isNull(data.passwordConfirmation)) {
        errors.passwordConfirmation = 'This field is required';
    }
    if (!validator.equals(data.password, data.passwordConfirmation)) {
        errors.password = 'Passwords must match';
    }
    if (validator.isNull(data.timezone)) {
        errors.timezone = 'Timezone is required';
    }
    return {errors, isValid: lodash.isEmpty(errors)};
}
