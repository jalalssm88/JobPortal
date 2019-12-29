import { AuthActions } from "../actions/";
import HttpService from "../../commons/agent";
import { put, call, select } from "redux-saga/effects";
import { NavigationActions, StackActions } from 'react-navigation'
import NavigationServices from "../../services/NavigationServices";
import {AsyncStorage} from 'react-native';
import {showToast} from '../../config/utills';
export const getUser = (state) => state.Auth.createUser

export function* addExperience(action){
    let { payload } = action;
    console.log('payload in signup saga', payload)
    // const response = yield call(HttpService.postRequest, "user/signup", {Accept: "application/json",'Content-Type': 'application/json'}, payload)
    // console.log('experience', response)
    
}
export function* getExperience(action){
    let { payload } = action;
    console.log('payload in signup saga', payload)
    // const response = yield call(HttpService.postRequest, "user/signup", {Accept: "application/json",'Content-Type': 'application/json'}, payload)
    // console.log('experience', response)
    
}


export function* addEducation(action){
    let { payload } = action;
    console.log('payload in signup saga', payload)
    // const response = yield call(HttpService.postRequest, "user/signup", {Accept: "application/json",'Content-Type': 'application/json'}, payload)
    // console.log('experience', response)
    
}


export function* getEducation(action){
    let { payload } = action;
    console.log('payload in signup saga', payload)
    // const response = yield call(HttpService.postRequest, "user/signup", {Accept: "application/json",'Content-Type': 'application/json'}, payload)
    // console.log('experience', response)
    
}
