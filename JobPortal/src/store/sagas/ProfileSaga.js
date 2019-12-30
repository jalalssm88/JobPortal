import { AuthActions } from "../actions/";
import HttpService from "../../commons/agent";
import { put, call, select } from "redux-saga/effects";
import { NavigationActions, StackActions } from 'react-navigation'
import NavigationServices from "../../services/NavigationServices";
import {AsyncStorage} from 'react-native';
import {showToast} from '../../config/utills';
export const getUser = (state) => state.Auth.currentUser

export function* addExperience(action){
    let { payload } = action;
    let user = yield select(getUser);
    let userId = user.userId;
    let token = user.token;
    console.log('payload in signup saga', payload)
    const response = yield call(HttpService.postRequest, "experience/add_experience", { user_id: userId, access_token: token, 'Content-Type': 'application/json'}, payload)
    console.log('experience', response)
    
}
export function* getExperience(action){
    // let { payload } = action;
    // let user = yield select(getUser);
    // let userId = user.userId;
    // let token = user.token;
    // const response = yield call(HttpService.postRequest, "education/add_education", { user_id: userId, access_token: token, 'Content-Type': 'application/json'}, payload)
    // console.log('eudcation', response)
    
}


export function* addEducation(action){
    let { payload } = action;
    let user = yield select(getUser);
    let userId = user.userId;
    let token = user.token;
    const response = yield call(HttpService.postRequest, "education/add_education", { user_id: userId, access_token: token, 'Content-Type': 'application/json'}, payload)
    console.log('eudcation', response)
}


export function* getEducation(action){
    let { payload } = action;
    console.log('payload in signup saga', payload)
    // const response = yield call(HttpService.postRequest, "user/signup", {Accept: "application/json",'Content-Type': 'application/json'}, payload)
    // console.log('experience', response)
    
}
