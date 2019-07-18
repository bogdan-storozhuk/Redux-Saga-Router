

const messageReducer = (state, action) => {
    if (state === undefined) {
        return {
            messages: [],
            loading: true,
            error: null,
            isEditPopupShown: false,
            editingMessage: null
        }
    }
    switch (action.type) {

        case "START_ADD_MESSAGE":
            return{
                ...state.messages,
                loading:true,
                error: null
            };

            case "AUTHORIZE_ERROR":
                return{
                    ...state.messages,
                    loading:false,
                    error: action.payload
                }
            
        case 'FETCH_MESSAGES_REQUEST':
            return {
                ...state.messages,
                messages: [],
                    loading: true,
                    error: null
            };

        case 'FETCH_MESSAGES_SUCCESS':
            return {
                ...state.messages,
                 messages: action.payload,
                    loading: false,
                    error: null
            };

        case 'FETCH_MESSAGES_FAILURE':
            return {
                ...state.messages,
                messages: [],
                    loading: false,
                    error: action.payload
            };


        case "REMOVE_MESSAGE_REQUEST": 
        return{
            ...state.messages,
            loading: true,
        }

        case "REMOVE_MESSAGE_ERROR":
            return{
                ...state.messages,
                messages: [],
                    loading: false,
                    error: action.payload
            }
            case "MESSAGE_REMOVED" :{
                return{
                    ...state.messages,
                        loading: false,
                }
            }
            
            
        case 'MESSAGE_ADDED':
            return {
                ...state.messages,
               loading: false,
            };

        case 'MESSAGE_REMOVED':
            return {
                ...state.messages,
                messages: [...state.messages.filter(item => item.id !== action.payload)]
            }

            case 'EDIT_MESSAGE_POPUP_SHOWED':
                return {
                    ...state.messages,
                    isEditPopupShown: true,
                }

                case 'EDIT_MESSAGE_POPUP_HIDDEN':
                    return {
                        ...state.messages,
                        isEditPopupShown: false,
                        editingMessage: null,
                    }
                    case 'GET_EDITING_MESSAGE':
                        const message = state.messages.find(item => item.id === action.payload);
                        return {
                            ...state.messages,
                            editingMessage: message
                        }
                        case 'MESSAGE_EDITED':
                            const newMessage = action.payload;
                            const index = state.messages.findIndex(item => item.id === newMessage.id);

                            return {
                                ...state.messages,
                                editingMessage: null,
                                    messages: [...state.messages.slice(0, index),
                                        newMessage,
                                        ...state.messages.slice(index + 1)
                                    ]
                            }

                            default:
                                return state.messages;



    }
};

export default messageReducer;