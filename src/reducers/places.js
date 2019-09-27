import { 
    FETCH_PLACES,
    FETCH_PLACE,
    ADD_PLACE,
    DELETE_PLACE,
    FILTER_PLACES
} from '../actions/types';

const initialState = {
  places: [],
  place: {},
  filtered: []
  // loading: false
};

const places = (state = initialState, action) => {
	switch (action.type) {
     	case FETCH_PLACES:
      		return {
      			...state,
	      		places: action.payload 
      		};
      	case FETCH_PLACE:
      		return {
      			...state,
      			place: action.payload
      		}
        case ADD_PLACE:
          return {
            ...state,
            places: [action.payload, ...state.places]
          }
      	case DELETE_PLACE:
      		return {
            ...state,
            places: state.places.filter(place => place.id !== action.payload) 
          }
        case FILTER_PLACES:
          return {
            ...state,
            filtered: action.payload
          }
    	default:
      		return state;
  	}
}

export default places;
