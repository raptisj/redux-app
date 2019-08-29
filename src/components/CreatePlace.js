import React, { useState, Fragment } from 'react';
import uuid from 'uuid/v1';
import { useDispatch } from "react-redux";
import { addPlace } from '../actions/placeActions';
import { useForm } from './custom-hooks/useForm';

const CreatePlace = (props) => {
	const [values, handleChange] = useForm({
    	name: '',
   		country: '',
    	subtitle: '',
    	description: ''
  	});

	const dispatch = useDispatch();

	const handlePost = (e) => {
       e.preventDefault();
        let id = uuid();

        const placeData = {
        	id,
        	title: values.name,
        	country: values.country,
        	subtitle: values.subtitle,
        	content: values.description,
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
							name="name"
							onChange={handleChange}
							/>
						</div>
						<div className="create-form__field">
							<label className="create-form__label">Country:</label>
							<input 
							type="text" 
							className="create-form__input"   
							name="country"
							onChange={handleChange}
							/>
						</div>
						<div className="create-form__field">
							<label className="create-form__label">Subtitle:</label>
							<input 
							type="text" 
							className="create-form__input"
							name="subtitle"
							onChange={handleChange}
							/>
						</div>
						<div className="create-form__field">
							<label className="create-form__label">Description</label>
							<textarea 
							rows="12" cols="50" 
							className="create-form__textarea"  
							name="description"
							onChange={handleChange}
							>
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