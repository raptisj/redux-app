import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const SinglePost = (props) => {
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
		<div className="post mh-100">
			{(mounted) ? (
				<Fragment>
					<div className="post__header">
						<h3>{singlePost.title}</h3>
					</div>
					<section className="main-feed">
					<div className="post__actions">
						<button className="btn__delete-post" onClick={() => deletePost(singlePost._id)}>Delete</button>
						<Link className="btn__create-post" to={'/create-post'}>
							Create New Post
						</Link>
					</div>
					<div className="post__content">
						<span>{singlePost.date}</span>
						<div className="post__content--inner">
							<p>{singlePost.description}</p>
						</div>
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