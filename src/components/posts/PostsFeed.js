import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostsFeed = () => {
	const url = `https://gentle-scrubland-61451.herokuapp.com/posts`;
	const [posts, setPosts] = useState('');
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		const loadData = async () => {
			const res = await axios.get(url);
			setMounted(true)
			setPosts(res.data)
		}
		loadData();
	}, [mounted])
	
	return (
		<div className="blog mh-100">
			{(posts) ? (
				<Fragment>
					<div className="blog__header">
						<h1>All posts</h1>
						<p>Here you can learn all about our latest news</p>
					</div>
					<div className="blog__grid">
					{posts.map(post => {
						return (
							<div className="blog__each-post" key={post._id}>
								<Link to={`posts/${post._id}`}>
									<h3>{post.title}</h3>
								</Link>
								<p><span>Description:</span>
						 			<Link className="read-more" to={`posts/${post._id}`}>...more</Link>
						 		</p>
								<p className="date">{post.date}</p>
 							</div>
						)
					})}
					</div>
				</Fragment>
				) : (<div></div>)}
		</div>
	)
}

export default PostsFeed
						 			// {truncateContent(post.description)}