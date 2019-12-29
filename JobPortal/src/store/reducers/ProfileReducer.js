import { ProfileActions } from '../actions/';

const INITIAL_STATE = {
    experience_data:[],
    education_data:[]
}

function Reducer (state = INITIAL_STATE, action){
    switch(action.type){
        // experience cases
        case ProfileActions.ADD_EXPERIENCE:
            return{
                ...state,
            }
        case ProfileActions.GET_EXPERIENCE:
            return{
                ...state, experience_data:action.payload
            }
      
        // education cases
        case ProfileActions.ADD_EDUCATION:
            return{
                ...state,
            }
        case ProfileActions.GET_EDUCATION:
            return{
                ...state, education_data:action.payload
            }
        default:
            return{
                ...state
            }
    }
}

export default Reducer;
