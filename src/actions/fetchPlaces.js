import axios from 'axios';

export const fetchPlaces = (places) => {
	return (dispatch, getState) => {
		axios.get('http://localhost:3004/places')
		// axios.get('https://api.myjson.com/bins/1dvz9t')
		.then((response) => {
			let data = response.data;
			dispatch({type: 'FETCH_PLACE', data});
		})
		.catch(function (error) {
			console.log(error);
		})
	}
}