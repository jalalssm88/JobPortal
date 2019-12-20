export default class Action {

    // create user 
    static CREATE_USER = "CREATE_USER";
    static CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
    static CREATE_USER_FAIL = "CREATE_USER_FAIL";

    static createUser(payload) {
        return {
            type: Action.CREATE_USER,
            payload
        };
    }

}