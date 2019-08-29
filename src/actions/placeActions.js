import axios from 'axios';

import {
	FETCH_PLACES,
	FETCH_PLACE,
	ADD_PLACE,
	DELETE_PLACE
} from './types';

export const fetchPlaces = () => dispatch => {
	axios.get('http://localhost:3004/places')
	.then((res) => {
		dispatch({
			type: FETCH_PLACES,
			payload: res.data 
		});
	})
	.catch(function (error) {
		console.log(error);
	})
}

export const fetchPlace = (id) => dispatch => {
	axios.get(`http://localhost:3004/places/${id}`)
	.then((res) => {
		dispatch({
			type: FETCH_PLACE,
			payload: res.data 
		});
	})
	.catch(function (error) {
		console.log(error);
	})
}

export const addPlace = placeData => dispatch => {
	axios.post('http://localhost:3004/places/', placeData)
	.then((res) => {
		dispatch({
			type: ADD_PLACE,
			payload: res.data 
		});
	})
	.catch(function (error) {
		console.log(error);
	})
}

export const deletePlace = id => dispatch => {
	axios.delete(`http://localhost:3004/places/${id}`)
	.then((res) => {
		dispatch({
			type: DELETE_PLACE,
			payload: res.data 
		});
	})
	.catch(function (error) {
		console.log(error);
	})
}

export const addComment = (placeId, commentData) => dispatch => {
	axios.put(`http://localhost:3004/places/${placeId}`, commentData)
	.then((res) => {
		dispatch({
			type: FETCH_PLACE,
			payload: res.data 
		});
	})
	.catch(function (error) {
		console.log(error);
	})
}

export const deleteComment = (placeId, removeCom) => dispatch => {
	axios.put(`http://localhost:3004/places/${placeId}`, removeCom)
	.then((res) => {
		dispatch({
			type: FETCH_PLACE,
			payload: res.data 
		});
	})
	.catch(function (error) {
		console.log(error);
	})
}