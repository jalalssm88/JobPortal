import { combineReducers } from 'redux'
import AuthReducer from './Auth';
import ProfileReducer from './ProfileReducer';
import DashboardReducer from './DashboardReducer';
import HomeReducer from './HomeReducer';

const rootReducer = combineReducers({
    Auth: AuthReducer,
    Profile: ProfileReducer,
    Dashboard: DashboardReducer,
    Home:HomeReducer
})

export default rootReducer;
