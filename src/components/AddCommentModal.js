import React, { Fragment, useState } from 'react';
import Modal from 'react-awesome-modal';
import uuid from 'uuid/v1';
import { useDispatch, useSelector } from "react-redux";
import { addComment } from '../actions/placeActions';
import { useForm } from './custom-hooks/useForm';
import btnStyles from '../scss/components/Buttons.module.scss';
import formStyles from '../scss/components/CreateForm.module.scss';

const AddCommentModal = ({singlePlace, modal, closeModal}) => {
	const [values, handleChange] = useForm({
    	name: '',
   		comment: '',
    	extensive: ''
  	});
	const dispatch = useDispatch();

	const handleComment = (e) => {
		e.preventDefault();
		let id = uuid();

		const newComment = {
			...singlePlace,
			id: singlePlace.id,
        	comments: [...singlePlace.comments, {
        		comment_id: id, 
        	 	name: values.name, 
        	 	comment: values.comment, 
        	 	extensive: values.extensive
        	 }]
    	};

    	dispatch(addComment(singlePlace.id, newComment));
    	closeModal();
    }

	return (
		<Fragment>
			<Modal 
			visible={modal}
			effect="fadeInUp"
			onClickAway={() => closeModal()}>
				<div className="modal-input">
					<h2>Add Comment</h2>
					<form onSubmit={handleComment}>
						<div className={formStyles.createForm__field}>
							<label className={formStyles.createForm__label}>Name:</label>
							<input
							type="text"
							className={formStyles.createForm__input}
							name="name"
							onChange={handleChange}
							autoFocus
							required />
						</div>
						<div className={formStyles.createForm__field}>
							<label className={formStyles.createForm__label}>Comment</label>
							<input 
							type="text" 
							className={formStyles.createForm__input}
							name="comment"
							onChange={handleChange} 
							required />
						</div>
						<div className={formStyles.createForm__field}>
							<label className={formStyles.createForm__label}>Extensive</label>
							<textarea
							rows="6" cols="50" 
							className={formStyles.createForm__textarea}
							name="extensive"
							onChange={handleChange} 
							required>
							</textarea>
						</div>
						<div className="create-form__btn">
							<input type="submit" value="Submit" className={btnStyles.btn__submit}/>
						</div>
					</form>
					<a href="javascript:void(0);" className="modal-close" onClick={() => closeModal()}>Close</a>
				</div>
			</Modal>
		</Fragment>
	);
}

export default AddCommentModal;