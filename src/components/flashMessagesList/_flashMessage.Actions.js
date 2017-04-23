export const types = {
    ADD_FLASH_MESSAGE: 'ADD_FLASH_MESSAGE',
    DELETE_FLASH_MESSAGE: 'DELETE_FLASH_MESSAGE',
    CLEAR_FLASH_MESSAGES: 'CLEAR_FLASH_MESSAGES'
}

export const OnAddFlashMessage = (message) => ({type: types.ADD_FLASH_MESSAGE, data: message});
export const OnDeleteFlashMessage = (id) => ({type: types.DELETE_FLASH_MESSAGE, data: id});
export const OnClearFlashMessages = () => ({type: types.CLEAR_FLASH_MESSAGES});