import { combineReducers } from 'redux'
import AuthReducer from './Auth';
import ProfileReducer from './ProfileReducer';

const rootReducer = combineReducers({
    Auth: AuthReducer,
    Profile: ProfileReducer
})

export default rootReducer;
