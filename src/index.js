import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './scss/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import allReducers from './reducers';
import { setCurrentUser, getCurrentUser } from './actions/authActions'
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';

const middleware = [thunk];

let store = createStore(allReducers, applyMiddleware(...middleware));

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);

  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  store.dispatch(getCurrentUser());
  // Check for expired token
  // const currentTime = Date.now() / 1000;
  // if (decoded.exp < currentTime) {
  //   // Logout user
  //   store.dispatch(logoutUser());
  //   // Clear current Profile
  //   store.dispatch(clearCurrentProfile());
  //   // Redirect to login
  //   window.location.href = '/login';
  // }
}


ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.getElementById('root'));
serviceWorker.unregister();
