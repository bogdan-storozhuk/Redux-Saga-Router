import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { fetchMessages, messagesRequested, messagesLoaded, messagesError, 
    addMessage,
    startAddMessage,
    messageAddedError,
    messageAdded ,
    messageRemoved,
    removeMessage,
    removeMessageRequest,
    removeMessageError  } from "../actions";

export function* fetchMessagesSaga() {
    try {
        yield put(messagesRequested());
       
        const messages = yield call(axios.get, `http://localhost:3000/messages`);
        yield put(messagesLoaded(messages.data));
    } catch (error) {
        yield put(messagesError(error));
    }
}

function* watchFetchMessages() {
    yield takeEvery('FETCH_MESSAGES', fetchMessagesSaga)
}


export function* addMessageSaga(action) {
    try {
        yield put(startAddMessage());
        const message = action.payload;
         yield call(axios.post, `http://localhost:3000/messages`,   {
                    message
            });
           

        yield put(messageAdded());
        const messages = yield call(axios.get, `http://localhost:3000/messages`);
        yield put(messagesLoaded(messages.data));
    } catch (error) {
        yield put(messageAddedError(error));
    }
}

function* watchAddMessage() {
    yield takeEvery('ADD_MESSAGE', addMessageSaga)
}

function* removeMessageSaga(action){
    try {
        yield put(removeMessageRequest());
        const id = action.payload;
         yield call(axios.delete, `http://localhost:3000/messages/${id}`);
           

        yield put(messageRemoved());
        const messages = yield call(axios.get, `http://localhost:3000/messages`);
        yield put(messagesLoaded(messages.data));
    } catch (error) {
        yield put(removeMessageError(error));
    }
}

 function* watchRemoveUser() {
	yield takeEvery('REMOVE_MESSAGE', removeMessageSaga)
 }

export default function* messageSagas() {
    yield all([
        watchFetchMessages(),
        watchAddMessage(),
        watchRemoveUser()
    ])
};