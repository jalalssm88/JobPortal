import { AuthActions, ProfileActions, DashboardAction } from "../actions/";
import HttpService from "../../commons/agent";
import { put, call, select } from "redux-saga/effects";
import { NavigationActions, StackActions } from 'react-navigation'
import NavigationServices from "../../services/NavigationServices";
import {AsyncStorage} from 'react-native';
import {showToast} from '../../config/utills';
export const getUser = (state) => state.Auth.currentUser


export function* postJob(action){
    let { payload } = action;
    let user = yield select(getUser);
    let userId = user.userId;
    let token = user.token;
    let userName = user.name;
    payload['company'] = userName
    const response = yield call(HttpService.postRequest, "jobs/post_job", { user_id: userId, access_token: token, 'Content-Type': 'application/json'}, payload)
    console.log('post job', response)
    if(response && response.status == 200){
        yield put(DashboardAction.getJobs());
        NavigationServices.goBack(null)
    }
}

export function* getJobs(action){
    let { payload } = action;
    let user = yield select(getUser);
    let userId = user.userId;
    let token = user.token;
    const response = yield call(HttpService.getRequest, `jobs/get_posted_job/${userId}`, { user_id: userId, access_token: token, 'Content-Type': 'application/json'}, payload)
    console.log('get posted job', response)
    if(response && response.status == 200){
        yield put({type:DashboardAction.GET_JOBS_SUCCESS, payload:response.data})
    }
}