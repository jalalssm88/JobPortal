import { combineReducers } from 'redux'
import AuthReducer from './Auth';

const rootReducer = combineReducers({
    Auth: AuthReducer,
})

export default rootReducer;
