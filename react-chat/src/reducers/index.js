
import messageReducer from './message-reducer';
import loginReducer from './loginReducer';



const reducer = (state, action) => {

    return {
        messages: messageReducer(state, action),
        login: loginReducer(state, action)
    };
}

export default reducer;