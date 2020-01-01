import { ProfileActions, DashboardAction } from '../actions/';

const INITIAL_STATE = {
    posted_jobs:[],
    isLoading:false
}

function Reducer (state = INITIAL_STATE, action){
    switch(action.type){
        // experience cases
        case DashboardAction.POST_JOB:
            return{
                ...state, 
            }
        case DashboardAction.GET_JOBS:
            return{
                ...state, isLoading:true
            }
        case DashboardAction.GET_JOBS_SUCCESS:
            return{
                ...state, posted_jobs:action.payload, isLoading:false
            }

        default:
            return{
                ...state
            }
    }
}

export default Reducer;
