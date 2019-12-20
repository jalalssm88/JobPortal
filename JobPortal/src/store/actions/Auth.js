export default class Action {

    // create user 
    static CREATE_USER = "CREATE_USER";
    static CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
    static CREATE_USER_FAIL = "CREATE_USER_FAIL";

    // login user

    static LOGIN_USER = "LOGIN_USER";
    static LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
    static LOGIN_USER_FAIL = "LOGIN_USER_FAIL";
    static VERIFY_CODE_SUCCESS = "VERIFY_CODE_SUCCESS";


    static createUser(payload) {
        return {
            type: Action.CREATE_USER,
            payload
        };
    }

    static loginUser(payload) {
        return {
            type: Action.LOGIN_USER,
            payload
        };
    }

}