export const types = {
    ADD_FLASH_MESSAGE: 'ADD_FLASH_MESSAGE',
    DELETE_FLASH_MESSAGE: 'DELETE_FLASH_MESSAGE'
}

export const OnAddFlashMessage = (message) => ({type: types.ADD_FLASH_MESSAGE, data: message});
export const OnDeleteFlashMessage = (id) => ({type: types.DELETE_FLASH_MESSAGE, data: id});