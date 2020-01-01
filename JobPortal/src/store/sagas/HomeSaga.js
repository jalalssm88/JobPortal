import { AuthActions, ProfileActions, DashboardAction, HomeAction } from "../actions/";
import HttpService from "../../commons/agent";
import { put, call, select } from "redux-saga/effects";
import { NavigationActions, StackActions } from 'react-navigation'
import NavigationServices from "../../services/NavigationServices";
import {AsyncStorage} from 'react-native';
import {showToast} from '../../config/utills';
export const getUser = (state) => state.Auth.currentUser

export function* getAllJobs(action){
    let { payload } = action;
    let user = yield select(getUser);
    let userId = user.userId;
    let token = user.token;
    const response = yield call(HttpService.getRequest, `jobs/get_all_posted_job`, { user_id: userId, access_token: token, 'Content-Type': 'application/json'}, payload)
    console.log('get posted job', response)
    if(response && response.status == 200){
        yield put({type:HomeAction.GET_ALL_JOBS_SUCCESS, payload:response.data})
    }
}