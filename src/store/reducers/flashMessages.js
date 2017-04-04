import * as types from '../../constants/actionTypes';
import shortId from 'shortid';

export default(prevState = [], action = {}) => {

    console.log(action)

    switch (action.type) {
        case types.ADD_FLASH_MESSAGE:
            return [
                ...prevState,
               {
                   id: shortId.generate(),
                   type: action.data.type,
                   text: action.data.text
               }
            ]
        default:
            return prevState;
    }
};