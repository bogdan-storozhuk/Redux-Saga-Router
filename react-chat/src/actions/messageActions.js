const messagesLoaded = (messages) => {
    return {
        type: 'FETCH_MESSAGES_SUCCESS',
        payload: messages,
    }
}

const messagesRequested = () => {
    return {
        type: 'FETCH_MESSAGES_REQUEST',
    }
}

const messagesError = (error) => {
    return {
        type: 'FETCH_MESSAGES_FAILURE',
        payload: error,
    }
}



const showEditPopup =() => {
    return {
        type: "EDIT_MESSAGE_POPUP_SHOWED"
    }
}

const hideEditPopup =() => {
    return {
        type: "EDIT_MESSAGE_POPUP_HIDDEN"
    }
}

const getEditingMessage = (id) => {
    return {
        type: "GET_EDITING_MESSAGE",
        payload: id,
    }
}

const messageEdited = (message) => {
    return {
        type: "MESSAGE_EDITED",
        payload: message,
    }
}

const fetchMessages = () => {
    return {
        type: "FETCH_MESSAGES",
    }
}

const addMessage = (message) => {
    return{
        type:"ADD_MESSAGE",
        payload:message
    }
}



const startAddMessage = () => {
    return {
        type:"START_ADD_MESSAGE",
    }
}

const messageAdded = () => {
    return {
        type: 'MESSAGE_ADDED'
    }
}

const messageAddedError = (error) => {
    return {
        type: 'MESSAGE_ADDED_ERROR',
        payload: error
    }
}

const removeMessage =(messageId) => {
    return {
        type: "REMOVE_MESSAGE",
        payload: messageId,
    }
}

const removeMessageRequest =() => {
    return {
        type: "REMOVE_MESSAGE_REQUEST",
    }
}

const removeMessageError =() => {
    return {
        type: "REMOVE_MESSAGE_ERROR",
    }
}


const messageRemoved = () => {
    return {
        type: "MESSAGE_REMOVED",
    }
}



export {
    messagesLoaded,
    messagesRequested,
    messagesError,
    fetchMessages, 
    showEditPopup,
    hideEditPopup,
    getEditingMessage,
    messageEdited,
    addMessage,
    startAddMessage,
    messageAddedError,
    messageAdded,
    messageRemoved,
    removeMessage,
    removeMessageRequest,
    removeMessageError
};