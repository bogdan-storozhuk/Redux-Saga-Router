const attemptToAuthorize = () => {
    return {
        type: 'ATTEMPT_TO_AUTHORIZE',       
    }
}

const authorizeSuccess = (user) => {
    return {
        type: 'AUTHORIZE_SUCCESS',
        payload: user,
    }
}

const authorizeError = (error) => {
    return {
        type: 'AUTHORIZE_ERROR',
        payload: error,
    }
}

const authorize =(userName, password) => {
    return {
        type:'AUTHORIZE',
        payload:{
            userName, 
            password
        }
    }
}

export {
    authorizeError,
    authorizeSuccess,
    attemptToAuthorize,
    authorize
};