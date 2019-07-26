// import { SET_ARTICLE_DETAILS } from './types';
// import axios from "axios";

// export const increment = () => {
// 	return {
// 		type: 'INCREMENT'
// 	}
// }

// export const decrement = () => {
// 	return {
		// type: 'DECREMENT'
// 	}
// }

// const apiUrl = 'http://localhost:3000/users';

// export const setArticleDetails = (data) => {
// 	return {
// 		type: 'SET_ARTICLE_DETAILS',
// 		data
// 	}
// };

// export const fetchArticleDetails = () => {
// 	return (dispatch) => {
// 		return axios.get(apiUrl)
// 		.then(response => {
// 			dispatch(setArticleDetails(response.data))
// 		})
// 		.catch(error => {
// 			throw(error);
// 		});
// 	}
// };


// const setAddingName = () => ({
// 	type: ADD_TODO_STARTED
// });

// export const addingUser = ({id, name}) => {
// 	return dispatch => {
// 		dispatch(setAddingName());

// 		axios.post('http://localhost:3000/users', {
// 			id: id,
// 			name: addUser
// 		});
// 	}
// } 

// export function fetchArticleDetails() {
// 	return function(dispatch) {
// 		return axios.get("http://localhost:3000/users").then(({ data }) => {
// 			dispatch(setArticleDetails(data));
// 		});
// 	};
// }

// function setArticleDetails(data) {
// 	return {
// 		type: 'SET_ARTICLE_DETAILS',
// 		payload: data
// 	};
// }