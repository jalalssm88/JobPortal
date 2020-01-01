import { all, takeEvery } from 'redux-saga/effects';

import { AuthActions, ProfileActions, DashboardAction , HomeAction} from '../actions/';
import { createUser, loginUser } from './Auth';
import { addExperience, getExperience, addEducation, getEducation, addSkills, getSkills, addLanguage, getLanguage} from './ProfileSaga'
import {postJob, getJobs} from './DashboardSaga';
import { getAllJobs} from './HomeSaga';
export function* rootSaga() {
    yield all([
        //sagas will go here
        takeEvery(AuthActions.CREATE_USER, createUser),
        takeEvery(AuthActions.LOGIN_USER, loginUser),
        
        takeEvery(ProfileActions.ADD_EXPERIENCE, addExperience),
        takeEvery(ProfileActions.GET_EXPERIENCE, getExperience),

        takeEvery(ProfileActions.ADD_EDUCATION, addEducation),
        takeEvery(ProfileActions.GET_EDUCATION, getEducation),

        takeEvery(ProfileActions.ADD_SKILLS, addSkills),
        takeEvery(ProfileActions.GET_SKILLS, getSkills),

        takeEvery(ProfileActions.ADD_LANGUAGE, addLanguage),
        takeEvery(ProfileActions.GET_LANGUAGE, getLanguage),

        takeEvery(DashboardAction.POST_JOB, postJob),
        takeEvery(DashboardAction.GET_JOBS, getJobs),

        takeEvery(HomeAction.GET_ALL_JOBS, getAllJobs)
    ]);
};
