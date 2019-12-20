import { AuthActions } from "../actions/";
import HttpService from "../../commons/agent";
import { put, call, select } from "redux-saga/effects";
import { NavigationActions, StackActions } from 'react-navigation'
import NavigationServices from "../../services/NavigationServices";
import {AsyncStorage} from 'react-native'

export function* createUser(action){
    let { payload } = action;
    console.log('payload in signup saga', payload)
    const response = yield call(HttpService.postRequest, "user/signup", {Accept: "application/json",'Content-Type': 'application/json'}, payload)
    console.log('signup', response)
 
    if (response) {
        yield put({ type: AuthActions.CREATE_USER_SUCCESS, payload:response.data })
        NavigationServices.navigate("LoginScreen")
    }else if(response == undefined){
        // showToast("Somthing went wrong")
        yield put({ type: AuthActions.CREATE_USER_FAIL})

    }
}

export function* loginUser(action) {
    let { payload } = action;
    console.log('payload in login', payload)
    const response = yield call(HttpService.postRequest, "user/login", {Accept: "application/json",'Content-Type': 'application/json'}, payload)
    console.log(response, 'login')
    if (response && response.status == 200) {
        try{
            AsyncStorage.setItem("user", JSON.stringify(response.data))
        }catch{
        }
        if(response.data.role == "student"){
            yield put({ type: AuthActions.LOGIN_USER_SUCCESS, payload:response.data})
            yield put({ type: AuthActions.VERIFY_CODE_SUCCESS, payload: response.data })
            NavigationServices.reset("TabsStack2")
        }else{
            yield put({ type: AuthActions.LOGIN_USER_SUCCESS, payload:response.data})
            yield put({ type: AuthActions.VERIFY_CODE_SUCCESS, payload: response.data })
            NavigationServices.reset("TabsStack1")
        }

    }else if(response == undefined){
        // showToast("Something went Wrong")
        yield put({ type: AuthActions.LOGIN_USER_DATA_FAIL})
    }else if(response && response.status == 401){
        yield put({ type: AuthActions.LOGIN_USER_FAIL})
        // showToast(response.data.message)
    }
   
}