import * as types from '../constants/actionTypes';

export const OnAddFlashMessage = (message) => ({type: types.ADD_FLASH_MESSAGE, data: message});
export const OnDeleteFlashMessage = (id) => ({type: types.DELETE_FLASH_MESSAGE, data:id});