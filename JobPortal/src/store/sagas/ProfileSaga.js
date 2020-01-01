import { AuthActions, ProfileActions } from "../actions/";
import HttpService from "../../commons/agent";
import { put, call, select } from "redux-saga/effects";
import { NavigationActions, StackActions } from 'react-navigation'
import NavigationServices from "../../services/NavigationServices";
import {AsyncStorage} from 'react-native';
import {showToast} from '../../config/utills';
export const getUser = (state) => state.Auth.currentUser

// profile pic
// export function* addExperience(action){
//     let { payload } = action;
//     let user = yield select(getUser);
//     let userId = user.userId;
//     let token = user.token;
//     console.log('payload in signup saga', payload)
//     const response = yield call(HttpService.postRequest, "experience/add_experience", { user_id: userId, access_token: token, 'Content-Type': 'application/json'}, payload)
//     console.log('add experience', response)
//     if(response && response.status == 200){
//         yield put(ProfileActions.getExperience())
//         NavigationServices.goBack(null)
//     }
// }
// export function* getExperience(action){
//     let { payload } = action;
//     let user = yield select(getUser);
//     let userId = user.userId;
//     let token = user.token;
//     const response = yield call(HttpService.getRequest, `experience/get_experience/${userId}`, { user_id: userId, access_token: token, 'Content-Type': 'application/json'}, payload)
//     console.log('get experience', response)
//     if(response && response.status == 200){
//         yield put({type:ProfileActions.GET_EXPERIENCE_SUCCESS, payload:response.data})
//         yield put(ProfileActions.getEducation());
//     }
    
// }

// experience
export function* addExperience(action){
    let { payload } = action;
    let user = yield select(getUser);
    let userId = user.userId;
    let token = user.token;
    console.log('payload in signup saga', payload)
    const response = yield call(HttpService.postRequest, "experience/add_experience", { user_id: userId, access_token: token, 'Content-Type': 'application/json'}, payload)
    console.log('add experience', response)
    if(response && response.status == 200){
        yield put(ProfileActions.getExperience())
        NavigationServices.goBack(null)
    }
}
export function* getExperience(action){
    let { payload } = action;
    let user = yield select(getUser);
    let userId = user.userId;
    let token = user.token;
    const response = yield call(HttpService.getRequest, `experience/get_experience/${userId}`, { user_id: userId, access_token: token, 'Content-Type': 'application/json'}, payload)
    console.log('get experience', response)
    if(response && response.status == 200){
        yield put({type:ProfileActions.GET_EXPERIENCE_SUCCESS, payload:response.data})
        yield put(ProfileActions.getEducation());
    }
    
}

//education
export function* addEducation(action){
    let { payload } = action;
    let user = yield select(getUser);
    let userId = user.userId;
    let token = user.token;
    const response = yield call(HttpService.postRequest, "education/add_education", { user_id: userId, access_token: token, 'Content-Type': 'application/json'}, payload)
    console.log('add eudcation', response)
    if(response && response.status == 200){
        yield put(ProfileActions.getEducation())
        NavigationServices.goBack(null)
    }
}
export function* getEducation(action){
    let { payload } = action;
    let user = yield select(getUser);
    let userId = user.userId;
    let token = user.token;
    const response = yield call(HttpService.getRequest, `education/get_education/${userId}`, { user_id: userId, access_token: token, 'Content-Type': 'application/json'}, payload)
    console.log('get education', response)
    if(response && response.status == 200){
        yield put({type:ProfileActions.GET_EDUCATION_SUCCESS, payload:response.data})
        yield put(ProfileActions.getSkills())
    }
}

//skills
export function* addSkills(action){
    let { payload } = action;
    let user = yield select(getUser);
    let userId = user.userId;
    let token = user.token;
    const response = yield call(HttpService.postRequest, "skills/add_skills", { user_id: userId, access_token: token, 'Content-Type': 'application/json'}, payload)
    console.log('add skills', response)
    if(response && response.status == 200){
        yield put(ProfileActions.getSkills())
        NavigationServices.goBack(null)
    }
}
export function* getSkills(action){
    let { payload } = action;
    let user = yield select(getUser);
    let userId = user.userId;
    let token = user.token;
    const response = yield call(HttpService.getRequest, `skills/get_skills/${userId}`, { user_id: userId, access_token: token, 'Content-Type': 'application/json'}, payload)
    console.log('get skills', response)
    if(response && response.status == 200){
        yield put({type:ProfileActions.GET_SKILLS_SUCCESS, payload:response.data})
        yield put(ProfileActions.getLanguage());
    }
}

//language
export function* addLanguage(action){
    let { payload } = action;
    let user = yield select(getUser);
    let userId = user.userId;
    let token = user.token;
    const response = yield call(HttpService.postRequest, "language/add_language", { user_id: userId, access_token: token, 'Content-Type': 'application/json'}, payload)
    console.log('add language', response)
    if(response && response.status == 200){
        yield put(ProfileActions.getLanguage())
        NavigationServices.goBack(null)
    }
}
export function* getLanguage(action){
    let { payload } = action;
    let user = yield select(getUser);
    let userId = user.userId;
    let token = user.token;
    const response = yield call(HttpService.getRequest, `language/get_language/${userId}`, { user_id: userId, access_token: token, 'Content-Type': 'application/json'}, payload)
    console.log('get language', response)
    if(response && response.status == 200){
        yield put({type:ProfileActions.GET_LANGUAGE_SUCCESS, payload:response.data})
    }
}