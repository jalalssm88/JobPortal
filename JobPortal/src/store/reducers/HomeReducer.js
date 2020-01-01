import { HomeAction } from '../actions/';

const INITIAL_STATE = {
    all_posted_jobs:[],
    isLoading:false
}

function Reducer (state = INITIAL_STATE, action){
    switch(action.type){
        // experience cases
        case HomeAction.GET_ALL_JOBS:
            return{
                ...state, isLoading:true
            }
        case HomeAction.GET_ALL_JOBS_SUCCESS:
            return{
                ...state, all_posted_jobs:action.payload, isLoading:false
            }

        default:
            return{
                ...state
            }
    }
}

export default Reducer;
