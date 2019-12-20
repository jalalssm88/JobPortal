import { AuthActions } from '../actions/';

const INITIAL_STATE = {
    currentUser: {},
    signupLoader:false,
    loginLoader:false,

}

function Reducer (state = INITIAL_STATE, action){
    switch(action.type){
        // signup cases
        case AuthActions.CREATE_USER:
            return{
                ...state, signupLoader:true
            }
        case AuthActions.CREATE_USER_SUCCESS:
            return{
                ...state, signupLoader:false
            }
        case AuthActions.CREATE_USER_FAIL:
            return{
                ...state, signupLoader:false
            }

        // login cases
        case AuthActions.LOGIN_USER_DATA:
            return{
                ...state, loginLoader:true
            }
        case AuthActions.LOGIN_USER_DATA_SUCESS:
            return { 
                ...state, loginLoader:false
            };
        case AuthActions.LOGIN_USER_DATA_FAIL:
            return{
                ...state, loginLoader:false
            }
        case AuthActions.VERIFY_CODE_SUCCESS:
            return { ...state, currentUser:action.payload }
        default:
            return{
                ...state
            }
    }
}

export default Reducer;
