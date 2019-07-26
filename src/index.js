import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './scss/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import allReducers from './reducers';
import { Provider } from 'react-redux';
import { fetchPlaces } from './actions/fetchPlaces';

let store = createStore(allReducers, applyMiddleware(thunk));

store.dispatch(fetchPlaces());

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.getElementById('root'));
serviceWorker.unregister();
