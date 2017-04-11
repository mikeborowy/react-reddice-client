import {types} from './_prelaoder.Actions';
import initialState from '../../store/initialState';

function actionsEndingWithSuccess(type) {
    return type.substring(type.length - 8) == '_SUCCESS';
}

export default (prevState = initialState.ajaxCallsInProgress, action) => {
    if (action.type == types.AJAX_CALL_START) {
        return prevState + 1;
    } else if (action.type == types.AJAX_CALL_ERROR || actionsEndingWithSuccess(action.type)) {
        return prevState - 1;
    }

    return prevState;
}