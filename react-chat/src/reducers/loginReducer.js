
const loginReducer = (state, action) => {

    if (state === undefined) {
        return {
            user: null,
            loading: true,
            error: null
        }
    }
    switch (action.type) {
        case 'ATTEMPT_TO_AUTHORIZE':
            return {
                ...state.login,
                user: null,
                    loading: true,
                    error: null
            };

        case 'AUTHORIZE_SUCCESS':
            return {
                ...state.login,
                   user: action.payload,
                    loading: false,
                    error: null
            };

            case 'AUTHORIZE_ERROR':
            return {
                ...state.login,
                   user: null,
                    loading: false,
                    error: action.payload
            };


        default:
            return state.login;

    }
};

export default loginReducer;