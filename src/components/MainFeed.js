import React, { Fragment } from 'react';
import placeImg from '../assets/place_one.jpg';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
// import { fetchPlaces } from '../actions/fetchPlaces';

const MainFeed = () => {
	const places = useSelector(state => state.places);

	return (
		<Fragment>
		<div className="top-banner">
			<h1>MainFeed Page</h1>
			<div className="search-bar">
				<form className="search-bar__form">
					<label className="search-bar__form">Search for a place:</label>
					<input type="text" className="search-bar__input" />
				</form>
			</div>
		</div>
		<div className="main-feed">
			<ul>
			{places.map( place => {
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
							<span>{place.subtitle}</span>
						</Link>
							<p>{place.content}</p>	
						</div>	
					</li>
				)
			})}
			</ul>
		</div>
		</Fragment>
	);
}

export default MainFeed;