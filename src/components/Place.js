import React, { Fragment, useState, useEffect } from 'react';
import placeImg from '../assets/place_one.jpg';
import axios from 'axios';
import Modal from 'react-awesome-modal';
import uuid from 'uuid/v1';
import { useDispatch, useSelector } from "react-redux";
import { 
	fetchPlace,
 	deletePlace, 
 	addComment, 
 	deleteComment, 
	addLike 
} from '../actions/placeActions';
import Spinner from './general/Spinner';
import AddCommentModal from './AddCommentModal';

const Place = (props) => {
	const [modal, setModal] = useState(false);
	const dispatch = useDispatch();

	const singlePlace = useSelector(state => state.places.place);

	useEffect(() => {
		dispatch(fetchPlace(props.match.params.id));
	}, [])

	const openModal = () => {
		setModal(true);
	}

	const closeModal = () => {
		setModal(false);
	}

    const likeHandle = () => {
		const likes = {
			...singlePlace,
			likes: singlePlace.likes + 1
		}
		dispatch(addLike(singlePlace.id, likes))
	}

	const removeComment = (comId) => {
		const removeCom = {
   			...singlePlace,
        	comments: singlePlace.comments.filter(c => c.comment_id !== comId)
		};

		dispatch(deleteComment(singlePlace.id, removeCom));
	}

	const deleteThisPlace = () => {
		dispatch(deletePlace(singlePlace.id))
		props.history.push('/');
	}

	return (
		<Fragment>
			{(singlePlace) ? (
		<Fragment>
		<div className="top-banner">
			<h1>MainFeed Page</h1>
			<div className="search-bar">
				<div className="top-bar-info">
					<ul>
						<li>Likes: {singlePlace.likes}</li>
						<li>Comments: {(singlePlace.comments) ?
						( <span>{singlePlace.comments.length}</span> ) : ( <Fragment></Fragment> )}
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="container">
			<div className="single-place">
				<div className="sidebar">
					<div className="featured-img">
						<img src={placeImg} alt="img" />
					</div>
					<ul>	
						<li className="sidebar__info">
							<h3>{singlePlace.title}</h3>
						</li>
						<li className="sidebar__info">
							{singlePlace.subtitle}
						</li>
						<li className="sidebar__info">
							<p>{singlePlace.content}</p>
						</li>
					</ul>
				</div>
			<div className="main-content">
				<button onClick={likeHandle} className="btn__like">Like</button>
				<button onClick={openModal} className="btn__comment">Add Comment</button>
				<button onClick={deleteThisPlace} className="btn__delete-place">Delete Place</button>

				<AddCommentModal singlePlace={singlePlace} modal={modal} closeModal={closeModal} />

				<div className="top-message">
					<h2>You said about us</h2>
					<p>Your opition mattes to us. Feel free to express your self. If you curse you comment will be removed</p>
				</div>
				<div className="comments">
				{(singlePlace.comments) ? (
					singlePlace.comments.map(com => {
						return (
							<div key={com.comment_id} className="comments_each">
								<p>{com.name}</p>
								<h3>{com.comment}</h3>
								<p>{com.extensive}</p>
								<button
								className="btn__delete-comment"
								onClick={() => removeComment(com.comment_id) }
								>Delete</button>
							</div>
						)
					})
					) : (<div>No Comments</div>)}
				</div>
			</div>
			</div>
		</div>
		</Fragment>
		) : (<div></div>)}
		</Fragment>
	);
}

export default Place;


