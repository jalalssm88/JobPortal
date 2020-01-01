import { ProfileActions } from '../actions/';

const INITIAL_STATE = {
    experience_data:[],
    education_data:[],
    skills_data:[],
    language_data:[],
    isLoading:false
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
                ...state, isLoading:true
            }
        case ProfileActions.GET_EXPERIENCE_SUCCESS:
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
                ...state, isLoading:true
            }
        case ProfileActions.GET_EDUCATION_SUCCESS:
            return{
                ...state, education_data:action.payload
            }

        // skills cases
        case ProfileActions.ADD_SKILLS:
            return{
                ...state,
            }
        case ProfileActions.GET_SKILLS:
            return{
                ...state, isLoading:true
            }
        case ProfileActions.GET_SKILLS_SUCCESS:
            return{
                ...state, skills_data:action.payload
            }

        // language cases
        case ProfileActions.ADD_LANGUAGE:
            return{
                ...state,
            }
        case ProfileActions.GET_LANGUAGE:
            return{
                ...state, isLoading:true
            }
        case ProfileActions.GET_LANGUAGE_SUCCESS:
            return{
                ...state, language_data:action.payload, isLoading:false
            }
        default:
            return{
                ...state
            }
    }
}

export default Reducer;
