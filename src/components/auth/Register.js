import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import btnStyles from '../../scss/components/Buttons.module.scss'
import formStyles from '../../scss/components/CreateForm.module.scss'

const Register = (props) => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const registerUser = (e) => {
		e.preventDefault();
		
		axios.post('http://localhost:4000/api/user/register', {
			name,
        	email,
        	password
         })
        .then(function (response) {
			props.history.push('/');
        })
        .catch(function (error) {
            console.log(error);
        });
	}

	return (
		<Fragment>
			<div className="top-banner">
				{/*<h1>MainFeed Page</h1>*/}
			</div>
			<div className="container">
				<div className={formStyles.createForm}>
					<h2>Register</h2>
					<p>*All fields are required</p>
					<p>Already have an account?
						<Link className="login-link" to={'/login'}>Log in here</Link>
					</p>
					<form onSubmit={registerUser}>
						<div className={formStyles.createForm__field}>
							<label className={formStyles.createForm__label}>Name:</label>
							<input type="text" className={formStyles.createForm__input} onChange={(e) => setName(e.target.value)} />
						</div>
						<div className={formStyles.createForm__field}>
							<label className={formStyles.createForm__label}>Email:</label>
							<input type="text" className={formStyles.createForm__input} onChange={(e) => setEmail(e.target.value)} />
						</div>
						<div className={formStyles.createForm__field}>
							<label className={formStyles.createForm__label}>Password:</label>
							<input type="password" className={formStyles.createForm__input} onChange={(e) => setPassword(e.target.value)} />
						</div>
						<div className="create-form__btn">
							<input type="submit" value="Register" className={btnStyles.btn__submit} />
						</div>
					</form>
				</div>
			</div>
		</Fragment>
	)
}

export default Register