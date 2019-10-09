import axios from 'axios';
import jwt_decode from 'jwt-decode'
import setAuthToken from '../utils/setAuthToken';
import { 
  SET_CURRENT_USER,
  UNSET_CURRENT_USER,
  GET_CURRENT_USER
} from './types';

export const loginUser = userData => dispatch => {
	axios.post('http://localhost:4000/api/user/login', userData)
	.then(res => {
		const token = res.data;

		// Add token to localStorage
		localStorage.setItem('jwtToken', token);

		setAuthToken(token);

		const decoded = jwt_decode(token);
// console.log(res.data)
// console.log(decoded)
		 dispatch(setCurrentUser(decoded));
     dispatch(getCurrentUser());
	})
}

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');

  // Redirect to login page
   window.location.href = '/login';

  // Remove auth header for future requests
  setAuthToken(false);

  // Set current user to {} which will set isAuthenticated to false
  dispatch(unsetCurrentUser({}));
};

export const unsetCurrentUser = () => {
  return {
    type: UNSET_CURRENT_USER
  };
};


export const getCurrentUser = () => dispatch => {
  axios.get(`http://localhost:4000/api/profile/`)
    .then(res => {
      dispatch({
        type: GET_CURRENT_USER,
        payload: res.data
      });
    });
}; 