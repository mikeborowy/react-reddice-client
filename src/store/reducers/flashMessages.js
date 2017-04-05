import * as types from '../../constants/actionTypes';
import shortId from 'shortid';
import lodash from 'lodash';

export default(prevState = [], action = {}) => {

    console.log(prevState)

    switch (action.type) {
        case types.ADD_FLASH_MESSAGE:
            {
                let newMessage = {
                    id: shortId.generate(),
                    type: action.data.type,
                    text: action.data.text
                }

                return [
                    ...prevState,
                    Object.assign({}, newMessage)
                ];
            }

        case types.DELETE_FLASH_MESSAGE:
            {
                let obj = prevState.find( item => item.id == action.data );
                let index = prevState.indexOf(obj);

                return [
                    ...prevState.slice(0, index),
                    ...prevState.slice(index + 1)
                ]
            }

        default:
            return prevState;
    }
};