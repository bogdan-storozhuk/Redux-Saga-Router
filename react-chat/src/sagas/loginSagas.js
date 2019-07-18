import axios from 'axios';
import { call, put, takeEvery, all, select } from 'redux-saga/effects';
import {  authorizeError, authorizeSuccess, attemptToAuthorize , authorize} from "../actions";


async function getData(url, data) {
    const result = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
      redirect: 'follow',
      referrer: 'client',
    });
  
    return result.ok;
  }

export function* authorizeSaga(action) {
    try {
        yield put(attemptToAuthorize());
        const userName = action.payload.userName;
        const password = action.payload.password;
        const user = yield call(axios.get, `http://localhost:3000/authorize/`,
        {
            params: {
                userName,
                 password
                },
            }            
         );

        yield put(authorizeSuccess(user.data));
    } catch (error) {
        yield put(authorizeError(error));
    }
}

function* watchAuthorize() {
    yield takeEvery('AUTHORIZE', authorizeSaga)
}

export default function* loginSagas() {
    yield all([
        watchAuthorize(),
    ])
};