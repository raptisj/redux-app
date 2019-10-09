import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import placeImg from '../../assets/place_one.jpg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchPlaces, filterPlaces } from '../../actions/placeActions';
import { useFetch } from './../custom-hooks/useFetch';
import Spinner from './../general/Spinner';
import btnStyles from '../../scss/components/Buttons.module.scss';

const MainFeed = () => {
	const places = useSelector(state => state.places.places);
	const filteredList = useSelector(state => state.places.filtered);
	const [isFiltered, setIsFiltered] = useState(false)
	const dispatch = useDispatch();
	let placesList = places;

	if(isFiltered) {
		placesList = filteredList;
	}

	useEffect(() => {
		dispatch(fetchPlaces());
	}, [dispatch])

	// const {data, loading} = useFetch(`http://localhost:4000/posts`)
	let endpoint = `https://gentle-scrubland-61451.herokuapp.com/posts`
	const {data, loading} = useFetch(endpoint)
	const handleSearch = (e) => {
		let current = e.target.value.toLowerCase();
      	let pp;

		 if (current !== ' ') {
			pp = places.filter(r => {
		    	if(r.title.toLowerCase().includes(current)) {
		        	return r
		   		}
	       	})
			setIsFiltered(true)
		 } 			 
		dispatch(filterPlaces(pp));
	}

	const truncateContent = (content) => {
		function truncate(str, no_words) {
	    	return str.split(" ").splice(0, no_words).join(" ");
		}
		return truncate(content, 20)
	}

	return (
		<Fragment>
		<div className="top-banner">
			<h1>The Place To Be</h1>
			<div className="search-bar">
				<form className="search-bar__form">
					<label className="search-bar__label">Search for a place:</label>
					<input 
					type="text" 
					className="search-bar__input"
					onChange={handleSearch} />
				</form>
			</div>
		</div>
		<div className="main-feed">
		<h2>Places</h2>
			<ul>		
			{(placesList) ? (
				placesList.map( place => {
				return (
					<li key={place.id} className="main-feed__item">
						<div className="likes">
							<span>Likes</span>
							<span className="num">{place.likes}</span>
						</div>
						<div className="main-feed__item-img">
						<Link to={`place/${place.id}`} className="img-link">
							<img src={placeImg} alt="img" />
						</Link>
						</div>
						<div className="main-feed__item-info">
						<Link  to={`place/${place.id}`} className="title-link">
							<h3>{place.title}</h3>
						</Link>
							<span>{place.subtitle}</span>
							<div className="item-content">
								<p>{truncateContent(place.content)}
									<Link className="read-more" to={`place/${place.id}`}>...more</Link>
								</p>	
							</div>
						</div>	
					</li>
				)
			}) ) : (<div></div>)}
			</ul>
			<div className="latest-posts">
 				<h2>Latest Blog Posts</h2>
 				{(data) ? (
 					data.map(post => {
					return (
					<div className="latest-posts__each" key={post._id}>
						<Link to={`posts/${post._id}`}>
							<h3>{post.title}</h3>
						</Link>
						<p><span>Description:</span>
						 {truncateContent(post.description)}
						 <Link className="read-more" to={`posts/${post._id}`}>...more</Link>
						 </p>
						<p className="date">{post.date}</p>
 					</div>
 					)
 				})
 					) : (<Spinner />)}
 				<Link to="/posts" className={btnStyles.btn__toBlog}>All Posts</Link>
 			</div>
		</div>
		</Fragment>
	);
}
export default MainFeed;



// const MainFeed = () => {
// 	const places = useSelector(state => state.places);



// 	return (
// 		<Fragment>
// 		<div className="top-banner">
// 			<h1>MainFeed Page</h1>
// 			<div className="search-bar">
// 				<form className="search-bar__form">
// 					<label className="search-bar__form">Search for a place:</label>
// 					<input type="text" className="search-bar__input" />
// 				</form>
// 			</div>
// 		</div>
// 		<div className="main-feed">
// 			<ul>
// 			{places.map( place => {
// 				return (
// 					<li key={place.id} className="main-feed__item">
// 						<div className="likes">
// 							<span>Likes</span>
// 							<span className="num">{place.likes}</span>
// 						</div>
// 						<div className="main-feed__item-img">
// 						<Link to={`place/${place.id}`} className="img-link">
// 							<img src={placeImg} alt="img" />
// 						</Link>
// 						</div>
// 						<div className="main-feed__item-info">
// 						<Link  to={`place/${place.id}`} className="title-link">
// 							<h3>{place.title}</h3>
// 							<span>{place.subtitle}</span>
// 						</Link>
// 							<p>{place.content}</p>	
// 						</div>	
// 					</li>
// 				)
// 			})}
// 			</ul>
// 			<div className="latest-posts">
// 				<h2>Latest Blog Posts</h2>
// 				{posts.map(post => {
// 					return (
// 					<div className="latest-posts__each" key={post._id}>
// 						<Link to={`posts/${post._id}`}>
// 							<h3>{post.title}</h3>
// 						</Link>
// 						<p><span>Description:</span> {post.description}</p>
// 						<p className="date">{post.date}</p>
// 					</div>
// 					)
// 				})}
// 				<button className="btn__to-blog">See More</button>
// 			</div>
// 		</div>
// 		</Fragment>
// 	);
// }