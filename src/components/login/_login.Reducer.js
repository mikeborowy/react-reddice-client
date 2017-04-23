import {types} from './_login.Actions';
import isEmpty from 'lodash/isEmpty';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default(prevState = initialState, action = {}) => {

    switch (action.type) {
        case types.SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.data),
                user: action.data
            }
        default:
            return prevState;
    }
};
