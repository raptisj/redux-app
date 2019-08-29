import React, { Fragment, useState, useEffect } from 'react';
import placeImg from '../assets/place_one.jpg';
import axios from 'axios';
import Modal from 'react-awesome-modal';
import uuid from 'uuid/v1';
import { useDispatch, useSelector } from "react-redux";
import { fetchPlace, deletePlace, addComment, deleteComment } from '../actions/placeActions';

const Place = (props) => {
	const [singlePlace, setSinglePlace] = useState([]);
	const [modal, setModal] = useState(false);
	const [name, setName] = useState('');
	const [comment, setComment] = useState('');
	const [extensive, setExtensive] = useState('');
	const [likes, setLikes] = useState();
	const [del, setDel] = useState(false);
	const dispatch = useDispatch();

	const place = useSelector(state => state.places);
	const singleplace = place.place;	
	console.log(singleplace)

	useEffect(() => {
		dispatch(fetchPlace(props.match.params.id));
		setSinglePlace(place.place)
	}, [])

	useEffect(() => {
	 // axios.get(`http://localhost:3004/places/${props.match.params.id}`)
	 // .then(res => {
	 // 	setSinglePlace(res.data)
	 // })
	}, [modal, del, likes])

	const openModal = () => {
		setModal(true);
	}

	const closeModal = () => {
		setModal(false);
	}

	const handleComment = (e) => {
		e.preventDefault();
		let id = uuid();

		const newComment = {
			...singleplace,
			id: singleplace.id,
        	comments: [...singleplace.comments, {comment_id: id, name, comment, extensive}]
    	};

    	dispatch(addComment(singleplace.id, newComment));
    	setModal(false);
    }

    const likeHandle = () => {
    	setDel(!del)
			axios.put(`http://localhost:3004/places/${singlePlace.id}`, {
				id: singlePlace.id,
				title: singlePlace.title,
				country: singlePlace.country,
				subtitle: singlePlace.subtitle,
				content: singlePlace.content,
				likes: singlePlace.likes + 1,
				comments: [...singlePlace.comments]
			})
			.catch(function (error) {
				console.log(error);
			});
		}

		const removeComment = (comId) => {
			// setDel(!del)
			const removeCom = {
	   			...singleplace,
	        	comments: singleplace.comments.filter(c => c.comment_id !== comId)
    		};

			dispatch(deleteComment(singleplace.id, removeCom));
		}

		const deleteThisPlace = () => {
			dispatch(deletePlace(singleplace.id))
			props.history.push('/');
		}

		return (
			<Fragment>
				{(singleplace) ? (
			<Fragment>
			<div className="top-banner">
				<h1>MainFeed Page</h1>
				<div className="search-bar">
					<div className="top-bar-info">
						<ul>
							<li>Likes: {singleplace.likes}</li>
							<li>Comments: {(singleplace.comments) ?
							( <span>{singleplace.comments.length}</span> ) : ( <Fragment></Fragment> )}
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
								<h3>{singleplace.title}</h3>
							</li>
							<li className="sidebar__info">
								{singleplace.subtitle}
							</li>
							<li className="sidebar__info">
								<p>{singleplace.content}</p>
							</li>
						</ul>
					</div>
				<div className="main-content">
					<button onClick={likeHandle} className="btn__like">Like</button>
					<button onClick={openModal} className="btn__comment">Add Comment</button>
					<button onClick={deleteThisPlace} className="btn__delete-place">Delete Place</button>
					<Modal 
					visible={modal}
					effect="fadeInUp"
					onClickAway={() => closeModal()}>
						<div className="modal-input">
							<h2>Add Comment</h2>
							<form onSubmit={handleComment}>
								<div className="create-form__field">
									<label className="create-form__label">Name:</label>
									<input
									type="text"
									className="create-form__input"
									onChange={(e) => setName(e.target.value)}
									autoFocus
									required />
								</div>
								<div className="create-form__field">
									<label className="create-form__label">Comment</label>
									<input 
									type="text" 
									className="create-form__input"
									onChange={(e) => setComment(e.target.value)} 
									required />
								</div>
								<div className="create-form__field">
									<label className="create-form__label">Extensive</label>
									<textarea
									rows="6" cols="50" 
									className="create-form__textarea"
									onChange={(e) => setExtensive(e.target.value)} 
									required>
									</textarea>
								</div>
								<div className="create-form__btn">
									<input type="submit" value="Submit" className="btn__submit"/>
								</div>
							</form>
							<a href="javascript:void(0);" className="modal-close" onClick={() => closeModal()}>Close</a>
						</div>
					</Modal>

					<div className="top-message">
						<h2>You said about us</h2>
						<p>Your opition mattes to us. Feel free to express your self. If you curse you comment will be removed</p>
					</div>
					<div className="comments">
					{(singleplace.comments) ? (
						singleplace.comments.map(com => {
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
			) : (<div>Loading....</div>)}
			</Fragment>
		);
	}

	export default Place;


