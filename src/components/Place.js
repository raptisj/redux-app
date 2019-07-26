import React, { Fragment, useState, useEffect } from 'react';
import placeImg from '../assets/place_one.jpg';
import axios from 'axios';
import Modal from 'react-awesome-modal';
import uuid from 'uuid/v1';
import { useDispatch, useSelector } from "react-redux";

const Place = (props) => {
	const place = useSelector(state => state.places.filter(p => p.id == props.match.params.id))
	console.log(place);
	
	const [singlePlace, setSinglePlace] = useState(place);
	const [modal, setModal] = useState(false);
	const [name, setName] = useState('');
	const [comment, setComment] = useState('');
	const [extensive, setExtensive] = useState('');
	const [likes, setLikes] = useState();
	const dispatch = useDispatch();

	console.log(singlePlace)
	useEffect(() => {
	 	// setSinglePlace(place);
	 // const fetchData = async () => {
  //    	const result = await axios.get(`http://localhost:3004/places/${props.match.params.id}`)
  //      		 setSinglePlace(result.data);
	 // 	}
	 // 	fetchData();
	 console.log(singlePlace)
	}, [])

	const openModal = () => {
		setModal(true);
	}

	const closeModal = () => {
		setModal(false);
	}

	const handleComment = (e) => {
		e.preventDefault();
		let id = uuid();
		dispatch({type: 'ADD_COMMENT', comment_id: id, name: name, comment: comment, extensive: extensive, placeId: singlePlace.id })
		// dispatch({type: 'ADD_COMMENT', comment: response.data.comments.slice(-1)[0] })
        // axios.put(`http://localhost:3004/places/${singlePlace.id}`, {
        // 	id: singlePlace.id,
        // 	title: singlePlace.title,
        // 	country: singlePlace.country,
        // 	subtitle: singlePlace.subtitle,
        // 	content: singlePlace.content,
        // 	likes: singlePlace.likes,
        // 	comments: [...singlePlace.comments, {"comment_id": id, "name": name, "comment": comment, "extensive": extensive}]
        // })
        // .then(function (response) {
        	setModal(false);
			// setSinglePlace(singlePlace);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    }

    const likeHandle = () => {
			// dispatch({type: 'ADD_LIKE', placeId: singlePlace.id })
			axios.put(`http://localhost:3004/places/${singlePlace.id}`, {
				id: singlePlace.id,
				title: singlePlace.title,
				country: singlePlace.country,
				subtitle: singlePlace.subtitle,
				content: singlePlace.content,
				likes: singlePlace.likes + 1,
				comments: [...singlePlace.comments]
			})
			.then(function (response) {
        	// setLikes(singlePlace.likes)
        })
			.catch(function (error) {
				console.log(error);
			});
		}

		const removeComment = (comId) => {
			axios.put(`http://localhost:3004/places/${singlePlace.id}`, {
				id: singlePlace.id,
				title: singlePlace.title,
				country: singlePlace.country,
				subtitle: singlePlace.subtitle,
				content: singlePlace.content,
				likes: singlePlace.likes,
				comments: singlePlace.comments.filter(c => c.comment_id !== comId)
			})
			.then(function (response) {
			// dispatch({type: 'DELETE_COMMENT', updatedComments: singlePlace.comments })
		})
			.catch(function (error) {
				console.log(error);
			});
		}

		return (
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
								<h3>{console.log(singlePlace.title)}</h3>
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
					<Modal 
					visible={modal}
					effect="fadeInUp"
					onClickAway={() => closeModal()}
					>
					<div className="modal-input">
						<h2>Add Comment</h2>
						<form onSubmit={handleComment}>
							<div className="create-form__field">
								<label className="create-form__label">Name:</label>
								<input type="text" className="create-form__input"
								onChange={(e) => setName(e.target.value)} autoFocus required />
							</div>
							<div className="create-form__field">
								<label className="create-form__label">Comment</label>
								<input type="text" className="create-form__input"
								onChange={(e) => setComment(e.target.value)} required />
							</div>
							<div className="create-form__field">
								<label className="create-form__label">Extensive</label>
								<textarea rows="6" cols="50" className="create-form__textarea"
								onChange={(e) => setExtensive(e.target.value)} required>
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
				{(singlePlace.comments) ? (
					singlePlace.comments.map(com => {
						return (
							<div key={com.comment_id} className="comments_each">
								<p>{com.name}</p>
								<h3>{com.comment}</h3>
								<p>{com.extensive}</p>
								{/*<button className="btn__delete-comment"
								//  onClick={() => dispatch({type: 'DELETE_COMMENT',  placeId: singlePlace.id, comId: com.comment_id }) }
								//  >
							//  Delete</button>*/}
								<button
								className="btn__delete-comment"
								onClick={() => removeComment(com.comment_id) }
								>Delete</button>
							</div>
						)
					})
					) : (
						<div>No Comments</div>
					)}
				</div>
				</div>
				</div>
			</div>
			</Fragment>
		);
	}

	export default Place;


