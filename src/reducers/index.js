import {combineReducers} from 'redux';
import places from './places';
import authReducer from './authReducer';
	 	
const allReducers = combineReducers({
	auth: authReducer,
	places: places
}); 

export default allReducers;