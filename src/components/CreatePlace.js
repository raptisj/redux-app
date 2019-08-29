import React, { useState, Fragment } from 'react';
import axios from 'axios';
import uuid from 'uuid/v1';
import { useDispatch } from "react-redux";
import { addPlace } from '../actions/placeActions';
// import { withRouter } from "react-router-dom";

const CreatePlace = (props) => {
	const [name, setName] = useState('');
	const [country, setCountry] = useState('');
	const [subtitle, setSubtitle] = useState('');
	const [description, setDescription] = useState('');
	const dispatch = useDispatch();

	const handlePost = (e) => {
       e.preventDefault();
        let id = uuid();

        const placeData = {
        	id,
        	title: name,
        	country,
        	subtitle,
        	content: description,
        	likes: 0,
        	comments: []
        }

        dispatch(addPlace(placeData))
        props.history.push('/');
	}

	return (
		<Fragment>
			<div className="top-banner">
				<h1>MainFeed Page</h1>
			</div>
			<div className="container">
				<div className="create-form">
				<h2>Place Form</h2>
				<p>Add all infomation about your place</p>
					<form onSubmit={handlePost}>
						<div className="create-form__field">
							<label className="create-form__label">Name:</label>
							<input
							type="text"
							className="create-form__input" 
							onChange={(e) => setName(e.target.value)}
							 />
						</div>
						<div className="create-form__field">
							<label className="create-form__label">Country:</label>
							<input 
							type="text" 
							className="create-form__input"  
							onChange={(e) => setCountry(e.target.value)} 
							/>
						</div>
						<div className="create-form__field">
							<label className="create-form__label">Subtitle:</label>
							<input 
							type="text" 
							className="create-form__input" 
							onChange={(e) => setSubtitle(e.target.value)} 
							/>
						</div>
						<div className="create-form__field">
							<label className="create-form__label">Description</label>
							<textarea 
							rows="12" cols="50" 
							className="create-form__textarea"  
							onChange={(e) => setDescription(e.target.value)}>
							</textarea>
						</div>
						<div className="create-form__btn">
							<input type="submit" value="Submit" className="btn__submit"/>
						</div>
					</form>
				</div>
			</div>
		</Fragment>
	)
}

export default CreatePlace;