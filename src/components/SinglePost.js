import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const SinglePost = (props) => {
	// const url = `http://localhost:4000/posts/${props.match.params.id}`;
	const url = `https://gentle-scrubland-61451.herokuapp.com/posts/${props.match.params.id}`;
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

	const deletePost = (id) => {
		axios.delete(`https://gentle-scrubland-61451.herokuapp.com/posts/${id}`)
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
					<button onClick={() => deletePost(singlePost._id)}>Delete</button>
						<Link to={'/create-post'}>
							<span>Create New Post</span>
						</Link>
					<section className="main-feed">
						<div className="description">
							<p>{singlePost.description}</p>
							<span>{singlePost.date}</span>
						</div>
					</section>
				</Fragment>
			) : (
				<div>Loading ...</div>
			)}
		</div>
	)
}

export default SinglePost;