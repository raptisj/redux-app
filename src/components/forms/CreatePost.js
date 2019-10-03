import React, { Fragment, useState } from 'react';
import axios from 'axios';
import btnStyles from '../../scss/components/Buttons.module.scss';
import formStyles from '../../scss/components/CreateForm.module.scss';

const CreatePost = (props) => {
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();
	const createPost = (e) => {
		e.preventDefault();
		// http://localhost:4000/posts
		axios.post('https://gentle-scrubland-61451.herokuapp.com/posts', {
        	title,
        	description
         })
        .then(function (response) {
			props.history.push('/');
        })
        .catch(function (error) {
            console.log(error);
        });
	}
	return (
		<Fragment>
			<div className="top-banner">
				{/*<h1>MainFeed Page</h1>*/}
			</div>
			<div className="container">
				<div className={formStyles.createForm}>
					<h2>Create New Post</h2>
					<form onSubmit={createPost}>
						<div className={formStyles.createForm__field}>
							<label className={formStyles.createForm__label}>Title:</label>
							<input type="text" className={formStyles.createForm__input} onChange={(e) => setTitle(e.target.value)} />
						</div>
						<div className={formStyles.createForm__field}>
							<label className={formStyles.createForm__label}>Content:</label>
							<textarea rows="12" cols="50" className={formStyles.createForm__textarea}  onChange={(e) => setDescription(e.target.value)}>
							</textarea>
						</div>
						<div className="create-form__btn">
							<input type="submit" value="Submit" className={btnStyles.btn__submit} />
						</div>
					</form>
				</div>
			</div>
		</Fragment>
	)
}

export default CreatePost