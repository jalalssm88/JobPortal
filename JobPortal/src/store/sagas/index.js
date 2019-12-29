import { all, takeEvery } from 'redux-saga/effects';

import { AuthActions, ProfileActions } from '../actions/';
import { createUser, loginUser } from './Auth';
import { addExperience, getExperience, addEducation, getEducation} from './ProfileSaga'

export function* rootSaga() {
    yield all([
        //sagas will go here
        takeEvery(AuthActions.CREATE_USER, createUser),
        takeEvery(AuthActions.LOGIN_USER, loginUser),
        
        takeEvery(ProfileActions.ADD_EXPERIENCE, addExperience),
        takeEvery(ProfileActions.GET_EXPERIENCE, getExperience),

        takeEvery(ProfileActions.ADD_EDUCATION, addEducation),
        takeEvery(ProfileActions.GET_EDUCATION, getEducation),



    ]);
};
