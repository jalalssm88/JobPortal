import { all, takeEvery } from 'redux-saga/effects';

import { AuthActions } from '../actions/';
import { createUser, loginUser } from './Auth';

export function* rootSaga() {
    yield all([
        //sagas will go here
        takeEvery(AuthActions.CREATE_USER, createUser),
        takeEvery(AuthActions.LOGIN_USER, loginUser),

    ]);
};
