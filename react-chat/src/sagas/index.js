import { all } from 'redux-saga/effects';
import messageSagas from './messageSagas';
import loginSagas from './loginSagas';

export default function* rootSaga() {
    yield all([
        messageSagas(),
        loginSagas()
    ])
};