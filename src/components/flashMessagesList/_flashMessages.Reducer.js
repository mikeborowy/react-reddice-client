import {types} from './_flashMessage.Actions';
import shortId from 'shortid';
import lodash from 'lodash';

export default(prevState = [], action = {}) => {

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
                //let messageObj = prevState.find( message => message.id == action.data );
                //let index = prevState.indexOf(messageObj);

                // return [
                //     ...prevState.slice(0, index),
                //     ...prevState.slice(index + 1)
                // ]

               return prevState.filter( message => message.id !== action.data);
            }

        default:
            return prevState;
    }
};