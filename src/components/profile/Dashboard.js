import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useFetch } from './../custom-hooks/useFetch';

const hr = {
	border: 'none',
  	borderBottom: '1px solid #e6e6e6'
};

const Dashboard = (props) => {
	// const url = 'http://localhost:4000/api/profile';
	const [user, setUser] = useState();
	useEffect(() => {
		axios.get('http://localhost:4000/api/profile')
		.then(res => setUser(res.data))
		// const loadData = async () => {
		// 	const res = await axios.get(url);
		// 	setMounted(true)

		// }
		// loadData();
	}, [])
// let endpoint = `http://localhost:4000/api/profile`
// 	const {data, loading} = useFetch(endpoint)
	// let au = 'http://localhost:4000/api/profile';
	// const {data, loading} = useFetch(au);

	return (
		<Fragment>
			<div className="top-banner">

			</div>
			<section className="dashboard">
				<div className="dashboard__sidebar">
					<ul>
						<li className="dashboard__sidebar--title">
							<span>Options</span>
						</li>
						<li>
							<Link>Places</Link>
						</li>
						<li>
							<Link>Comments</Link>
						</li>
						<li>
							<Link>Posts</Link>
						</li>
						<hr style={hr} />
						<li>
							<Link>Settings</Link>
						</li>
					</ul>
				</div>
				<div className="dashboard__main">
					<h1>Matt Davella</h1>
					<h2>Dashboard</h2>
					<div className="dashboard__main--content">
						<h3>Bio</h3>
						<p>Wether you are new to programming or already an experienced developer.
						In this industry learning new concepts and languages/frameworks is
						mandatory to keep up with the rapid changes. Take for example React - open-sourced by
						Facebook just a shy 4 years ago it already became the number one choice for JavaScript
						devs around the globe. But also Vue and Angular of course have their legitimate follower-base. And then there is Svelte,
	  					and universal frameworks like Next.js or Nuxt.js, and Gatsby, and Gridsome, and 
	  					Quasar, and and and. If you want to shine as an expert JavaScript developer you should 
	  					at least have some experience in different frameworks and libraries - besides
	  					doing your homework with good, old JS.</p>

	  					<h3>Work</h3>
						<p> If you want to shine as an expert JavaScript developer you should 
	  					at least have some experience in different frameworks and libraries - besides
	  					doing your homework with good, old JS.</p>

	  					<h3>Experience</h3>
						<p>already an experienced developer.
						In this industry learning new concepts and languages/frameworks is
						mandatory to keep up with the rapid changes. Take for example React - open-sourced by
						Facebook just a shy 4 years.</p>
					</div>
				</div>
			</section>
		</Fragment>
	)
}

export default Dashboard
			// {(user) ? (<h2>{user.name}</h2>) : (<div></div>)}