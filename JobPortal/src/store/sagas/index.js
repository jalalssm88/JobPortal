import { all, takeEvery } from 'redux-saga/effects';

import { AuthActions } from '../actions/';
import { createUser } from './Auth';

export function* rootSaga() {
    yield all([
        //sagas will go here
        takeEvery(AuthActions.CREATE_USER, createUser),
    ]);
};
