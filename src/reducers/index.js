import {combineReducers} from 'redux';
import places from './places';
	 	
const allReducers = combineReducers({
	places: places
}); 

export default allReducers;