import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios';

const SinglePost = (props) => {
	const url = `http://localhost:4000/posts/${props.match.params.id}`;
	const [singlePost, setSinglePost] = useState('');
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		const loadData = async () => {
			const res = await axios.get(url);
			setMounted(true)
			setSinglePost(res.data)
		}
		loadData();
	}, [mounted])

	const [title, setTitle] = useState();
	const [description, setDescription] = useState();
	const createPost = (e) => {
		e.preventDefault();
		axios.post('http://localhost:4000/posts', {
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

	const deletePost = (id) => {
		axios.delete(`http://localhost:4000/posts/${id}`)
		.then(function (response) {
			props.history.push('/');
		})
	}

	return (
		<div>
			{(mounted) ? (
				<Fragment>
					<div className="post_header">
						<h3>{singlePost.title}</h3>
					</div>
					<section className="main-feed">
						<div className="description">
							<p>{singlePost.description}</p>
							<span>{singlePost.date}</span>
							<button onClick={() => deletePost(singlePost._id)}>Delete</button>
						</div>
					</section>
				</Fragment>
			) : (
				<div>Loading ...</div>
			)}


			<form onSubmit={createPost}>
					<div className="create-form__field">
						<label className="create-form__label">Title:</label>
						<input type="text" className="create-form__input" onChange={(e) => setTitle(e.target.value)} />
					</div>
					<div className="create-form__field">
						<label className="create-form__label">Description</label>
						<textarea rows="12" cols="50" className="create-form__textarea"  onChange={(e) => setDescription(e.target.value)}>
						</textarea>
					</div>
					<div className="create-form__btn">
						<input type="submit" value="Submit" className="btn__submit"/>
					</div>
				</form>
		</div>
	)
}

export default SinglePost;