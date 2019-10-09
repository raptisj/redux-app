import { 
  SET_CURRENT_USER,
  UNSET_CURRENT_USER, 
  GET_CURRENT_USER
} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {},
  current: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
      case UNSET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: action.payload
      };
      case GET_CURRENT_USER:
      return {
        ...state,
        current: action.payload
      };
    default:
      return state;
  }
}