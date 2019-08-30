import React, { useState, Fragment } from 'react';
import uuid from 'uuid/v1';
import { useDispatch } from "react-redux";
import { addPlace } from '../actions/placeActions';
import { useForm } from './custom-hooks/useForm';
import btnStyles from '../scss/components/Buttons.module.scss';
import formStyles from '../scss/components/CreateForm.module.scss';

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
				<div className={formStyles.createForm}>
				<h2>Place Form</h2>
				<p>Add all infomation about your place</p>
					<form onSubmit={handlePost}>
						<div className={formStyles.createForm__field}>
							<label className={formStyles.createForm__label}>Name:</label>
							<input
							type="text"
							className={formStyles.createForm__input} 
							name="name"
							onChange={handleChange}
							/>
						</div>
						<div className={formStyles.createForm__field}>
							<label className={formStyles.createForm__label}>Country:</label>
							<input 
							type="text" 
							className={formStyles.createForm__input}   
							name="country"
							onChange={handleChange}
							/>
						</div>
						<div className={formStyles.createForm__field}>
							<label className={formStyles.createForm__label}>Subtitle:</label>
							<input 
							type="text" 
							className={formStyles.createForm__input}
							name="subtitle"
							onChange={handleChange}
							/>
						</div>
						<div className={formStyles.createForm__field}>
							<label className={formStyles.createForm__label}>Description</label>
							<textarea 
							rows="12" cols="50" 
							className={formStyles.createForm__textarea}  
							name="description"
							onChange={handleChange}
							>
							</textarea>
						</div>
						<div className="create-form__btn">
							<input type="submit" value="Submit" className={btnStyles.btn__submit}/>
						</div>
					</form>
				</div>
			</div>
		</Fragment>
	)
}

export default CreatePlace;