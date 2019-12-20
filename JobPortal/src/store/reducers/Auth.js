import { AuthActions } from '../actions/';

const INITIAL_STATE = {
    user: {},

}

function Reducer (state = INITIAL_STATE, action){
    switch(action.type){
        default:
            return{
                ...state
            }
    }
}

export default Reducer;
